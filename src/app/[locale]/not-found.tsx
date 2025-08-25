import NotFoundContent from "@/components/common/not-found";
import { getTranslations } from "next-intl/server";

export default async function LocaleNotFound() {
  const t = await getTranslations("NotFound");

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
