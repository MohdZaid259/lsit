import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import NewsletterSignup from "./newsletter";
import company from "../../public/company.webp";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import antibacterial from '/public/technology/icons/antibacterial.jpg'
import climate from '/public/technology/icons/climate.jpg'
import weather from '/public/technology/icons/weather.jpg'
import reflective from '/public/technology/icons/reflective.png'
import military from '/public/technology/icons/military.jpg'

const values = [
    {
      icon: reflective
    },
    {
      icon: antibacterial
    },
    {
      icon: climate
    },
    {
      icon: military
    },
    {
      icon: weather
    }
  ]

const ScrollAnimation = dynamic(() => import("./scroll-animation"));

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white">
        <div className="absolute inset-0 bg-[url('/coverImage/aboutCover.jpg')] bg-cover bg-center [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_100%)] [mask-repeat:no-repeat] [mask-size:cover]" />
        <div className="container relative py-8 md:py-20 sm:px-6 px-4 lg:px-24">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="md:mb-8 mb-2 text-lg text-white/80 sm:text-xl">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-8 md:mx-16 mx-0 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollAnimation animation="fade-in-left">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-primary sm:text-4xl">
                  {t("story.title")}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>{t("story.p1")}</p>
                  <p>{t("story.p2")}</p>
                  <p>{t("story.p3")}</p>
                </div>
                <div className="md:mt-8 mt-4 flex flex-wrap gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    <Link href="/#our-services">{t("story.cta1")}</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    <Link href="/#contact">{t("story.cta2")}</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-right">
              <div className="relative h-[250px] md:h-[400px] overflow-hidden rounded-xl">
                <Image
                  src={company.src}
                  alt={t("story.imgAlt")}
                  fill
                  priority={false}
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-primary/10 py-8 md:py-24">
        <div className="mx-0 md:mx-16 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollAnimation animation="fade-in-left">
              <div className="rounded-xl bg-white md:p-8 p-4 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-primary">
                  {t("vision.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("vision.desc")}
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-right">
              <div className="rounded-xl bg-white md:p-8 p-4 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-primary">
                  {t("mission.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("mission.desc")}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-8 mx-0 md:mx-16 md:py-16 pb-0 md:pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <ScrollAnimation animation="fade-in-up">
              <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
                {t("values.title")}
              </h2>
              <p className="mx-auto max-w-3xl text-muted-foreground">
                {t("values.desc")}
              </p>
            </ScrollAnimation>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <ScrollAnimation
                key={index}
                animation="scale-in"
                delay={
                  `delay-${
                    ((index % 6) + 1) * 100 > 500
                      ? 500
                      : ((index % 6) + 1) * 100
                  }` as
                    | "delay-100"
                    | "delay-200"
                    | "delay-300"
                    | "delay-400"
                    | "delay-500"
                }
              >
                <div className="rounded-xl border border-primary/40 p-6 relative">
                  <img src={value.icon.src} className="w-10 pb-2 md:pb-0 mx-4 md:mx-0 -mt-2 md:-mt-0 md:absolute md:p-[1px] md:right-3 md:top-3"/>
                  <h3 className="mb-2 text-xl font-semibold text-primary">{t(`values.items.${index}.title`)}</h3>
                  <p className="text-muted-foreground">{t(`values.items.${index}.desc`)}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      <section className="-mb-16 mt-20">
        <NewsletterSignup />
      </section>
    </>
  );
}