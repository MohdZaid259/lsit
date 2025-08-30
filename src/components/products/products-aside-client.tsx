"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link, useRouter } from "@/i18n/navigation";

import { FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";

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
  locale,
}: {
  readonly className?: string;
  readonly categories: {
    name: string;
    slug: string;
    subCategories?: { name: string; slug: string }[];
  }[];
  readonly locale: "en" | "ar";
}) {
  const t = useTranslations("Products");
  const params = useParams();
  const router = useRouter();
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

  const [openItem, setOpenItem] = useState(activeCategoryKey);

  return (
    <aside
      className={cn(
        "hidden min-[720px]:block",
        "sticky top-25 self-start",
        className
      )}
      aria-label={t("categories")}
    >
      <div className="rounded-xl border bg-card">
        <div className="px-4 py-3 border-b">
          <div className="text-sm font-semibold text-foreground">
            {t("categories")}
          </div>
        </div>
        <nav className="p-2">
          {cats.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-6 text-muted-foreground text-sm">
              <FolderOpen className="w-6 h-6 mb-2" />
              {t("noCategories")}
            </div>
          ) : (
            <Accordion
              type="single"
              collapsible
              value={openItem}
              onValueChange={(val) => {
                setOpenItem(val);
                if (val) router.push(`/products/${val}`);
              }}
              className="space-y-1"
            >
              {cats.map((c) => {
                const isActive = activeCategoryKey === c.key;

                return (
                  <AccordionItem
                    value={c.key}
                    key={c.key}
                    className="border-none"
                  >
                    <AccordionTrigger
                      className={cn(
                        "rounded-md px-3 py-2 text-sm no-underline hover:no-underline",
                        isActive
                          ? "bg-primary text-white stroke-white"
                          : "text-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {c.title}
                    </AccordionTrigger>
                    {c.subCategories?.length > 0 && (
                      <AccordionContent className="pl-6 pt-1">
                        <ul className="space-y-1">
                          {c.subCategories.map((s) => {
                            return (
                              <li key={s.key}>
                                <Link
                                  href={`/products/${c.key}#${s.key}`}
                                  className="block rounded px-2 py-1.5 text-sm capitalize text-muted-foreground hover:text-foreground hover:bg-muted"
                                >
                                  {s.title}
                                </Link>
                              </li>
                            );
                          })}
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
