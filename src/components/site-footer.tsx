import { Mail, MapPin, Phone } from "lucide-react";

import { Category } from "@/lib/types";
import Link from "next/link";
import Logo from "./logo";
import { getAllCategories } from "@/app/services";

const contactInfo = [
  {
    icon: Mail,
    content: (
      <a
        href="mailto:hello@suntechfabrics.com"
        className="hover:text-muted-foreground"
      >
        info@lsit.com
      </a>
    ),
  },
  {
    icon: Phone,
    content: (
      <a href="tel:+97152666997" className="hover:text-muted-foreground">
        0657 32450
      </a>
    ),
  },
  {
    icon: MapPin,
    content: (
      <span>
        AFZ Office 1038, Ajman Free Zone, UAE
      </span>
    ),
  },
];

export default async function SiteFooter() {
  const { categories } = (await getAllCategories()) as {
    categories: Category[];
  };

  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Our Services", href: "/#our-services" },
        { label: "Case Studies", href: "/#case-studies" },
        { label: "Contact", href: "/#contact" },
      ],
    },
    {
      title: "Product Categories",
      links: categories.map((cat) => ({
        label: cat.name,
        href: `/products/${cat.slug}`,
      })),
    },
    {
      title: "Resources",
      links: [
        { label: "Fabric Technologies", href: "#technologies" },
        { label: "Product Catalog", href: "/products" },
        { label: "Certifications", href: "#certifications" },
        { label: "Why Choose Us", href: "#why-us" },
      ],
    },
  ];

  return (
    <footer
      className="mt-16 mx-0 md:mx-16 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-t"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container mx-auto px-4 md:px-6 py-6 sm:py-12">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4 flex flex-col items-start">
            <Link href="/">
              <Logo className="absolute inset-0 -ml-6 -mt-2 md:-ml-6 md:-mt-6 md:size-44" />
            </Link>
            <p className="md:mt-10 mt-16 text-sm text-primary">              <h1 className="text-xl font-bold text-black mb-2 tracking-wide">Lateral System for Innovation Technology</h1>
              Engineering textiles for heat control, protection, and all-weather
              performance.
            </p>
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
                Contact
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                {contactInfo.map(({ icon: Icon, content }, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <Icon className="h-4 w-4 text-slate-500 mt-0.5" />
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
            © {new Date().getFullYear()} Lateral System For Innovation
            Technology. All rights reserved.
          </div>
          <div className="sm:ml-auto flex items-center gap-4">
            {["Privacy", "Terms", "Sitemap"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="hover:text-slate-800 hover:underline"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
