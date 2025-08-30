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
import { useTranslations } from "next-intl";

const certImgs = {
  iso: "/certifications/iso.png",
  ce: "/certifications/ce.png",
  nfpa: "/certifications/nfpa.png",
  oeko: "/certifications/oeko-tex.png",
};

export default function Certifications() {
  const t = useTranslations("Home.Certifications");

  const certs = [
    {
      key: "iso",
      name: t("iso.name"),
      img: certImgs.iso,
      desc: t("iso.desc"),
    },
    {
      key: "ce",
      name: t("ce.name"),
      img: certImgs.ce,
      desc: t("ce.desc"),
    },
    {
      key: "nfpa",
      name: t("nfpa.name"),
      img: certImgs.nfpa,
      desc: t("nfpa.desc"),
    },
    {
      key: "oeko",
      name: t("oeko.name"),
      img: certImgs.oeko,
      desc: t("oeko.desc"),
    },
  ];

  return (
    <Section
      className="md:mx-16 mx-0"
      id="certifications"
      eyebrow={t("eyebrow")}
      title={t("title")}
      subtitle={t("subtitle")}
    >
      <div className="relative overflow-hidden border border-x-0 bg-white">
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
            aria-label={t("marqueeLabel")}
          >
            {[0, 1].map((row) => (
              <div key={row} className="flex items-center gap-8">
                {/* Attached banner tile */}
                <button
                  className="h-[72px] w-[160px] sm:w-[180px] md:w-[200px] grid place-items-center rounded-lg border bg-white hover:shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                  aria-label={`${certs[2].name} certification details`}
                >
                  <SafeImage
                    src={certs[2].img || ""}
                    alt={`${certs[2].name} certification`}
                    width={certs[2].key === "nfpa" ? 72 : 52}
                    height={certs[2].key === "nfpa" ? 72 : 52}
                  />
                </button>

                {certs.map((c) => (
                  <Dialog key={`${c.key}-${row}`}>
                    <DialogTrigger asChild>
                      <button
                        className="h-[72px] w-[160px] sm:w-[180px] md:w-[200px] grid place-items-center rounded-lg border bg-white hover:shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                        aria-label={`${c.name} certification details`}
                      >
                        <SafeImage
                          src={c.img || ""}
                          alt={`${c.name} certification`}
                          width={c.key === "nfpa" ? 72 : 52}
                          height={c.key === "nfpa" ? 72 : 52}
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