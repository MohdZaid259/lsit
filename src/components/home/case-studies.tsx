"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { SafeImage } from "../ui/safe-image";
import Section from "@/components/common/section";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    title: "The Future Of Industrial Fabrics",
    image: "/blog/future.jpg",
    excerpt: "Industrial fabrics are no longer just about strength and durability. They now incorporate innovations such as sun-ray reflective coatings to keep surfaces cooler, antibacterial textiles that enhance hygiene in high-contact areas, and advanced weaves designed for extreme environments. LS4IT leads this transformation by combining cutting-edge technology with industry expertise, shaping the future of industrial applications.",
  },
  {
    title: "7 Reasons To Choose LS4IT Fabrics",
    image: "/blog/quality.avif",
    excerpt: "From exceptional durability that withstands harsh conditions to superior performance in demanding industries, LS4IT fabrics stand out for multiple reasons. These include resistance to wear and tear, innovative material technology, consistent quality assurance, eco-friendly production processes, and global supply capabilities. Choosing LS4IT means choosing reliability, performance, and long-term value.",
  },
  {
    title: "Applications of High-Performance Fabrics",
    image: "/blog/choose.jpg",
    excerpt: "High-performance fabrics are at the heart of innovation across multiple sectors. In automotive, they enhance safety and comfort; in defense, they provide lightweight yet durable protection; in architecture, they offer weather resistance with aesthetic appeal. Their unique material properties allow them to adapt to extreme conditions, making them a preferred choice for mission-critical projects.",
  },
  {
    title: "Why Certification Matters in Industrial Fabrics?",
    image: "/blog/certificate.jpg",
    excerpt: "When it comes to industrial fabrics, certifications like ISO and CE are more than just paperwork — they are proof of quality, safety, and global compliance. ISO standards ensure manufacturing consistency, while CE marking signifies conformity with European regulations. For industries where failure isn’t an option, certification provides the assurance that materials meet the highest benchmarks.",
  },
  {
    title: "Choosing The Right Industrial Fabric Supplier?",
    image: "/blog/supplier.jpg",
    excerpt: "Selecting the right supplier can determine the success or failure of your project. Beyond price, factors such as technical expertise, product range, manufacturing standards, delivery reliability, and after-sales support play a critical role. A trusted supplier not only meets specifications but also offers guidance to select the most suitable fabric for your unique requirements.",
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
