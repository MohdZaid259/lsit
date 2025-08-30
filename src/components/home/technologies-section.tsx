"use client";

import {
  BugIcon as Bacteria,
  CloudRain,
  Sun,
  ThermometerSun,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { SafeImage } from "../ui/safe-image";
import Section from "@/components/common/section";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type Tech = {
  key: string;
  name: string;
  desc: string;
  img: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bullets: string[];
};

const techIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  sunray: Sun,
  fire: ThermometerSun,
  antibacterial: Bacteria,
  allweather: CloudRain,
};

export default function TechnologiesSection() {
  const t = useTranslations("Home.Technologies");

  const techs: Tech[] = [
    {
      key: "sunray",
      name: t("sunray.name"),
      desc: t("sunray.desc"),
      img: "/technology/images/uvFabric.webp",
      icon: techIcons.sunray,
      bullets: [
        t("sunray.bullet1"),
        t("sunray.bullet2"),
        t("sunray.bullet3"),
      ],
    },
    {
      key: "fire",
      name: t("fire.name"),
      desc: t("fire.desc"),
      img: "/technology/images/fireFibre.webp",
      icon: techIcons.fire,
      bullets: [
        t("fire.bullet1"),
        t("fire.bullet2"),
        t("fire.bullet3"),
      ],
    },
    {
      key: "antibacterial",
      name: t("antibacterial.name"),
      desc: t("antibacterial.desc"),
      img: "/technology/images/antiBactCover.webp",
      icon: techIcons.antibacterial,
      bullets: [
        t("antibacterial.bullet1"),
        t("antibacterial.bullet2"),
        t("antibacterial.bullet3"),
      ],
    },
    {
      key: "allweather",
      name: t("allweather.name"),
      desc: t("allweather.desc"),
      img: "/technology/images/raincoat.png",
      icon: techIcons.allweather,
      bullets: [
        t("allweather.bullet1"),
        t("allweather.bullet2"),
      ],
    },
  ];

  return (
    <Section
      id="technologies"
      eyebrow={t("eyebrow")}
      title={t("title")}
      subtitle={t("subtitle")}
      className="md:mx-16 mx-0"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {techs.map((tech) => (
          <TechCard key={tech.key} tech={tech} />
        ))}
      </div>
    </Section>
  );
}

function TechCard({ tech }: { tech: Tech }) {
  const Icon = tech.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="-mx-1"
    >
      <Card className="overflow-hidden border-slate-200 h-full flex flex-col p-0 gap-0 shadow-xl ">
        <CardContent className="relative aspect-[16/10]">
          <SafeImage
            src={tech.img || ""}
            alt={`${tech.name} fabric texture`}
            fill
            sizes="(100vw - 2rem)"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
          <div className="absolute left-4 bottom-4 flex items-center gap-2 rounded bg-white/85 px-2 py-1 text-sm text-slate-800">
            <Icon className="h-4 w-4 text-slate-600" />
            <span className="font-medium">{tech.name}</span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4 p-4 flex-1">
          <p className="text-sm text-slate-700">{tech.desc}</p>
          <ul className="space-y-2">
            {tech.bullets.map((b, i) => (
              <li
                key={b + i}
                className="flex items-center gap-2 text-sm text-slate-700"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-400" />
                {b}
              </li>
            ))}
          </ul>
        </CardFooter>
      </Card>
    </motion.div>
  );
}