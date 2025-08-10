import { Breadcrumbs } from "@/components/products/breadcrumbs";
import Link from "next/link";
import { ProductGallery } from "@/components/products/product-gallery";
import { getProduct } from "@/lib/catalog";

export default function ProductDetailPage({
  params,
}: {
  params: { category: string; product: string };
}) {
  const result = getProduct(params.category, params.product);
  if (!result) {
    return <div className="py-10">Product not found.</div>;
  }
  const { product, category, subcategory } = result;

  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: category.title, href: `/products/${category.key}` },
    { label: product.name },
  ];

  return (
    <div className="space-y-6">
      <Breadcrumbs items={breadcrumb} />
      <header className="rounded-xl overflow-hidden border">
        <div className="relative h-32 sm:h-36 md:h-40">
          <img
            src={category.coverImage || "/placeholder.svg"}
            alt={`${category.title} cover`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4">
            <h1 className="text-lg md:text-xl font-semibold text-foreground">
              {product.name}
            </h1>
            <p className="text-xs text-muted-foreground">
              {category.title}
              {subcategory ? ` • ${subcategory.title}` : ""}
            </p>
          </div>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <ProductGallery images={product.images} />
        <aside className="space-y-5">
          <div>
            <h2 className="text-base font-semibold text-foreground">
              Overview
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {product.summary ||
                "High-performance textile engineered for durability, comfort, and compliance in demanding environments."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-md border p-3">
              <div className="text-xs text-muted-foreground">Fabric</div>
              <div className="text-sm font-medium text-foreground">
                Poly blend
              </div>
            </div>
            <div className="rounded-md border p-3">
              <div className="text-xs text-muted-foreground">Finish</div>
              <div className="text-sm font-medium text-foreground">
                Hydrophobic
              </div>
            </div>
            <div className="rounded-md border p-3">
              <div className="text-xs text-muted-foreground">Compliance</div>
              <div className="text-sm font-medium text-foreground">
                ISO • CE • NFPA
              </div>
            </div>
            <div className="rounded-md border p-3">
              <div className="text-xs text-muted-foreground">Use case</div>
              <div className="text-sm font-medium text-foreground">
                Industrial
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
