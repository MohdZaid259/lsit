import { getAllProducts, getProductBySubCategorySlug } from "@/app/services";
import { Breadcrumbs } from "@/components/products/breadcrumbs";
import Link from "next/link";
import type { Metadata } from "next";
import { Product } from "@/lib/types";
import { ProductGallery } from "@/components/products/product-gallery";
import { SafeImage } from "@/components/ui/safe-image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const res = (await getAllProducts()) as { products: Product[] };

  return (
    res.products.map((p: Product) => ({
      product: p.slug,
    })) || []
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>;
}): Promise<Metadata> {
  const { product: productSlug } = await params;

  const { product } = (await getProductBySubCategorySlug(productSlug)) as {
    product: Product;
  };

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name}`,
    description:
      product.description ||
      `Learn more about ${product.name} from our premium product catalog.`,
    openGraph: {
      title: product.name,
      description:
        product.description ||
        `Discover more about ${product.name} in our collection.`,
      images: product.gallery?.length
        ? product.gallery.map((img) => ({ url: img.url }))
        : [],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  readonly params: Promise<{ product: string }>;
}) {
  const { product: ProductSlug } = await params;

  const { product } = (await getProductBySubCategorySlug(ProductSlug)) as {
    product: Product;
  };

  if (!product) {
    return notFound();
  }

  return (
    <div className="space-y-6">
      <Breadcrumbs />
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
              Overview
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {product.description ||
                "High-performance textile engineered for durability, comfort, and compliance in demanding environments."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Fabric */}
            <div className="rounded-md border p-3">
              <div className="text-xs text-muted-foreground">Fabric</div>
              <div className="text-sm font-medium text-foreground">
                {Array.isArray(product.fabric) && product.fabric.length > 0
                  ? product.fabric.join(", ")
                  : "Not specified"}
              </div>
            </div>

            {/* Finish */}
            <div className="rounded-md border p-3">
              <div className="text-xs text-muted-foreground">Finish</div>
              <div className="text-sm font-medium text-foreground">
                {product.finish || "Standard"}
              </div>
            </div>

            {/* Compliance */}
            <div className="rounded-md border p-3">
              <div className="text-xs text-muted-foreground">Compliance</div>
              <div className="text-sm font-medium text-foreground">
                {Array.isArray(product.compliance) &&
                product.compliance.length > 0
                  ? product.compliance.join(", ")
                  : "ISO 9001, ISO 14001"}
              </div>
            </div>

            {/* Use case */}
            <div className="rounded-md border p-3">
              <div className="text-xs text-muted-foreground">Use case</div>
              <div className="text-sm font-medium text-foreground">
                {Array.isArray(product.useCase) && product.useCase.length > 0
                  ? product.useCase.join(", ")
                  : "General use"}
              </div>
            </div>
          </div>

          <div className="rounded-md border p-4">
            <div className="text-sm font-semibold text-foreground">
              Need datasheets or samples?
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Contact our team for detailed specifications and compliance
              reports.
            </p>
            <Link
              href="/#contact"
              className="inline-flex mt-3 h-9 items-center justify-center rounded-md bg-primary px-3 text-primary-foreground hover:opacity-90 transition"
            >
              Contact Sales
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
