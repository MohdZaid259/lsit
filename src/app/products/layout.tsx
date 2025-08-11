import { ProductsAside } from "@/components/products/products-aside";
import type React from "react";

export default function ProductsLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 md:px-6 py-6">
      {/* Responsive grid: sidebar + main; sidebar hidden < 720px */}
      <div className="grid gap-6 min-[720px]:grid-cols-[260px_1fr]">
        <ProductsAside />
        <main>{children}</main>
      </div>
    </div>
  );
}
