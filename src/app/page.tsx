"use client";

import CaseStudies from "@/components/home/case-studies";
import Certifications from "@/components/home/certifications";
import ContactSection from "@/components/home/contact";
import Hero from "@/components/home/hero";
import OurServices from "@/components/home/our-services";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import TechnologiesSection from "@/components/home/technologies-section";
import WhyChooseUs from "@/components/home/why-choose-us";
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
        <OurServices />
        <WhyChooseUs />
        <TechnologiesSection />
        <CaseStudies />
        <Certifications />
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
