import { Category } from "@/lib/types";
import { ProductsAsideClient } from "./products-aside-client";
import { getAllCategories } from "@/app/services";

export async function ProductsAside({ className }: { className?: string }) {
  const data = (await getAllCategories()) as { categories: Category[] };

  return (
    <ProductsAsideClient className={className} categories={data.categories} />
  );
}
