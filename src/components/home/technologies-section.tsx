"use client";

import {
  BugIcon as Bacteria,
  CloudRain,
  Sun,
  ThermometerSun,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import Image from "next/image";
import type React from "react";
import Section from "@/components/common/section";
import { motion } from "framer-motion";

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
    img: "/technology/images/uvFabric.webp",
    icon: Sun,
    bullets: [
      "IR reflectivity ≥ 85%",
      "UV-block UPF 50+",
      "Improved thermal comfort",
    ],
  },
  {
    key: "fire",
    name: "Fire-Resistant",
    desc: "Inherently flame-retardant fibers and coatings for high-temperature safety.",
    img: "/technology/images/fireFibre.webp",
    icon: ThermometerSun,
    bullets: ["Meets NFPA 2112", "Self-extinguishing", "Low smoke index"],
  },
  {
    key: "antibacterial",
    name: "Antibacterial",
    desc: "Embedded silver-ion protection for durable antimicrobial performance.",
    img: "/technology/images/antibactCover.webp",
    icon: Bacteria,
    bullets: ["99.9% bacterial reduction", "Odor control", "Wash-durable"],
  },
  {
    key: "allweather",
    name: "All-Weather",
    desc: "Water-repellent, breathable membranes for year-round protection.",
    img: "/technology/images/raincoat.png",
    icon: CloudRain,
    bullets: ["20K/15K waterproof/breathable", "Hydrophobic finish"],
  },
];

export default function TechnologiesSection() {
  return (
    <Section
      id="technologies"
      title="Our advanced fabric technologies"
      subtitle="Explore each platform’s texture and benefits."
      className="mx-16"
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
          <Image
            src={
              tech.img ||
              "/placeholder.svg?height=400&width=640&query=technology-texture"
            }
            alt={`${tech.name} fabric texture`}
            fill
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
        </CardFooter>
      </Card>
    </motion.div>
  );
}
