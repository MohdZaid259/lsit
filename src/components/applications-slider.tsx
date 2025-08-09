"use client";

import Section from "./section";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Industrial & Automotive Shades",
    img: "/images/app-automotive.png",
    hint: "Heat-blocking weave highlight",
  },
  {
    title: "Military & Tactical Gear",
    img: "/images/app-military.png",
    hint: "Fire-resistant aramid blend",
  },
  {
    title: "Medical Uniforms",
    img: "/images/app-medical.png",
    hint: "Antibacterial finish",
  },
  {
    title: "Tent & Outdoor Solutions",
    img: "/images/app-outdoor.png",
    hint: "All-weather membrane",
  },
];

export default function ApplicationsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <Section
      id="applications"
      eyebrow="Applications"
      title="Built for critical use cases"
      subtitle="From mobility to defense, healthcare to shelter—reliable performance where it matters."
    >
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {slides.map((s, i) => (
              <div
                key={s.title}
                className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_55%] lg:flex-[0_0_40%]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative rounded-xl overflow-hidden group"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={s.img || "/placeholder.svg"}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 40vw, (min-width: 640px) 55vw, 85vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="text-white font-semibold">{s.title}</div>
                      <div className="text-white/80 text-sm">{s.hint}</div>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background:
                        "linear-gradient(115deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 70%)",
                      backgroundSize: "200% 100%",
                      animation: "sheen 1.2s ease-in-out",
                    }}
                  />
                  <style jsx>{`
                    @keyframes sheen {
                      0% {
                        background-position: -100% 0;
                      }
                      100% {
                        background-position: 200% 0;
                      }
                    }
                  `}</style>
                </motion.div>
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
