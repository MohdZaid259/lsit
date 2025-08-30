"use client";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

export function Breadcrumbs({
  className = "",
  locale,
}: {
  readonly className?: string;
  readonly locale: "en" | "ar";
}) {
  const t = useTranslations("Breadcrumbs");
  const params = useParams<{
    category?: string;
    product?: string;
    locale?: string;
  }>();

  // Use locale from prop or params
  const currentLocale = locale || (params.locale as "en" | "ar") || "en";

  // Start with base crumbs
  const items = [
    { label: t("home"), href: `/${currentLocale}` },
    { label: t("products"), href: `/${currentLocale}/products` },
  ];

  if (params.category) {
    items.push({
      label: decodeURIComponent(params.category),
      href: `/${currentLocale}/products/${params.category}`,
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
