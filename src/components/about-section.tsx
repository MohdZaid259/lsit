"use client";

import Image from "next/image";
import Section from "./section";
import { motion } from "framer-motion";
import { BadgeCheck, Factory, Globe } from "lucide-react";

export default function AboutSection() {
  const stats = [
    {
      icon: BadgeCheck,
      label: "Years of Experience",
      value: "25+",
    },
    {
      icon: Globe,
      label: "Global Clients",
      value: "40+ countries",
    },
    {
      icon: Factory,
      label: "Tech-Integrated Fabric",
      value: "IoT-ready processes",
    },
  ];

  return (
    <Section
      id="about"
      eyebrow="About SunTech"
      title="Engineering textiles for the world’s toughest environments"
      subtitle="Our vertically integrated manufacturing blends advanced materials science with precision processes to deliver performance fabrics that last."
    >
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative aspect-[4/3] rounded-xl overflow-hidden"
        >
          <Image
            src="/images/machinery.png"
            alt="High-precision textile machinery and fabric rolls"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          <p className="text-slate-700">
            We combine proprietary coatings, weaves, and finishing technologies
            to create fabrics with measurable advantages—resistance to heat,
            abrasion, microbes, and extreme climates—while maintaining
            breathability and comfort.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="p-4 rounded-lg border bg-white">
                <div className="flex items-center gap-2 text-slate-800 font-semibold">
                  <Icon className="h-4 w-4 text-slate-500" />
                  {label}
                </div>
                <div className="mt-2 text-xl">{value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
