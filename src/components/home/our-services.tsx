import {
  Car,
  ChevronRight,
  Cpu,
  Droplets,
  Factory,
  FileCheck2,
  FlaskConical,
  MessageSquare,
  Ruler,
  Shield,
  Sun,
  Tent,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Section from "@/components/home/section";

export default function OurServices() {
  const services = [
    {
      key: "tech",
      title: "Technology in Fabric",
      desc: "From fiber selection to advanced coatings, we engineer performance at the yarn and finish level with measurable results.",
      icon: FlaskConical,
      highlights: [
        { icon: Cpu, text: "Smart/IoT-ready fabrics" },
        { icon: Shield, text: "FR, antibacterial, UV protection" },
        { icon: Droplets, text: "Waterproof + breathable membranes" },
      ],
      cta: { label: "Explore Technologies", href: "#technologies" },
    },
    {
      key: "car",
      title: "Automotive and Car Fabrics",
      desc: "Thermal-reflective shades and interior textiles designed for heat management, durability, and compliance.",
      icon: Car,
      highlights: [
        { icon: Sun, text: "IR/UV heat reduction" },
        { icon: Shield, text: "Abrasion and fade resistance" },
        { icon: FileCheck2, text: "OEM-grade compliance" },
      ],
      cta: { label: "View Car Solutions", href: "/products/heat-resistant" },
    },
    {
      key: "tent",
      title: "Tent and Outdoor Fabrics",
      desc: "Rugged membranes and blends for tents, canopies, and shelters—balanced breathability, weatherproofing, and strength.",
      icon: Tent,
      highlights: [
        { icon: Droplets, text: "20K/15K waterproof/breathable" },
        { icon: Shield, text: "Tear + mildew resistance" },
        { icon: Sun, text: "High UV stability" },
      ],
      cta: { label: "Explore Tent Fabrics", href: "/products/tents" },
    },
  ];

  const steps = [
    {
      icon: MessageSquare,
      title: "Consult",
      text: "Define use case, targets, and constraints.",
    },
    {
      icon: Ruler,
      title: "Material Design",
      text: "Select fibers, weaves, finishes, and coatings.",
    },
    {
      icon: FlaskConical,
      title: "Prototype",
      text: "Lab samples, durability tests, and iterations.",
    },
    {
      icon: FileCheck2,
      title: "Certify",
      text: "Compliance verification and documentation.",
    },
    { icon: Factory, title: "Manufacture", text: "Scaled production and QC." },
    {
      icon: Truck,
      title: "Deliver",
      text: "Global logistics with scheduling support.",
    },
  ];

  return (
    <Section
      id="our-services"
      eyebrow="Our Services"
      title="End‑to‑end textile engineering for real‑world performance"
      subtitle="We specialize in advanced fabric technologies, automotive heat‑management textiles, and rugged tent/outdoor membranes."
    >
      {/* Services grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <Card
              key={s.key}
              className="h-full overflow-hidden border-slate-200"
            >
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-slate-600" />
                  <h3 className="text-lg font-semibold text-slate-900">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>

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

                <div className="mt-5">
                  <Button asChild variant="secondary" className="group">
                    <Link href={s.cta.href}>
                      {s.cta.label}
                      <ChevronRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/70 to-transparent mx-5 mb-5" />
            </Card>
          );
        })}
      </div>

      {/* Process timeline */}
      <div className="mt-12 rounded-xl border p-6">
        <div className="text-sm font-semibold text-slate-800">How we work</div>
        <p className="text-sm text-slate-600 mt-1">
          A collaborative, test‑driven approach from consultation to certified
          production.
        </p>
        <ol className="mt-5 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, idx) => {
            const SIcon = step.icon;
            return (
              <li key={step.title} className="flex gap-3">
                <div className="shrink-0">
                  <div className="grid h-9 w-9 place-items-center rounded-md border bg-white">
                    <SIcon className="h-4 w-4 text-slate-600" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {idx + 1}. {step.title}
                  </div>
                  <div className="text-xs text-slate-600">{step.text}</div>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button asChild>
            <Link href="#contact">Talk to engineering</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="#technologies">See fabric technologies</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
