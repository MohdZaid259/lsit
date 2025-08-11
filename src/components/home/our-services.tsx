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
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../common/reveal";
import { SafeImage } from "../ui/safe-image";
import Section from "@/components/common/section";

export default function OurServices() {
  const services = [
    {
      key: "tech",
      title: "Technology in Fabric",
      desc: "From fiber selection to advanced coatings, we engineer performance at the yarn and finish level with measurable results.",
      icon: FlaskConical,
      image: "",
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
      image: "/service/shadeCover.png",
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
      image: "",
      highlights: [
        { icon: Droplets, text: "20K/15K waterproof/breathable" },
        { icon: Shield, text: "Tear + mildew resistance" },
        { icon: Sun, text: "High UV stability" },
      ],
      cta: { label: "Explore Tent Fabrics", href: "/products/tents" },
    },
  ];

  return (
    <Section
      className="md:mx-16 mx-0"
      id="our-services"
      eyebrow="Our Services"
      title="End-to-end textile engineering for real-world performance"
      subtitle="We specialize in advanced fabric technologies, automotive heat-management textiles, and rugged tent/outdoor membranes."
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
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardContent className="py-4">
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
