"use client";

// Client component on purpose: it takes translations from the layout's NextIntlClientProvider.
// As a server component, getTranslations() here had no locale and read request headers, which
// forced every page under [locale] to render dynamically instead of being served statically.
import NotFoundContent from "@/components/common/not-found";
import { useTranslations } from "next-intl";

export default function LocaleNotFound() {
  const t = useTranslations("NotFound");

  return (
    <NotFoundContent
      title={t("title")}
      subtitle={t("title")}
      description={t("description")}
      homeLabel={t("home")}
      contactLabel={t("contact")}
    />
  );
}
