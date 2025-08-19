import {
  Car,
  ChevronRight,
  Cpu,
  Droplets,
  FileCheck2,
  Flame,
  Shield,
  Sun,
  Tent,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Reveal from "../common/reveal";
import { SafeImage } from "../ui/safe-image";
import Section from "@/components/common/section";
import { useTranslations } from "next-intl";

export default function OurServices() {
  const t = useTranslations("Home.OurServices");

  const services = [
    {
      key: "fire",
      icon: Flame,
      image: "/service/fire.jpg",
      highlights: [
        { icon: Cpu, text: t("fire.highlight1") },
        { icon: Shield, text: t("fire.highlight2") },
        { icon: Droplets, text: t("fire.highlight3") },
      ],
      cta: { label: t("fire.cta"), href: "/technology" },
    },
    {
      key: "tent",
      icon: Tent,
      image: "/service/tentFabric.webp",
      highlights: [
        { icon: Droplets, text: t("tent.highlight1") },
        { icon: Shield, text: t("tent.highlight2") },
        { icon: Sun, text: t("tent.highlight3") },
      ],
      cta: { label: t("tent.cta"), href: "/products" },
    },
    {
      key: "car",
      icon: Car,
      image: "/service/shadeCover.png",
      highlights: [
        { icon: Sun, text: t("car.highlight1") },
        { icon: Shield, text: t("car.highlight2") },
        { icon: FileCheck2, text: t("car.highlight3") },
      ],
      cta: { label: t("car.cta"), href: "/products" },
    },
  ];

  return (
    <Section
      className="md:mx-16 mx-0"
      id="our-services"
      eyebrow={t("eyebrow")}
      title={t("title")}
      subtitle={t("subtitle")}
    >
      {/* Services grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.key}>
              <Card className="h-full shadow-xl overflow-hidden border-slate-200 gap-0 pt-0">
                {/* Image at top */}
                <div className="relative w-full h-50">
                  <SafeImage
                    src={s.image || ""}
                    alt={t(`${s.key}.title`)}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardContent className="py-4">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-slate-600" />
                    <h3 className="text-lg font-semibold text-slate-900">
                      {t(`${s.key}.title`)}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{t(`${s.key}.desc`)}</p>

                  <ul className="mt-4 space-y-2">
                    {s.highlights.map((h, i) => {
                      const HIcon = h.icon;
                      return (
                        <li
                          key={s.key + i}
                          className="flex items-center gap-2 text-sm text-slate-700"
                        >
                          <HIcon className="h-4 w-4 text-slate-500" />
                          <span>{h.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>

                <CardFooter className="mt-auto">
                  <Button asChild variant="secondary" className="group mt-4">
                    <Link href={s.cta.href}>
                      {s.cta.label}
                      <ChevronRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}