"use client";

import AboutSection from "@/components/about-section";
import ApplicationsSlider from "@/components/applications-slider";
import CaseStudiesCarousel from "@/components/case-studies-carousel";
import CertificationsPartners from "@/components/certifications-partners";
import ComparisonSlider from "@/components/comparison-slider";
import ContactSection from "@/components/contact-section";
import FabricTechnologies from "@/components/fabric-technologies";
import Hero from "@/components/hero";
import ProductCatalog from "@/components/product-catalog";
import SiteHeader from "@/components/site-header";
import { useRef } from "react";

export default function Page() {
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-[100dvh] bg-white text-slate-900">
      <SiteHeader
        onContactClick={() =>
          contactRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      />
      <main className="flex-1">
        <Hero
          title="Technology‑Integrated Fabrics for Demanding Environments"
          subtitle="Premium, engineered textiles with embedded electronics, sensing, and performance coatings—manufactured at scale."
          ctaPrimary={{ href: "#technologies", label: "Explore Technologies" }}
          ctaSecondary={{ href: "#contact", label: "Speak to an Engineer" }}
        />
        {/* <AboutSection />
        <FabricTechnologies />
        <ApplicationsSlider />
        <ComparisonSlider />
        <CertificationsPartners />
        <CaseStudiesCarousel />
        <ProductCatalog />
        <div ref={contactRef}>
          <ContactSection />
        </div>
        */}
      </main>
      {/* <footer className="border-t bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 md:px-6 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row items-center gap-2">
          <div>
            © {new Date().getFullYear()} SunTech Fabrics. All rights reserved.
          </div>
          <div className="sm:ml-auto">Engineered textiles for industry.</div>
        </div>
      </footer> */}
    </div>
  );
}
