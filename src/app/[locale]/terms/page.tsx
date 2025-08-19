import type { Metadata } from "next";
import React from "react";
import { termsOfService } from "../../../../public/footer";

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
    <div className="mx-2 md:mx-16 my-4">
      <h1 className="font-bold text-3xl mb-4">Terms of Service</h1>
      <div dangerouslySetInnerHTML={{ __html: termsOfService }} />
    </div>
  );
}

export default page;
