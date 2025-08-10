import { Breadcrumbs } from "@/components/products/breadcrumbs";
import Link from "next/link";
import { getCategoryByKey } from "@/lib/catalog";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = getCategoryByKey(params.category);
  if (!category) {
    return <div className="py-10">Category not found.</div>;
  }

  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: category.title },
  ];

  return (
    <div className="space-y-6">
      <Breadcrumbs items={breadcrumb} />
      <header className="rounded-xl overflow-hidden border">
        <div className="relative h-40 sm:h-48 md:h-56">
          <img
            src={category.coverImage || "/placeholder.svg"}
            alt={`${category.title} cover`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h1 className="text-xl md:text-2xl font-semibold text-foreground">
              {category.title}
            </h1>
            <p className="text-sm text-muted-foreground">
              Explore {category.title} products.
            </p>
          </div>
        </div>
      </header>

      <div className="space-y-10">
        {category.subcategories.map((sub) => (
          <section
            key={sub.key}
            id={sub.key}
            className="space-y-3 scroll-mt-28"
          >
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  {sub.title}
                </h2>
                <p className="text-xs text-muted-foreground">
                  {sub.products.length}{" "}
                  {sub.products.length === 1 ? "product" : "products"}
                </p>
              </div>
              {sub.coverImage ? (
                <img
                  src={sub.coverImage || "/placeholder.svg"}
                  alt={`${sub.title} cover`}
                  className="h-10 w-28 object-cover rounded border hidden sm:block"
                />
              ) : null}
            </div>
            {sub.products.length ? (
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {sub.products.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${category.key}/${p.slug}`}
                    className="group rounded-lg overflow-hidden border hover:shadow-sm transition"
                  >
                    <div className="relative aspect-[4/3]">
                      <img
                        src={p.images[0] || "/placeholder.svg"}
                        alt={p.name}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                    </div>
                    <div className="p-3">
                      <div className="text-sm font-medium text-foreground">
                        {p.name}
                      </div>
                      <div className="text-xs text-muted-foreground line-clamp-1">
                        {p.summary}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-sm text-muted-foreground border rounded-md p-4">
                No products yet.
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
