"use client";

import { allCategories, getCategoryByKey } from "@/lib/catalog";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function ProductsAside({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const cats = allCategories();

  // Derive active category from /products/[category]/...
  const parts = pathname.split("/").filter(Boolean);
  const activeCategoryKey = parts[1]; // ["products", "<category>", ...]
  const activeCategory = activeCategoryKey
    ? getCategoryByKey(activeCategoryKey)
    : undefined;

  return (
    <aside
      className={cn(
        // Hide below 720px, show on >= 720px
        "hidden min-[720px]:block",
        // Make it sticky so it stays in view
        "sticky top-24 self-start",
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
          <ul className="space-y-1">
            {cats.map((c) => {
              const href = `/products/${c.key}`;
              const isActive = activeCategoryKey === c.key;
              return (
                <li key={c.key}>
                  <Link
                    href={href}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm",
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground hover:bg-muted hover:text-foreground"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {c.title}
                  </Link>

                  {/* Show subcategories when active */}
                  {isActive && activeCategory?.subcategories?.length ? (
                    <ul className="mt-1 space-y-1 border-l pl-3 ml-2">
                      {activeCategory.subcategories.map((s) => (
                        <li key={s.key}>
                          <a
                            href={`#${s.key}`}
                            className="block rounded px-2 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-muted"
                          >
                            {s.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
