import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import TechHeader from "@/components/technology/tech-header";
import TechCards from "@/components/technology/tech-cards";
import TechApplication from "@/components/technology/tech-application";

export default function TechnologyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <>      
      <TechHeader/>
      <TechCards/>
      <section className="md:mx-8 mx-2">
        <img src="/technology/pages/banner.jpg" className="invert md:block hidden my-6" alt="banner" />
        <img src="/technology/pages/bannerSm.jpg" className="invert md:hidden block my-6 scale-90" alt="banner" />
      </section>
      <TechApplication/>
    </>
  );
}