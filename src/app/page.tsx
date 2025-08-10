import CaseStudies from "@/components/home/case-studies";
import Certifications from "@/components/home/certifications";
import ContactSection from "@/components/home/contact";
import Hero from "@/components/home/hero";
import OurServices from "@/components/home/our-services";
import TechnologiesSection from "@/components/home/technologies-section";
import WhyChooseUs from "@/components/home/why-choose-us";

export default function Page() {
  return (
    <>
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
      <ContactSection />
    </>
  );
}
