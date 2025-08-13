
import { ProductsAside } from "@/components/products/products-aside";
import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: "/logo/preview.jpg",
        width: 1200,
        height: 630,
        alt: "LS4IT Technical Textile Solutions for Extreme Environments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo/preview.jpg"],
  },
};

export default function ProductsLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div className="px-4 md:px-6 py-6 md:mx-16 mx-0">
      {/* Responsive grid: sidebar + main; sidebar hidden < 720px */}
      <div className="grid gap-6 min-[720px]:grid-cols-[260px_1fr]">
        <ProductsAside />
        {children}
      </div>
    </div>
  );
}
