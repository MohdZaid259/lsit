import Link from "next/link";
import { allCategories } from "@/lib/catalog";

export default function ProductsIndexPage() {
  const categories = allCategories();
  return (
    <div className="space-y-8">
      <header className="rounded-xl overflow-hidden border">
        <div className="relative h-44 sm:h-56 md:h-64">
          <img
            src="/placeholder.svg?height=320&width=1200"
            alt="Products cover"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground">
              Products
            </h1>
            <p className="text-sm text-muted-foreground">
              Browse categories and explore our portfolio.
            </p>
          </div>
        </div>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <Link
            key={c.key}
            href={`/products/${c.key}`}
            className="group rounded-xl overflow-hidden border hover:shadow-sm transition"
          >
            <div className="relative aspect-[16/9]">
              <img
                src={c.coverImage || "/placeholder.svg"}
                alt={`${c.title} cover`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-foreground font-semibold">{c.title}</div>
                <div className="text-xs text-muted-foreground">
                  {c.subcategories.reduce((a, s) => a + s.products.length, 0)}{" "}
                  products
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <div className="text-xs text-muted-foreground">Reference sketch</div>
        <img
          src="/images/categories-wire.jpg"
          alt="Category tree sketch"
          className="mt-2 w-full max-w-2xl rounded-lg border"
        />
      </div>
    </div>
  );
}
