import { Mail, MapPin, Phone } from "lucide-react";

import { Category } from "@/lib/types";
import { Link } from "@/i18n/navigation";
import Logo from "./logo";
import { getAllCategories } from "@/services";
import { getTranslations } from "next-intl/server";

const contactInfo = [
  {
    icon: Mail,
    content: (
      <a href="mailto:info@ls4it.com" className="hover:text-muted-foreground">
        info@ls4it.com
      </a>
    ),
  },
  {
    icon: Phone,
    content: (
      <li className="hover:text-muted-foreground">
        0657 32450
      </li>
    ),
  },
  {
    icon: MapPin,
    content: <span>AFZ Office 1038, Ajman Free Zone, UAE</span>,
  },
];

export default async function SiteFooter({
  locale = "en",
}: {
  readonly locale: "en" | "ar";
}) {
  const t = await getTranslations("Footer");
  const th = await getTranslations("Header");

  const { categories } = (await getAllCategories(locale)) as {
    categories: Category[];
  };

  const footerLinks = [
    {
      title: t("company"),
      links: [
        { label: th("about"), href: "/about" },
        { label: th("ourServices"), href: "/#our-services" },
        { label: t("caseStudies"), href: "/#case-studies" },
        { label: th("contactUs"), href: "/#contact" },
      ],
    },
    {
      title: t("productCategories"),
      links: categories.map((cat) => ({
        label: cat.name,
        href: `/products/${cat.slug}`,
      })),
    },
    {
      title: t("resources"),
      links: [
        { label: t("fabricTechnologies"), href: "/#technologies" },
        { label: t("productCatalog"), href: "/products" },
        { label: t("certifications"), href: "/#certifications" },
        { label: t("whyChooseUs"), href: "/#why-us" },
      ],
    },
  ];

  return (
    <footer
      className="mt-16 mx-0 md:mx-16 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-t"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        {t("footer")}
      </h2>

      <div className="container mx-auto px-4 md:px-6 py-6 sm:py-12">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4 flex flex-col items-start">
            <Link href="/" className="mb-6 md:mb-0">
              <Logo className="absolute inset-0 -ml-6 -mt-4 md:-ml-6 md:-mt-6 md:size-44" />
            </Link>
            <div className="mt-10">
              <h1 className="text-xl font-bold text-black tracking-wide">
                {t("brand")}
              </h1>
              <p className="mt-2 text-sm text-primary">{t("brandDesc")}</p>
            </div>
          </div>

          {/* Links */}
          <nav className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {footerLinks.map(({ title, links }) => (
              <div key={title}>
                <div className="text-xs uppercase tracking-wide text-primary">
                  {title}
                </div>
                <ul className="mt-3 space-y-2 text-sm">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-slate-700 hover:underline hover:text-muted-foreground"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div>
              <div className="text-xs uppercase text-primary tracking-wide ">
                {t("contact")}
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                {contactInfo.map(({ icon: Icon, content }, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <Icon
                      className={`${
                        Icon === MapPin ? "h-8 w-8 sm:h-6 sm:w-6" : "h-4 w-4"
                      } text-slate-500 mt-0.5`}
                    />
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t pt-6 flex flex-col gap-3 sm:flex-row sm:items-center text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} {t("brand")}. {t("rights")}
          </div>
          <div className="sm:ml-auto flex items-center gap-4">
            {["privacy", "terms", "sitemap"].map((item) => {
              const path = item === "sitemap" ? "/sitemap.xml" : `/${item}`;
              return (
                <Link
                  key={item}
                  href={path}
                  className="hover:text-slate-800 hover:underline"
                >
                  {t(item)}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
