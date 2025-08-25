import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Category } from "@/lib/types";
import { ChevronRightIcon } from "lucide-react";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./common/locale-switcher";
import Logo from "./logo";
import MetallicButton from "./common/metallic-button";
import MobileMenu from "./mobile-menu";
import { getAllCategories } from "@/services";
import { useTranslations } from "next-intl";

export default async function SiteHeader({
  locale = "en",
}: {
  readonly locale: "en" | "ar";
}) {
  const t = useTranslations("Header");

  const { categories } = (await getAllCategories(locale)) as {
    categories: Category[];
  };

  const primaryLinks = [
    { label: t("about"), href: "/about" },
    { label: t("ourServices"), href: "/#our-services" },
    { label: t("technologies"), href: "/technology" },
  ];

  return (
    <header className="sticky top-0 z-[99] w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center gap-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded"
        >
          <Logo className="w-36 mt-4" />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="ml-auto hidden md:flex">
          <NavigationMenuList>
            {/* About */}
            <NavigationMenuItem>
              <Link
                href="/about"
                className="data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4 px-4 py-2 font-semibold text-muted-foreground hover:text-slate-900"
              >
                {t("about")}
              </Link>
            </NavigationMenuItem>

            {/* Our Services */}
            <NavigationMenuItem>
              <Link
                href="/#our-services"
                className="data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4 px-4 py-2 font-semibold text-muted-foreground hover:text-slate-900"
              >
                {t("ourServices")}
              </Link>
            </NavigationMenuItem>

            {/* Technologies */}
            <NavigationMenuItem>
              <Link
                href="/technology"
                className="data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4 px-4 py-2 font-semibold text-muted-foreground hover:text-slate-900"
              >
                {t("technologies")}
              </Link>
            </NavigationMenuItem>

            {/* Products Mega Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-slate-900 bg-transparent transition-colors">
                {t("products")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[480px] max-w-[90vw] p-2 grid gap-3 md:grid-cols-2">
                  {categories.map((cat) => {
                    return (
                      <div
                        key={cat.name}
                        className="rounded-lg border bg-white p-2 hover:shadow-sm transition"
                      >
                        {/* Fabric Type */}
                        <Link
                          href={`/products/${cat.slug}`}
                          className="cursor-pointer"
                        >
                          <h3 className="text-sm font-semibold text-slate-900">
                            {cat.name}
                          </h3>
                        </Link>

                        {/* Applications */}
                        <ul className="space-y-1 mt-1">
                          {cat.subCategories?.map((sub) => {
                            return (
                              <li key={sub.name}>
                                <Link
                                  href={`/products/${cat.slug}#${sub.slug}`}
                                  className="flex items-center gap-1.5 rounded-md px-1 py-0.5 text-xs text-muted-foreground hover:bg-slate-50 hover:text-muted-foreground transition"
                                >
                                  <ChevronRightIcon className="h-3 w-3 text-slate-500" />
                                  {sub.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>

          {/* Required viewport for proper popover rendering */}
          <NavigationMenuViewport />
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/#contact" className="cursor-pointer">
            <MetallicButton className="cursor-pointer">
              {t("contactUs")}
            </MetallicButton>
          </Link>
          <LocaleSwitcher />
        </div>

        {/* Mobile Menu */}
        <div className="ml-auto md:hidden">
          <MobileMenu categories={categories} primaryLinks={primaryLinks} />
        </div>
      </div>
    </header>
  );
}
