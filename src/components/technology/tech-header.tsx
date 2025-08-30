import ScrollAnimation from "@/components/scroll-animation";
import { useTranslations } from "next-intl";

export default function TechHeader() {
  const t = useTranslations("Technology.Header");

  return (
    <>
      <section className="relative bg-primary text-white">
        <div className="absolute inset-0 bg-[url('/coverImage/techCover.png')] bg-cover bg-bottom  [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_100%)] [mask-repeat:no-repeat] [mask-size:cover]" />
        <div className="container relative py-8 md:py-20 sm:px-6 px-4 lg:px-24">
          <div className="max-w-3xl">
            <h1 className="mb-4 md:text-4xl font-bold tracking-tight text-3xl">
              {t("title")}
            </h1>
            <p className="mb-8 text-lg text-white/80 sm:text-xl">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>
      <section className="md:mx-16 mx-0 py-8 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollAnimation animation="fade-in-left">
                <div>
                  <h2 className="mb-6 text-3xl font-bold text-primary">
                    {t("overview.title")}
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>{t("overview.p1")}</p>
                    <p>{t("overview.p2")}</p>
                    <ul className="list-disc pl-5">
                      <li><span className="font-bold">{t("overview.bullets.0.title")}</span>{t("overview.bullets.0.desc")}</li>
                      <li><span className="font-bold">{t("overview.bullets.1.title")}</span>{t("overview.bullets.1.desc")}</li>
                      <li><span className="font-bold">{t("overview.bullets.2.title")}</span>{t("overview.bullets.2.desc")}</li>
                      <li><span className="font-bold">{t("overview.bullets.3.title")}</span>{t("overview.bullets.3.desc")}</li>
                    </ul>
                  </div>
                </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in-right">
                <div className="mb-8">
                  <img
                    src="/technology/pages/hero.png"
                    alt={t("overview.imgAlt")}
                    className="mx-auto rounded-lg w-[800px] shadow-lg"
                  />
                </div>
          </ScrollAnimation>
          </div>
          </div>
      </section>
    </>
  )
}