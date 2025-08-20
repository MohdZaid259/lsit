import { getAllCategories, getProductsByCategorySlug } from "@/services";

import { Breadcrumbs } from "@/components/products/breadcrumbs";
import { Category } from "@/lib/types";
import Link from "next/link";
import { SafeImage } from "@/components/ui/safe-image";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";

export async function generateStaticParams() {
  const res = (await getAllCategories()) as { categories: { slug: string }[] };
  const cats = res?.categories || [];
  // Add locale to params for static generation
  return cats.flatMap((c) => [
    { category: c.slug, locale: "en" },
    { category: c.slug, locale: "ar" },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; locale: "en" | "ar" }>;
}) {
  const { category: categoryParam, locale } = await params;

  const res = (await getProductsByCategorySlug(categoryParam, locale)) as {
    category: Category;
  };

  if (!res?.category) {
    return {
      title: "Category not found - Products",
      description: "The requested category does not exist.",
    };
  }

  const cat = res.category;
  return {
    title: `${cat.name} - Products`,
    description:
      cat.description || `Browse our selection of ${cat.name} products.`,
    openGraph: {
      title: `${cat.name} - Products`,
      description:
        cat.description || `Browse our selection of ${cat.name} products.`,
      images: cat.image?.url ? [{ url: cat.image.url }] : [],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  readonly params: Promise<{ category: string; locale: "en" | "ar" }>;
}) {
  const t = useTranslations("Products");
  const { category: categoryParam, locale } = await params;

  const { category } = (await getProductsByCategorySlug(
    categoryParam,
    locale
  )) as {
    category: Category;
  };

  if (!category) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Breadcrumbs locale={locale} />

      {/* Category Header */}
      <header className="rounded-xl overflow-hidden border">
        <div className="relative h-40 sm:h-48 md:h-72">
          <SafeImage
            src={category.image?.url || ""}
            alt={`${category.name} cover`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-center"
            priority
          />

          {/* Overlay  */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4">
            <h1 className="text-xl md:text-2xl font-semibold text-white">
              {category.name}
            </h1>
            <p className="text-sm text-white">
              {category.description ||
                t("exploreCategory", { name: category.name })}
            </p>
          </div>
        </div>
      </header>

      {/* Category Content */}
      <div className="space-y-10">
        {category.subCategories && category.subCategories.length > 0 ? (
          category.subCategories.map((sub) => (
            <section
              key={sub.slug}
              id={sub.slug}
              className="space-y-3 scroll-mt-28"
            >
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-foreground capitalize">
                    {sub.name}
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    {sub.products?.length || 0}{" "}
                    {sub.products?.length === 1 ? "product" : "products"}
                  </p>
                </div>
              </div>

              {/* Products in subcategory */}
              {sub.products && sub.products.length > 0 ? (
                <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {sub.products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${category.slug}/${p.slug}`}
                      className="group rounded-lg overflow-hidden border hover:shadow-sm transition"
                    >
                      <div className="relative aspect-[4/3]">
                        <SafeImage
                          src={p.gallery?.[0]?.url || ""}
                          alt={p.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                      </div>
                      <div className="p-3">
                        <div className="text-sm font-medium text-foreground">
                          {p.name}
                        </div>
                        {p.description && (
                          <div className="text-xs text-muted-foreground line-clamp-1">
                            {p.description}
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-muted-foreground border rounded-md p-4">
                  {t("noProductsInSubcategory")}
                </div>
              )}
            </section>
          ))
        ) : (
          <div className="text-sm text-muted-foreground border rounded-md p-4">
            {t("noSubcategories")}
          </div>
        )}
      </div>
    </div>
  );
}
