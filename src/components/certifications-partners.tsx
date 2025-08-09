"use client";

import Section from "./section";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const certs = [
  {
    name: "ISO 9001",
    img: "/iso-9001-badge.png",
    desc: "Quality management system certified.",
  },
  {
    name: "CE",
    img: "/ce-certification-badge.png",
    desc: "Conforms with EU health, safety, and environmental protection standards.",
  },
  {
    name: "NFPA",
    img: "/nfpa-patch.png",
    desc: "Meets NFPA 2112 flame-resistant garment standard.",
  },
  {
    name: "OEKO-TEX",
    img: "/oeko-tex-badge.png",
    desc: "Tested for harmful substances.",
  },
];

const partners = [
  { name: "AutoCo", img: "/placeholder-logo.svg", alt: "AutoCo" },
  { name: "DefenseWorks", img: "/placeholder-logo.svg", alt: "DefenseWorks" },
  { name: "MediForm", img: "/placeholder-logo.svg", alt: "MediForm" },
  { name: "CampMax", img: "/placeholder-logo.svg", alt: "CampMax" },
  { name: "AeroShade", img: "/placeholder-logo.svg", alt: "AeroShade" },
];

export default function CertificationsPartners() {
  return (
    <Section
      eyebrow="Certifications & Partners"
      title="Proven compliance, trusted globally"
      subtitle="Rigorous third-party verification and partnerships with leading OEMs."
    >
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {certs.map((c) => (
              <Dialog key={c.name}>
                <DialogTrigger asChild>
                  <button className="rounded-xl border p-4 hover:shadow-sm transition">
                    <Image
                      src={c.img || "/placeholder.svg"}
                      alt={`${c.name} certification`}
                      width={96}
                      height={96}
                      className="mx-auto"
                    />
                    <div className="mt-3 text-center font-medium">{c.name}</div>
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{c.name}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-3">
                    <Image
                      src={c.img || "/placeholder.svg"}
                      alt={`${c.name} badge`}
                      width={96}
                      height={96}
                    />
                    <p className="text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
        <div className="rounded-xl border p-6">
          <div className="text-sm text-slate-600 mb-4">Partners</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
            {partners.map((p) => (
              <Image
                key={p.name}
                src={p.img || "/placeholder.svg"}
                alt={`${p.name} logo`}
                width={140}
                height={70}
                className="mx-auto opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
