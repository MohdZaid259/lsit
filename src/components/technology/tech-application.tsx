import { useTranslations } from "next-intl";

export default function TechApplication() {
  const t = useTranslations("Technology.Applications");

  return (
    <section className="py-8 md:py-16 pb-0 md:pb-0 md:mx-16 mx-2 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">{t("title")}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 ">
          {[0, 1, 2].map((i) => (
            <div className="text-center" key={i}>
              <img
                src={
                  i === 0
                    ? "/technology/pages/tents.png"
                    : i === 1
                    ? "/technology/pages/carShade.webp"
                    : "/technology/pages/jacket.png"
                }
                alt={t(`cards.${i}.imgAlt`)}
                className="w-full h-56 object-cover rounded-lg mb-2  md:mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{t(`cards.${i}.title`)}</h3>
              <p className="text-slate-600 text-sm">{t(`cards.${i}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}