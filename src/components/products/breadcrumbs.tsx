"use client";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

export function Breadcrumbs({
  className = "",
}: {
  readonly className?: string;
  // Still passed by callers; the Link takes the locale from context.
  readonly locale: "en" | "ar";
}) {
  const t = useTranslations("Breadcrumbs");
  const params = useParams<{
    category?: string;
    product?: string;
    locale?: string;
  }>();

  // Hrefs stay unprefixed: the locale-aware Link adds /en or /ar itself
  // (prefixing here produced /en/en, which 404s).
  const items = [
    { label: t("home"), href: "/" },
    { label: t("products"), href: "/products" },
  ];

  if (params.category) {
    items.push({
      label: decodeURIComponent(params.category),
      href: `/products/${params.category}`,
    });
  }

  if (params.product) {
    items.push({
      label: decodeURIComponent(params.product),
      href: "",
    });
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("text-xs text-muted-foreground", className)}
    >
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-2 capitalize">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-foreground">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-foreground" : ""}>
                  {item.label}
                </span>
              )}
              {!isLast && <span className="text-muted-foreground">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
