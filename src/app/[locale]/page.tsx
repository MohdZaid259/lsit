import CaseStudies from "@/components/home/case-studies";
import Certifications from "@/components/home/certifications";
import ContactSection from "@/components/home/contact";
import GlobalOperations from "@/components/home/global-operations";
import Hero from "@/components/home/hero";
import OurServices from "@/components/home/our-services";
import TechnologiesSection from "@/components/home/technologies-section";

export default function Page() {
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
