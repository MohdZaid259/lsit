"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { SafeImage } from "../ui/safe-image";
import Section from "@/components/common/section";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";

export default function CaseStudies() {
  const t = useTranslations("Home.CaseStudies");

  const slides = [
    {
      title: t("slide1.title"),
      image: "/blog/future.jpg",
      excerpt: t("slide1.excerpt"),
    },
    {
      title: t("slide2.title"),
      image: "/blog/quality.avif",
      excerpt: t("slide2.excerpt"),
    },
    {
      title: t("slide3.title"),
      image: "/blog/choose.jpg",
      excerpt: t("slide3.excerpt"),
    },
    {
      title: t("slide4.title"),
      image: "/blog/certificate.jpg",
      excerpt: t("slide4.excerpt"),
    },
    {
      title: t("slide5.title"),
      image: "/blog/supplier.jpg",
      excerpt: t("slide5.excerpt"),
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const autoplayRef = useRef<number | null>(null);
  const interval = 30000;

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
      eyebrow={t("eyebrow")}
      title={t("title")}
      subtitle={t("subtitle")}
      className="md:mx-16 mx-0"
    >
      <div className="relative">
        <div className="overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="flex">
            {slides.map((s) => (
              <div key={s.title} className="min-w-0 flex-[0_0_100%]">
                <div className="grid lg:grid-cols-2 gap-6 items-stretch">
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px] rounded-xl overflow-hidden">
                    <SafeImage
                      src={s.image || ""}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
                  </div>
                  <div className="p-6 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-slate-600">{s.excerpt}</p>
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
        <div className="absolute hidden md:flex -top-14 right-0 items-center gap-2">
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