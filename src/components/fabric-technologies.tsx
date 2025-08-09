"use client";

import type React from "react";

import Image from "next/image";
import Section from "./section";
import { motion } from "framer-motion";
import {
  Shield,
  Sun,
  ThermometerSun,
  BugIcon as Bacteria,
  CloudRain,
} from "lucide-react";
import { Card } from "@/components/ui/card";

type Tech = {
  key: string;
  name: string;
  desc: string;
  img: string;
  icon: React.ElementType;
  bullets: string[];
};

const techs: Tech[] = [
  {
    key: "sunray",
    name: "SunRay Reflective",
    desc: "High-reflectance outer layer to reduce heat gain under extreme sun.",
    img: "/images/tech-sunray.png",
    icon: Sun,
    bullets: ["IR reflectivity ≥ 85%", "UV-block UPF 50+", "Thermal comfort"],
  },
  {
    key: "fire",
    name: "Fire-Resistant",
    desc: "Inherently flame-retardant fibers and coatings for high-temperature safety.",
    img: "/images/tech-fire.png",
    icon: ThermometerSun,
    bullets: ["Meets NFPA 2112", "Self-extinguishing", "Low smoke index"],
  },
  {
    key: "antibacterial",
    name: "Antibacterial",
    desc: "Embedded silver-ion protection for durable antimicrobial performance.",
    img: "/images/tech-antibacterial.png",
    icon: Bacteria,
    bullets: ["99.9% bacterial reduction", "Odor control", "Wash-durable"],
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
  },
];

export default function FabricTechnologies() {
  return (
    <Section
      id="technologies"
      eyebrow="Fabric Technologies"
      title="Proprietary performance at the fiber and finish level"
      subtitle="Each platform is engineered for specific environments and verified with rigorous testing."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techs.map((t, idx) => (
          <motion.div
            key={t.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.05 }}
          >
            <TechCard tech={t} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function TechCard({ tech }: { tech: Tech }) {
  const Icon = tech.icon;
  return (
    <Card className="group overflow-hidden border-slate-200 hover:border-slate-300 transition-colors">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={tech.img || "/placeholder.svg"}
          alt={`${tech.name} fabric texture`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.0) 40%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.0) 60%)",
            backgroundSize: "300% 100%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-slate-800">
          <Shield className="h-4 w-4 text-slate-500" />
          <span className="text-xs uppercase tracking-wide text-slate-500">
            Technology
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <Icon className="h-5 w-5 text-slate-600" />
          <h3 className="font-semibold">{tech.name}</h3>
        </div>
        <p className="mt-2 text-sm text-slate-600">{tech.desc}</p>
        <ul className="mt-3 space-y-1 text-sm text-slate-700">
          {tech.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-400" />
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative h-0.5 bg-gradient-to-r from-transparent via-slate-300/50 to-transparent mx-4 mb-4" />
    </Card>
  );
}
