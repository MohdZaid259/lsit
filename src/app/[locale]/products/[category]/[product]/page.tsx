export const dynamic = "force-dynamic";

import { getAllProducts, getProductBySubCategorySlug } from "@/services";
import { Breadcrumbs } from "@/components/products/breadcrumbs";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { Product } from "@/lib/types";
import { ProductGallery } from "@/components/products/product-gallery";
import { SafeImage } from "@/components/ui/safe-image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

export async function generateStaticParams() {
  const res = (await getAllProducts()) as { products: Product[] };
  return res.products.flatMap((p) => [
    { product: p.slug, locale: "en" },
    { product: p.slug, locale: "ar" },
  ]);
}

interface ProjectDetailsProps {
  params: Promise<{ product: string; locale: "en" | "ar" }>;
}

export default async function ProductDetailPage({
  params,
}: ProjectDetailsProps) {
  const { product: productSlug, locale } = await params;

  const t = await getTranslations({ locale, namespace: "Product" });
  const { product } = (await getProductBySubCategorySlug(
    productSlug,
    locale
  )) as {
    product: Product;
  };

  if (!product) {
    return notFound();
  }

  return (
    <div className="space-y-6">
      <Breadcrumbs locale={locale} />
      <header className="rounded-xl overflow-hidden border">
        <div className="relative h-40 sm:h-48 md:h-72">
          <SafeImage
            src={product.subCategories.category.image?.url || ""}
            alt={`${product.subCategories.category.name} cover`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-center"
          />

          {/* Overlay  */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          <div className="absolute bottom-3 left-4 right-4">
            <h1 className="text-lg md:text-xl font-semibold text-white">
              {product.name}
            </h1>
            <p className="text-xs text-white capitalize">
              {product.subCategories.category.name}
              {product.subCategories.name
                ? ` • ${product.subCategories.name}`
                : ""}
            </p>
          </div>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <ProductGallery
          images={product.gallery ? product.gallery.map((img) => img.url) : []}
          category={product.subCategories.category.name}
        />
        <aside className="space-y-5">
          <div>
            <h2 className="text-base font-semibold text-foreground">
              {t("overview")}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("description")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Fabric */}
            <div className="rounded-md border p-3">
              <div className="text-xs text-muted-foreground">Fabric</div>
              <div className="text-sm font-medium text-foreground">
                {Array.isArray(product.fabric) && product.fabric.length > 0
                  ? product.fabric.join(", ")
                  : t("notSpecified")}
              </div>
            </div>

            {/* Finish */}
            <div className="rounded-md border p-3">
              <div className="text-xs text-muted-foreground">Finish</div>
              <div className="text-sm font-medium text-foreground">
                {product.finish || t("standard")}
              </div>
            </div>

            {/* Compliance */}
            <div className="rounded-md border p-3">
              <div className="text-xs text-muted-foreground">Compliance</div>
              <div className="text-sm font-medium text-foreground">
                {Array.isArray(product.compliance) &&
                product.compliance.length > 0
                  ? product.compliance.join(", ")
                  : t("defaultCompliance")}
              </div>
            </div>

            {/* Use case */}
            <div className="rounded-md border p-3">
              <div className="text-xs text-muted-foreground">Use case</div>
              <div className="text-sm font-medium text-foreground">
                {Array.isArray(product.useCase) && product.useCase.length > 0
                  ? product.useCase.join(", ")
                  : t("defaultUseCase")}
              </div>
            </div>
          </div>

          <div className="rounded-md border p-4">
            <div className="text-sm font-semibold text-foreground">
              {t("needDatasheet")}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {t("contactForSpecs")}
            </p>
            <Link
              href="/#contact"
              className="inline-flex mt-3 h-9 items-center justify-center rounded-md bg-primary px-3 text-primary-foreground hover:opacity-90 transition"
            >
              {t("contactSales")}
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
