import type { Metadata } from "next";
import React from "react";
import Terms from "@/components/terms";

export const metadata: Metadata = {
  title: "Terms of Service | LS4IT",
  openGraph: {
    images: [
      {
        url: "/public/logo/preview.jpg",
        width: 1200,
        height: 630,
        alt: "LS4IT Technical Textile Solutions for Extreme Environments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/public/logo/preview.jpg"],
  },
};

function page() {
  return (
    <Terms/>
  );
}

export default page;
