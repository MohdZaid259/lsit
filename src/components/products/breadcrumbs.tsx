"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";

export function Breadcrumbs({
  className = "",
}: {
  readonly className?: string;
}) {
  const params = useParams<{ category?: string; product?: string }>();

  // Start with base crumbs
  const items = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
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
