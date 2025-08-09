import {
  BadgeCheck,
  Car,
  ChevronRight,
  Cpu,
  FlaskConical,
  Gauge,
  Globe,
  Layers,
  Leaf,
  Microscope,
  ShieldCheck,
  Tent,
  Timer,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Section from "./section";

export default function WhyChooseUs() {
  const kpis = [
    { label: "IR Reflectivity", value: "Up to 86%", icon: Gauge },
    { label: "Lead Time", value: "2–6 weeks", icon: Timer },
    { label: "Global Reach", value: "40+ countries", icon: Globe },
    { label: "Compliance", value: "ISO • CE • NFPA", icon: BadgeCheck },
  ];

  const benefits = [
    {
      icon: Microscope,
      title: "Science‑led engineering",
      desc: "We start at the fiber and finish level—measurable gains in heat, FR, and durability.",
      bullets: [
        "Material science + lab validation",
        "Quantified IR/UV performance",
        "Long‑term durability focus",
      ],
    },
    {
      icon: Car,
      title: "Automotive heat control",
      desc: "Thermal‑reflective car fabrics reduce heat load and improve cabin comfort.",
      bullets: [
        "IR/UV reflective shades",
        "OEM‑grade abrasion & colorfastness",
        "Interior safety compliance",
      ],
    },
    {
      icon: Tent,
      title: "Rugged tent membranes",
      desc: "Weatherproof yet breathable fabrics designed for long deployments.",
      bullets: [
        "20K/15K waterproof/breathable",
        "Tear, mildew, and UV resistance",
        "Field‑tested construction",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Certified & dependable",
      desc: "Audited processes and third‑party verification for critical use cases.",
      bullets: ["ISO 9001 QMS", "NFPA FR standards", "OEKO‑TEX testing"],
    },
  ];

  return (
    <Section
      id="why-us"
      eyebrow="Why Choose Us"
      title="Built on science. Proven in the field."
      subtitle="Technology‑first textiles for heat control, protection, and all‑weather performance across automotive and outdoor applications."
    >
      {/* KPI Row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map(({ label, value, icon: Icon }) => (
          <Card key={label} className="p-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-md border bg-white">
                <Icon className="h-5 w-5 text-slate-600" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-500">
                  {label}
                </div>
                <div className="text-lg font-semibold text-slate-900">
                  {value}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Benefits Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <Card key={b.title} className="p-6">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-md border bg-white shrink-0">
                  <Icon className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{b.desc}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                    {b.bullets.map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-400" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
