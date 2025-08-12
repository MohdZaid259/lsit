"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRightIcon, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Category } from "@/lib/types";
import Link from "next/link";
import Logo from "./logo";
import MetallicButton from "./common/metallic-button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MobileMenu({
  categories,
  primaryLinks,
}: {
  readonly categories: Category[];
  readonly primaryLinks: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 px-4 gap-0">
        <SheetHeader className="px-0">
          <SheetTitle>
            <span className="sr-only">Navigation</span>
            <Logo size={50} />
          </SheetTitle>
        </SheetHeader>

        <nav className="grid gap-3">
          {primaryLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-slate-800"
            >
              {l.label}
            </Link>
          ))}

          <div className="mt-2">
            <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">
              Products
            </div>
            <Accordion type="multiple" className="w-full">
              {categories.map((cat, idx) => (
                <AccordionItem key={cat.name} value={`cat-${idx}`}>
                  <AccordionTrigger>{cat.name}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="grid gap-2">
                      {cat.subCategories?.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={`/products/${cat.slug}#${sub.slug}`}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-slate-900"
                          >
                            <ChevronRightIcon className="h-3 w-3 text-slate-500" />
                            {sub.name}
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
                router.push("/#contact");
              }}
              className="w-full"
            >
              Contact Us
            </MetallicButton>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
