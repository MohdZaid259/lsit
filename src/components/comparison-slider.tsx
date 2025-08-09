"use client";

import Section from "./section";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function ComparisonSlider() {
  const [value, setValue] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setValue(65), 400);
    return () => clearTimeout(t);
  }, [inView]);

  return (
    <Section
      dark
      eyebrow="Why Choose Us"
      title="Measured performance vs. conventional fabric"
      subtitle="See the difference across heat reflectivity, flame spread, bacterial growth, and weather protection."
    >
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div
          ref={ref}
          className="relative rounded-xl overflow-hidden border border-white/10"
        >
          <div className="relative aspect-[16/10]">
            <Image
              src="/images/compare-normal.png"
              alt="Normal fabric close-up"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - value}% 0 0)`,
              }}
              aria-hidden="true"
            >
              <Image
                src="/images/compare-ours.png"
                alt="Our fabric close-up"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.2),rgba(15,23,42,0.0))]" />
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
          <div className="grid grid-cols-2 text-xs md:text-sm">
            <Metric label="Heat Reflectivity" normal="42%" ours="86%" />
            <Metric label="Flame Spread Index" normal="120" ours="25" />
            <Metric label="Bacterial Growth" normal="High" ours="Low" />
            <Metric label="Hydrostatic Head" normal="5K" ours="20K" />
          </div>
        </div>
        <div>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="space-y-4"
          >
            {[
              "Reflects IR to reduce cabin and workspace temperatures.",
              "Meets stringent flame-resistance standards with lower smoke.",
              "Antimicrobial finishes for hygienic environments.",
              "Waterproof yet breathable for extended wear.",
            ].map((text) => (
              <motion.li
                key={text}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
                className="flex items-start gap-3"
              >
                <span className="relative mt-1 inline-block h-[2px] w-6 bg-gradient-to-r from-[#0b2f57] via-[#1f4f86] to-[#91a5bd]" />
                <span>{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </Section>
  );
}

function Metric({
  label,
  normal,
  ours,
}: {
  label: string;
  normal: string;
  ours: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 p-3 border-t border-white/10">
      <div className="text-white/70">{label}</div>
      <div className="flex items-center gap-2">
        <span className="px-2 py-0.5 rounded bg-white/5 text-white/80">
          Normal: {normal}
        </span>
        <span className="px-2 py-0.5 rounded bg-[linear-gradient(135deg,#0b2f57,#1f4f86)] text-white">
          Ours: {ours}
        </span>
      </div>
    </div>
  );
}
