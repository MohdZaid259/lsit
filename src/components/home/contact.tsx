"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type React from "react";
import { SafeImage } from "../ui/safe-image";
import Section from "../common/section";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Home.Contact");

  function handleSubmit(e: any) {
    e.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement)?.value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const phone = (document.getElementById("phone") as HTMLInputElement)?.value;
    const company = (document.getElementById("company") as HTMLSelectElement)
      ?.value;
    const message = (document.getElementById("message") as HTMLTextAreaElement)
      ?.value;

    const subject = encodeURIComponent(
      t("mailSubject", { name })
    );
    const body = encodeURIComponent(
      `${t("form.name")}: ${name}\n${t("form.email")}: ${email}\n${t("form.phone")}: ${phone}\n${t("form.company")}: ${company}\n\n${t("form.message")}:\n${message}\n\n--\n`
    );

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=razvizaid259@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailURL, "_blank");
  }

  return (
    <Section
      id="contact"
      eyebrow={t("eyebrow")}
      title={t("title")}
      subtitle={t("subtitle")}
      className="md:mx-16 mx-0 bg-transparent md:pb-16 pb-0 relative isolate overflow-hidden"
    >
      <div className="grid lg:grid-cols-[1fr_420px] gap-8">
        <form className="grid gap-0 p-6 pb-0 rounded-xl border border-gray-500 bg-white">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm text-slate-600 mb-1"
                htmlFor="name"
              >
                {t("form.name")}
              </label>
              <Input id="name" required placeholder={t("form.namePlaceholder")} />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm text-slate-600 mb-1"
              >
                {t("form.company")}
              </label>
              <Input id="company" required placeholder={t("form.companyPlaceholder")} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-slate-600 mb-1"
              >
                {t("form.email")}
              </label>
              <Input
                id="email"
                required
                type="email"
                placeholder={t("form.emailPlaceholder")}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm text-slate-600 mb-1"
              >
                {t("form.phone")}
              </label>
              <Input id="phone" placeholder={t("form.phonePlaceholder")} />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm text-slate-600 mb-1"
            >
              {t("form.message")}
            </label>
            <Textarea
              id="message"
              required
              placeholder={t("form.messagePlaceholder")}
            />
          </div>
          <div className="flex items-center justify-end py-4 md:py-0">
            <Button onClick={handleSubmit}>{t("form.sendBtn")}</Button>
          </div>
        </form>
        <aside className="space-y-4">
          <div className="p-4 rounded-xl border border-gray-500">
            <div className="flex items-center gap-1 text-slate-800">
              <Mail className="h-4 w-4 text-slate-500" />
              <a
                href="mailto:info@ls4it.com"
                className="tracking-wider hover:underline"
              >
                info@ls4it.com
              </a>
            </div>
            <div className="mt-3 flex items-center gap-1 text-slate-800">
              <Phone className="h-4 w-4 text-slate-500" />
              <a
                href="tel:+971 52 666 9974"
                className="tracking-wide hover:underline"
              >
                0657 32450
              </a>
            </div>
            <div className="mt-3 flex items-start gap-1 text-slate-800">
              <MapPin className="h-4 w-4 text-slate-500 mt-0.5" />
              <div className="tracking-wider">
                LS4IT, AFZ Office 1038,
                <br />
                Ajman Free Zone, UAE
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-500">
            <iframe
              title="LS4IT Office Map"
              src="https://www.google.com/maps?q=AFZ%20Office%201038,%20Ajman%20Free%20Zone,%20UAE&output=embed"
              className="w-full h-[260px]"
              loading="lazy"
            ></iframe>
          </div>
        </aside>
      </div>
    </Section>
  );
}