"use client";

import { useLocale, useTranslations } from "next-intl";

import LocaleSwitcherSelect from "./locale-switcher-select";
import { routing } from "@/i18n/routing";
import { usePathname } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const pathname = usePathname();

  const isProductPage = pathname.includes("/products");
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  const locales = routing.locales.map((cur) => ({
    value: cur,
    label: t("locale", { locale: cur }),
  }));

  return (
    <div className={``}>
      <LocaleSwitcherSelect
        defaultValue={locale}
        locales={locales}
        label={t("label")}
      />
    </div>
  );
}
