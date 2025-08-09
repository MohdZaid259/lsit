"use client";

import {
  BugIcon as Bacteria,
  CloudRain,
  Sun,
  ThermometerSun,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import Image from "next/image";
import type React from "react";
import Section from "@/components/home/section";

type Metric = { label: string; normal: string; ours: string };
type Tech = {
  key: string;
  name: string;
  desc: string;
  img: string;
  icon: React.ElementType;
  bullets: string[];
  compare: { normal: string; ours: string };
  metrics: Metric[];
};

const techs: Tech[] = [
  {
    key: "sunray",
    name: "SunRay Reflective",
    desc: "High-reflectance outer layer to reduce heat gain under extreme sun.",
    img: "/images/tech-sunray.png",
    icon: Sun,
    bullets: [
      "IR reflectivity ≥ 85%",
      "UV-block UPF 50+",
      "Improved thermal comfort",
    ],
    compare: {
      normal: "/images/compare-normal.png",
      ours: "/images/compare-ours.png",
    },
    metrics: [
      { label: "Heat Reflectivity", normal: "42%", ours: "86%" },
      { label: "Cabin Temp Drop", normal: "0°C", ours: "up to 8°C" },
      { label: "UV Blocking", normal: "UPF 10", ours: "UPF 50+" },
      { label: "Colorfastness", normal: "Grade 3", ours: "Grade 4-5" },
    ],
  },
  {
    key: "fire",
    name: "Fire-Resistant",
    desc: "Inherently flame-retardant fibers and coatings for high-temperature safety.",
    img: "/images/tech-fire.png",
    icon: ThermometerSun,
    bullets: ["Meets NFPA 2112", "Self-extinguishing", "Low smoke index"],
    compare: {
      normal: "/images/compare-normal.png",
      ours: "/images/compare-ours.png",
    },
    metrics: [
      { label: "Flame Spread Index", normal: "120", ours: "25" },
      { label: "Afterflame Time", normal: "6 s", ours: "≤1 s" },
      { label: "Heat Shrinkage", normal: "High", ours: "Low" },
      { label: "Smoke Index", normal: "High", ours: "Low" },
    ],
  },
  {
    key: "antibacterial",
    name: "Antibacterial",
    desc: "Embedded silver-ion protection for durable antimicrobial performance.",
    img: "/images/tech-antibacterial.png",
    icon: Bacteria,
    bullets: ["99.9% bacterial reduction", "Odor control", "Wash-durable"],
    compare: {
      normal: "/images/compare-normal.png",
      ours: "/images/compare-ours.png",
    },
    metrics: [
      { label: "Bacterial Growth", normal: "High", ours: "Low" },
      { label: "Reduction Rate", normal: "0%", ours: "99.9%" },
      { label: "Odor Retention", normal: "High", ours: "Low" },
      {
        label: "Durability (50 washes)",
        normal: "Degraded",
        ours: "Maintained",
      },
    ],
  },
  {
    key: "allweather",
    name: "All-Weather",
    desc: "Water-repellent, breathable membranes for year-round protection.",
    img: "/images/tech-allweather.png",
    icon: CloudRain,
    bullets: [
      "20K/15K waterproof/breathable",
      "Hydrophobic finish",
      "Abrasion-resistant",
    ],
    compare: {
      normal: "/images/compare-normal.png",
      ours: "/images/compare-ours.png",
    },
    metrics: [
      { label: "Hydrostatic Head", normal: "5K", ours: "20K" },
      { label: "MVTR (Breathable)", normal: "Low", ours: "15K" },
      { label: "Abrasion Cycles", normal: "10K", ours: "50K+" },
      { label: "Water Repellency", normal: "Wets out", ours: "Beads off" },
    ],
  },
];

export default function TechnologiesSection() {
  const [active, setActive] = useState<Tech["key"]>("sunray");
  const current = useMemo(
    () => techs.find((t) => t.key === active) ?? techs[0],
    [active]
  );

  return (
    <Section
      id="technologies"
      eyebrow="Fabric Technologies"
      title="How our fabric technologies look and perform"
      subtitle="Explore each platform’s texture, construction, and measurable benefits—then compare against conventional fabrics."
    >
      <Tabs value={active} onValueChange={(v) => setActive(v)}>
        <TabsList className="flex w-full flex-wrap gap-2 justify-start bg-transparent p-0">
          {techs.map((t) => {
            const Icon = t.icon;
            const selected = active === t.key;
            return (
              <TabsTrigger
                key={t.key}
                value={t.key}
                className={`data-[state=active]:bg-slate-900 data-[state=active]:text-white border px-3 py-1.5 rounded-md text-sm ${
                  selected ? "bg-slate-900 text-white" : "bg-white text-primary"
                }`}
              >
                <Icon className="mr-2 h-4 w-4" />
                {t.name}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {techs.map((t) => (
          <TabsContent key={t.key} value={t.key} className="mt-6">
            <TechRow tech={t} />
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}

function TechRow({ tech }: { tech: Tech }) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-5"
      >
        <TextureCard tech={tech} />
        <BenefitsCard tech={tech} />
      </motion.div>

      <ComparisonPanel tech={tech} />
    </div>
  );
}

function TextureCard({ tech }: { tech: Tech }) {
  const Icon = tech.icon;
  return (
    <Card className="overflow-hidden border-slate-200 py-4 gap-4">
      <CardContent className="relative aspect-[16/10]">
        <Image
          src={
            tech.img ||
            "/placeholder.svg?height=400&width=640&query=technology-texture"
          }
          alt={`${tech.name} fabric texture close-up`}
          fill
          sizes="(min-width:1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
        <div className="absolute left-4 bottom-4 flex items-center gap-2 rounded bg-white/85 px-2 py-1 text-sm text-slate-800">
          <Icon className="h-4 w-4 text-slate-600" />
          <span className="font-medium">{tech.name}</span>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-slate-700">{tech.desc}</p>
      </CardFooter>
    </Card>
  );
}

function BenefitsCard({ tech }: { tech: Tech }) {
  return (
    <Card className="p-4 gap-0">
      <div className="text-sm font-semibold text-slate-900">Key benefits</div>
      <ul className="mt-3 space-y-2">
        {tech.bullets.map((b) => (
          <li
            key={b}
            className="flex items-center gap-2 text-sm text-slate-700"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-400" />
            {b}
          </li>
        ))}
      </ul>
    </Card>
  );
}

function ComparisonPanel({ tech }: { tech: Tech }) {
  const [value, setValue] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setValue(65), 350);
    return () => clearTimeout(t);
  }, [inView]);

  return (
    <Card
      ref={ref}
      className="h-full overflow-hidden border-slate-200 gap-0 py-0"
    >
      <div className="p-4 pb-0">
        <div className="text-sm font-semibold text-slate-900">
          Compare vs. conventional
        </div>
        <p className="text-xs text-slate-600">
          Drag the slider to see the difference.
        </p>
      </div>
      <div className="relative mt-3">
        <div className="relative aspect-[16/10]">
          <Image
            src={tech.compare.normal || "/placeholder.svg"}
            alt="Conventional fabric close-up"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
            aria-hidden="true"
          >
            <Image
              src={tech.compare.ours || "/placeholder.svg"}
              alt={`${tech.name} close-up`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.0),rgba(2,6,23,0.20))]" />
          </div>
          <input
            type="range"
            aria-label="Comparison slider"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number.parseInt(e.target.value))}
            className="absolute left-0 right-0 bottom-4 mx-auto w-[80%] h-1 accent-[#1f4f86]"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 text-xs md:text-sm mt-2">
        {tech.metrics.map((m) => (
          <Metric
            key={m.label}
            label={m.label}
            normal={m.normal}
            ours={m.ours}
          />
        ))}
      </div>
    </Card>
  );
}

function Metric({ label, normal, ours }: Metric) {
  return (
    <div className="flex items-center justify-between gap-4 p-3 border-t border-slate-200">
      <div className="text-slate-600">{label}</div>
      <div className="flex items-center gap-2">
        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">
          Normal: {normal}
        </span>
        <span className="px-2 py-0.5 rounded bg-[linear-gradient(135deg,#0b2f57,#1f4f86)] text-white">
          Ours: {ours}
        </span>
      </div>
    </div>
  );
}
