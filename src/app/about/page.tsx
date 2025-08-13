import AboutPage from "@/components/about-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About LS4IT - Advanced Technical Textile Solutions",
  description:
    "Learn about LS4IT, a pioneering technical textile manufacturer delivering high-performance fabrics for extreme environments. Specializing in fire-resistant, UV-protected, waterproof, and breathable materials for defense, industrial, and outdoor sectors.",
  keywords: [
    "technical textiles",
    "fabric manufacturing",
    "tent fabrics",
    "UV resistant fabrics",
    "fireproof fabrics",
    "waterproof textiles",
    "outdoor fabric solutions",
    "industrial fabrics",
    "LS4IT",
    "nylon tent fabric",
    "polyester tent fabric",
    "sustainable fabric technology"
  ],
  openGraph: {
    title: "About LS4IT - Advanced Technical Textile Solutions",
    description:
      "Discover LS4IT's mission to innovate in the field of technical textiles. Providing high-performance fabrics for extreme conditions across defense, industrial, and outdoor applications.",
    url: "https://LS4IT.com/about",
    siteName: "LS4IT",
    images: [
      {
        url: "https://ls4it.com/logo/preview.jpg",
        width: 1200,
        height: 630,
        alt: "LS4IT Technical Textile Solutions for Extreme Environments",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About LS4IT – Advanced Technical Textile Solutions",
    description:
      "Pioneering high-performance fabrics for defense, industrial, and outdoor sectors.",
    images: ["public/logo/logoWhite.jpg"],
  },
  alternates: {
    canonical: "https://LS4IT.com/about",
  },
};

export default function page() {
  return <AboutPage />;
}
