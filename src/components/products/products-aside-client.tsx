"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FolderOpen } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";

interface SubCategory {
  key: string;
  title: string;
}
interface Category {
  key: string;
  title: string;
  subCategories: SubCategory[];
}

export function ProductsAsideClient({
  className = "",
  categories,
}: {
  readonly className?: string;
  readonly categories: {
    name: string;
    slug: string;
    subCategories?: { name: string; slug: string }[];
  }[];
}) {
  const params = useParams();
  const activeCategoryKey = params?.category as string | undefined;

  const cats: Category[] =
    categories?.map((cat) => ({
      key: cat.slug,
      title: cat.name,
      subCategories:
        cat.subCategories?.map((sub) => ({
          key: sub.slug,
          title: sub.name,
        })) || [],
    })) || [];

  return (
    <aside
      className={cn(
        "hidden min-[720px]:block",
        "sticky top-20 self-start",
        className
      )}
      aria-label="Product categories"
    >
      <div className="rounded-xl border bg-card">
        <div className="px-4 py-3 border-b">
          <div className="text-sm font-semibold text-foreground">
            Categories
          </div>
        </div>
        <nav className="p-2">
          {cats.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-6 text-muted-foreground text-sm">
              <FolderOpen className="w-6 h-6 mb-2" />
              No categories available
            </div>
          ) : (
            <Accordion
              type="single"
              collapsible
              defaultValue={activeCategoryKey}
              className="space-y-1"
            >
              {cats.map((c) => {
                const href = `/products/${c.key}`;
                const isActive = activeCategoryKey === c.key;

                return (
                  <AccordionItem
                    value={c.key}
                    key={c.key}
                    className="border-none"
                    defaultChecked={isActive}
                  >
                    <AccordionTrigger
                      className={cn(
                        "rounded-md px-3 py-2 text-sm no-underline hover:no-underline",
                        isActive
                          ? "bg-primary text-white stroke-white"
                          : "text-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <Link href={href} className="w-full block">
                        {c.title}
                      </Link>
                    </AccordionTrigger>
                    {c.subCategories?.length > 0 && (
                      <AccordionContent className="pl-6 pt-1">
                        <ul className="space-y-1">
                          {c.subCategories.map((s) => (
                            <li key={s.key}>
                              <Link
                                href={`/products/${c.key}/#${s.key}`}
                                className="block rounded px-2 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-muted capitalize"
                              >
                                {s.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    )}
                  </AccordionItem>
                );
              })}
            </Accordion>
          )}
        </nav>
      </div>
    </aside>
  );
}
