import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import CaseStudies from "@/components/home/case-studies";
import Certifications from "@/components/home/certifications";
import ContactSection from "@/components/home/contact";
import GlobalOperations from "@/components/home/global-operations";
import Hero from "@/components/home/hero";
import OurServices from "@/components/home/our-services";
import TechnologiesSection from "@/components/home/technologies-section";

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  return (
    <>
      <Hero />
      <OurServices />
      <TechnologiesSection />
      <CaseStudies />
      <Certifications />
      <GlobalOperations />
      <ContactSection />
    </>
  );
}
