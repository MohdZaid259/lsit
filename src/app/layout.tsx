import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { Toaster } from "@/components/ui/sonner";
import VideoIntro from "@/components/video-intro";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "LS4IT – Advanced Technical Textile Solutions for Extreme Environments",
    template: "%s | LS4IT",
  },
  description:
    "LS4IT is a pioneering manufacturer of high-performance technical textiles for extreme environments, specializing in fire-resistant, UV-protected, waterproof, and breathable fabrics for defense, industrial, and outdoor sectors.",
  keywords: [
    "technical textiles",
    "fabric manufacturing",
    "tent fabrics",
    "nylon tent fabric",
    "polyester tent fabric",
    "UV resistant fabrics",
    "fireproof fabrics",
    "waterproof textiles",
    "outdoor fabrics",
    "industrial fabrics",
    "defense fabric solutions",
    "sustainable fabric technology",
  ],
  authors: [{ name: "LS4IT" }],
  creator: "LS4IT",
  publisher: "LS4IT",
  metadataBase: new URL("https://LS4IT.com"),
  openGraph: {
    title: {
      default:
        "LS4IT - Advanced Technical Textile Solutions for Extreme Environments",
      template: "%s | LS4IT",
    },
    description:
      "From deserts to industrial zones, LS4IT delivers high-performance fabrics for defense, outdoor, and industrial applications. Fire and UV resistance, waterproofing, breathability, and unmatched durability.",
    url: "https://LS4IT.com",
    siteName: "LS4IT",
    images: [
      {
        url: "public/logo/logoWhite.jpg",
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
    title: {
      default:
        "LS4IT - Advanced Technical Textile Solutions for Extreme Environments",
      template: "%s | LS4IT",
    },
    description:
      "High-performance fabrics for defense, outdoor, and industrial use. Fire-resistant, UV-protected, waterproof, and breathable.",
    images: ["public/logo/logoWhite.jpg"],
  },
  alternates: {
    canonical: "https://LS4IT.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <VideoIntro />

        <SiteHeader />
        <main className="min-h-[100vh] bg-white text-muted-foreground">
          {children}
        </main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
