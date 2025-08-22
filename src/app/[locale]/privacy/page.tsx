import React from 'react'
import type { Metadata } from "next";
import Privacy from '@/components/privacy';

export const metadata: Metadata = {
  title: "Privacy Policy | LS4IT",
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
    <Privacy/>
  )
}

export default page