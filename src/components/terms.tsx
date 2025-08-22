import { useTranslations } from 'next-intl'
import React from 'react'

function Terms() {
  const t = useTranslations('Terms')
  return (
    <div className="mx-2 md:mx-16 my-4">
      <h1 className="font-bold text-3xl mb-4">{t("title")}</h1>

      <section>
        <p><strong>{t("effective_date")}</strong></p>
        <p className="mb-6">{t("intro")}</p>

        <h2 className="font-semibold text-xl mt-6 mb-2">{t("1_title")}</h2>
        <p>{t("1_text1")}</p>
        <p>{t("1_text2")}</p>

        <h2 className="font-semibold text-xl mt-6 mb-2">{t("2_title")}</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t("2_items.availability")}</li>
          <li>{t("2_items.prices")}</li>
          <li>{t("2_items.terms")}</li>
        </ul>

        <h2 className="font-semibold text-xl mt-6 mb-2">{t("3_title")}</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t("3_items.effort")}</li>
          <li>{t("3_items.risk")}</li>
          <li>{t("3_items.report")}</li>
        </ul>

        <h2 className="font-semibold text-xl mt-6 mb-2">{t("4_title")}</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t("4_items.return_policy")}</li>
          <li>{t("4_items.custom")}</li>
        </ul>

        <h2 className="font-semibold text-xl mt-6 mb-2">{t("5_title")}</h2>
        <p>{t("5_text")}</p>

        <h2 className="font-semibold text-xl mt-6 mb-2">{t("6_title")}</h2>
        <p>{t("6_text1")}</p>
        <p>{t("6_text2")}</p>

        <h2 className="font-semibold text-xl mt-6 mb-2">{t("7_title")}</h2>
        <p>{t("7_text")}</p>

        <h2 className="font-semibold text-xl mt-6 mb-2">{t("8_title")}</h2>
        <p>{t("8_text")}</p>

        <h2 className="font-semibold text-xl mt-6 mb-2">{t("9_title")}</h2>
        <p>{t("9_text")}</p>

        <h2 className="font-semibold text-xl mt-6 mb-2">{t("10_title")}</h2>
        <address className="not-italic leading-relaxed">
          <strong>{t("10_address.company")}</strong><br />
          {t("10_address.location")}<br />
          {t("10_address.email")}<br />
          {t("10_address.phone")}
        </address>
      </section>
    </div>
  )
}

export default Terms