import { Category } from "@/lib/types";
import { ProductsAsideClient } from "./products-aside-client";
import { getAllCategories } from "@/services";

export async function ProductsAside({ 
  className,
  locale
}: {
  className?: string;
  locale: "en" | "ar";
}) {
  const data = (await getAllCategories(locale)) as { categories: Category[] };

  return (
    <ProductsAsideClient className={className} categories={data.categories} locale={locale} />
  );
}
