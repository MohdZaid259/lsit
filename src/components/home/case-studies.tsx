"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Section from "@/components/home/section";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    title: "Metro Fleet Cabin Cooling",
    img: "/images/case-metro.png",
    text: "SunRay Reflective fabrics reduced in-cabin temperatures by up to 8°C in peak summer.",
  },
  {
    title: "Wildland Firefighting Suits",
    img: "/images/case-fire.png",
    text: "Multi-layer FR solution achieved a 35% lower flame spread index than baseline.",
  },
  {
    title: "Hospital Scrubs Hygiene",
    img: "/images/case-med.png",
    text: "Antibacterial treatment maintained 99.9% efficacy after 50 wash cycles.",
  },
];

export default function CaseStudies() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const autoplayRef = useRef<number | null>(null);
  const interval = 5000;

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setProgressKey((k) => k + 1);
    };
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const start = () => {
      stop();
      autoplayRef.current = window.setInterval(() => {
        emblaApi.scrollNext();
      }, interval);
    };
    const stop = () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    };
    start();
    return stop;
  }, [emblaApi]);

  return (
    <Section
      id="case-studies"
      eyebrow="Case Studies"
      title="Real-world deployments"
      subtitle="Validated performance across environments and industries."
    >
      <div className="relative">
        <div className="overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="flex">
            {slides.map((s) => (
              <div key={s.title} className="min-w-0 flex-[0_0_100%]">
                <div className="grid lg:grid-cols-2 gap-6 items-stretch">
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px] rounded-xl overflow-hidden">
                    <Image
                      src={s.img || "/placeholder.svg"}
                      alt={s.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
                  </div>
                  <div className="p-6 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-slate-600">{s.text}</p>
                    <div className="mt-6">
                      <div className="h-1 w-full rounded bg-slate-200/80 overflow-hidden">
                        <motion.div
                          key={progressKey}
                          className="h-full rounded bg-[linear-gradient(135deg,#0b2f57,#1f4f86)]"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: interval / 1000,
                            ease: "linear",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -top-14 right-0 flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-6 flex gap-2 justify-center">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                selectedIndex === i ? "w-8 bg-slate-800" : "w-3 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
