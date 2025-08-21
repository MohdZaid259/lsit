import { useLocale, useTranslations } from "next-intl";

import LocaleSwitcherSelect from "./locale-switcher-select";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  const locales = routing.locales.map((cur) => ({
    value: cur,
    label: t("locale", { locale: cur }),
  }));

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      locales={locales}
      label={t("label")}
    />
  );
}
