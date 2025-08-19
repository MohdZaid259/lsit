"use client";

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
