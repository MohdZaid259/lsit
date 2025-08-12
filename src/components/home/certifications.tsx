"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { SafeImage } from "../ui/safe-image";
import Section from "@/components/common/section";

const certs = [
  {
    name: "ISO 9001",
    img: "/certifications/iso.png",
    desc: "Quality management system certified.",
  },
  {
    name: "CE",
    img: "/certifications/ce.png",
    desc: "Conforms with EU health, safety, and environmental protection standards.",
  },
  {
    name: "NFPA",
    img: "/certifications/nfpa.png",
    desc: "Meets NFPA 2112 flame-resistant garment standard.",
  },
  {
    name: "OEKO-TEX",
    img: "/certifications/oeko-tex.png",
    desc: "Tested for harmful substances.",
  },
];

export default function Certifications() {
  return (
    <Section
      className="md:mx-16 mx-0"
      id="certifications"
      eyebrow="Certifications"
      title="Proven compliance, trusted globally"
      subtitle="Rigorous third‑party verification and standards adherence for critical applications."
    >
      <div className="relative overflow-hidden rounded-xl border bg-white">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-[50]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-[50]" />

        {/* Marquee */}
        <div className="overflow-hidden">
          <div
            className="flex items-center gap-8 py-6"
            style={{
              animation: "marquee 22s linear infinite",
              width: "max-content",
            }}
            aria-label="Certification logos scrolling"
          >
            {/* Duplicate rows for seamless loop */}
            {[0, 1].map((row) => (
              <div key={row} className="flex items-center gap-8">
                {certs.map((c) => (
                  <Dialog key={`${c.name}-${row}`}>
                    <DialogTrigger asChild>
                      <button
                        className="h-[72px] w-[160px] sm:w-[180px] md:w-[200px] grid place-items-center rounded-lg border bg-white hover:shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                        aria-label={`${c.name} certification details`}
                      >
                        <SafeImage
                          src={c.img || ""}
                          alt={`${c.name} certification`}
                          width={52}
                          height={52}
                        />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="flex flex-col items-center">
                      <DialogHeader>
                        <DialogTitle>{c.name}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-3 flex flex-col items-center">
                        <SafeImage
                          src={c.img || ""}
                          alt={`${c.name} badge`}
                          width={96}
                          height={96}
                        />
                        <p className="text-sm text-muted-foreground">
                          {c.desc}
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </Section>
  );
}
