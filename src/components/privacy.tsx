import { useTranslations } from 'next-intl'
import React from 'react'

function Privacy() {
  const t = useTranslations('Privacy')

  return (
    <div className="mx-2 md:mx-16 my-4">
      {/* Title */}
      <h1 className="font-bold text-3xl mb-4">{t("title")}</h1>

      <section>
        {/* Effective Date + Intro */}
        <p><strong>{t("effective_date")}</strong></p>
        <p className="mb-6">{t("intro")}</p>

        {/* Section 1 */}
        <h2 className="font-semibold text-xl mt-6 mb-2">{t("1_title")}</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t("1_items.personal")}</li>
          <li>{t("1_items.business")}</li>
          <li>{t("1_items.usage")}</li>
          <li>{t("1_items.order")}</li>
        </ul>

        {/* Section 2 */}
        <h2 className="font-semibold text-xl mt-6 mb-2">{t("2_title")}</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t("2_items.orders")}</li>
          <li>{t("2_items.communication")}</li>
          <li>{t("2_items.updates")}</li>
          <li>{t("2_items.compliance")}</li>
          <li>{t("2_items.improve")}</li>
        </ul>

        {/* Section 3 */}
        <h2 className="font-semibold text-xl mt-6 mb-2">{t("3_title")}</h2>
        <p>{t("3_intro")}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t("3_items.providers")}</li>
          <li>{t("3_items.legal")}</li>
          <li>{t("3_items.transfer")}</li>
        </ul>

        {/* Section 4 */}
        <h2 className="font-semibold text-xl mt-6 mb-2">{t("4_title")}</h2>
        <p>{t("4_text")}</p>

        {/* Section 5 */}
        <h2 className="font-semibold text-xl mt-6 mb-2">{t("5_title")}</h2>
        <p>{t("5_text")}</p>

        {/* Section 6 */}
        <h2 className="font-semibold text-xl mt-6 mb-2">{t("6_title")}</h2>
        <p>{t("6_intro")}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t("6_items.access")}</li>
          <li>{t("6_items.correction")}</li>
          <li>{t("6_items.deletion")}</li>
          <li>{t("6_items.optout")}</li>
        </ul>

        {/* Section 7 */}
        <h2 className="font-semibold text-xl mt-6 mb-2">{t("7_title")}</h2>
        <p>{t("7_text")}</p>

        {/* Section 8 */}
        <h2 className="font-semibold text-xl mt-6 mb-2">{t("8_title")}</h2>
        <p>{t("8_text")}</p>

        {/* Section 9 */}
        <h2 className="font-semibold text-xl mt-6 mb-2">{t("9_title")}</h2>
        <p>{t("9_text")}</p>

        {/* Section 10 */}
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

export default Privacy