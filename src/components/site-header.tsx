import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Category } from "@/lib/types";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";
import MetallicButton from "./common/metallic-button";
import MobileMenu from "./mobile-menu";
import { getAllCategories } from "@/app/services";

export default async function SiteHeader() {
  const { categories } = (await getAllCategories()) as {
    categories: Category[];
  };

  const primaryLinks = [
    { label: "Our Services", href: "/#our-services" },
    { label: "Technologies", href: "/technology" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-[99] w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center gap-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="ml-auto hidden md:flex">
          <NavigationMenuList>
            {/* Our Services */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/#our-services"
                  className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-slate-900 transition-colors"
                >
                  Our Services
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Technologies */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/technology"
                  className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-slate-900 transition-colors"
                >
                  Technologies
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Products Mega Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-slate-900 bg-transparent transition-colors">
                Products
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

            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/about"
                  className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-slate-900 transition-colors"
                >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>

          {/* Required viewport for proper popover rendering */}
          <NavigationMenuViewport />
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <MetallicButton className="ml-3">
            <Link href="/#contact">Contact Us</Link>
          </MetallicButton>
        </div>

        {/* Mobile Menu */}
        <div className="ml-auto md:hidden">
          <MobileMenu categories={categories} primaryLinks={primaryLinks} />
        </div>
      </div>
    </header>
  );
}
