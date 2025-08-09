"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  ChevronRight,
  CloudRain,
  Heart,
  Layers,
  Menu,
  Shield,
  Sparkles,
  Sun,
  ThermometerSun,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "./logo";
import MetallicButton from "./common/metallic-button";
import { useState } from "react";

type Props = {
  readonly onContactClick?: () => void;
};

export default function SiteHeader({ onContactClick = () => {} }: Props) {
  const [open, setOpen] = useState(false);

  const products = [
    {
      title: "Technical Fabrics",
      desc: "High-performance textiles for military, medical, and industrial use.",
      items: [
        { label: "Heat Resistant", href: "/products/heat-resistant" },
        { label: "Waterproof & Breathable", href: "/products/waterproof" },
      ],
    },
    {
      title: "Specialized Applications",
      desc: "Tailored fabrics for demanding environments.",
      items: [
        { label: "Military & Defense", href: "/products/military" },
        { label: "Medical & Healthcare", href: "/products/medical" },
      ],
    },
  ];

  const primaryLinks = [
    { label: "Our Services", href: "#our-services" },
    { label: "Technologies", href: "#technologies" },
    { label: "About", href: "#about" },
  ];

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Technical Fabrics":
        return Layers;
      case "Specialized Applications":
        return Sparkles;
      default:
        return Layers;
    }
  };

  const getItemIcon = (label: string) => {
    if (label.includes("Heat")) return ThermometerSun;
    if (label.includes("Waterproof")) return CloudRain;
    if (label.includes("Abrasion") || label.includes("Protective"))
      return Shield;
    if (label.includes("Military")) return Shield;
    if (label.includes("Medical")) return Heart;
    if (label.includes("Outdoor") || label.includes("Tent")) return Sun;
    return ChevronRight;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
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
                  href="#our-services"
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
                  href="#technologies"
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
                <div className="w-[480px] max-w-[90vw] p-1.5 grid gap-3 md:grid-cols-2">
                  {products.map((category) => {
                    const CategoryIcon = getCategoryIcon(category.title);
                    return (
                      <div
                        key={category.title}
                        className="rounded-lg border bg-white p-2 hover:shadow-sm transition"
                      >
                        <div className="flex items-center gap-1.5">
                          <CategoryIcon className="h-3 w-3 text-slate-500" />
                          <h3 className="text-sm font-semibold text-slate-900">
                            {category.title}
                          </h3>
                        </div>
                        <ul className="mt-2 space-y-1">
                          {category.items.map((item) => {
                            const ItemIcon = getItemIcon(item.label);
                            return (
                              <li key={item.label}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={item.href}
                                    className="group flex items-center gap-1.5 rounded-md px-1.5 py-1 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                                  >
                                    <ItemIcon className="h-3 w-3 text-slate-500 group-hover:text-slate-700 transition" />
                                    <span>{item.label}</span>
                                  </Link>
                                </NavigationMenuLink>
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
          <MetallicButton
            onClick={() => {
              if (onContactClick) onContactClick();
            }}
            className="ml-3"
          >
            Contact Us
          </MetallicButton>
        </div>

        {/* Mobile Menu */}
        <div className="ml-auto md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 px-4">
              <SheetHeader className="mb-2">
                <SheetTitle>
                  <span className="sr-only">Navigation</span>
                  <div className="flex items-center gap-2">
                    <Logo showText={true} />
                  </div>
                </SheetTitle>
              </SheetHeader>

              <nav className="grid gap-3">
                {primaryLinks.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-base text-slate-800 hover:text-slate-900"
                  >
                    {l.label}
                  </Link>
                ))}

                <div className="mt-2">
                  <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">
                    Products
                  </div>
                  <Accordion type="multiple" className="w-full">
                    {products.map((category, idx) => (
                      <AccordionItem
                        key={category.title}
                        value={`cat-${idx}`}
                        className="[&>h3]:m-0"
                      >
                        <AccordionTrigger className="text-left text-slate-800">
                          {category.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm text-slate-600 mb-2">
                            {category.desc}
                          </p>
                          <ul className="grid gap-2">
                            {category.items.map((item) => (
                              <li key={item.label}>
                                <Link
                                  href={item.href}
                                  onClick={() => setOpen(false)}
                                  className="text-sm text-muted-foreground hover:text-slate-900"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div className="pt-2">
                  <MetallicButton
                    onClick={() => {
                      setOpen(false);
                      if (onContactClick) onContactClick();
                    }}
                    className="w-full"
                  >
                    Contact Us
                  </MetallicButton>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
