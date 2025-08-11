import { Category } from "@/lib/types";
import Link from "next/link";
import { Metadata } from "next";
import { PackageX } from "lucide-react";
import { SafeImage } from "@/components/ui/safe-image";
import { getAllCategories } from "../services";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse all product categories and explore our portfolio of high-quality offerings. Find the perfect solution for your needs.",
  openGraph: {
    title: "Products",
    description:
      "Browse all product categories and explore our portfolio of high-quality offerings.",
    url: "https://your-domain.com/products",
    siteName: "Your Brand Name",
    images: [
      {
        url: "https://your-domain.com/og/products.jpg",
        width: 1200,
        height: 630,
        alt: "Products cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function ProductsPage() {
  const data = (await getAllCategories()) as { categories: Category[] };

  const categories = data.categories.map((cat) => ({
    key: cat.slug,
    title: cat.name,
    coverImage: cat.image?.url || "",
    subCategories: cat.subCategories || [],
  }));

  const hasCategories = categories.length > 0;

  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="rounded-xl overflow-hidden border">
        <div className="relative h-44 sm:h-56 md:h-64">
          <SafeImage
            src=""
            alt="Products cover"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
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

      {/* Main content */}
      {hasCategories ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.key}
              href={`/products/${c.key}`}
              className="group rounded-xl overflow-hidden border hover:shadow-sm transition"
            >
              <div className="relative aspect-[16/9]">
                <SafeImage
                  src={c.coverImage}
                  alt={`${c.title} cover`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-foreground font-semibold">{c.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {c.subCategories.reduce(
                      (acc, sub) => acc + (sub.products?.length || 0),
                      0
                    )}{" "}
                    products
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center border rounded-xl">
          <PackageX className="mb-6 h-16 w-16 text-muted-foreground" />
          <h2 className="text-lg font-medium text-foreground">
            No categories available
          </h2>
          <p className="text-sm text-muted-foreground max-w-sm mt-2">
            We’re working on adding products soon. Please check back later.
          </p>
        </div>
      )}
    </div>
  );
}
