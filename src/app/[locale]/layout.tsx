import "../globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import { Locale, NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Metadata } from "next";
import { ReactNode } from "react";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { Toaster } from "sonner";
import VideoIntro from "@/components/video-intro";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    default: "LS4IT – Advanced Technical Textile Solutions",
    template: "%s | LS4IT",
  },
  icons: {
    icon: "/logo/logoSvg.svg",
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
      default: "LS4IT - Advanced Technical Textile Solutions",
      template: "%s | LS4IT",
    },
    description:
      "From deserts to industrial zones, LS4IT delivers high-performance fabrics for defense, outdoor, and industrial applications. Fire and UV resistance, waterproofing, breathability, and unmatched durability.",
    url: "https://LS4IT.com",
    siteName: "LS4IT",
    images: [
      {
        url: "/public/logo/preview.jpg",
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
      default: "LS4IT - Advanced Technical Textile Solutions",
      template: "%s | LS4IT",
    },
    description:
      "High-performance fabrics for defense, outdoor, and industrial use. Fire-resistant, UV-protected, waterproof, and breathable.",
    images: ["/public/logo/preview.jpg"],
  },
  alternates: {
    canonical: "https://LS4IT.com",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<Props>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <NextIntlClientProvider>
          <VideoIntro />

          <SiteHeader locale={locale} />
          <main className="min-h-[100vh] bg-white text-muted-foreground">
            {children}
          </main>
          <SiteFooter locale={locale} />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
