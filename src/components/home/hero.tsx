import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import MetallicButton from "@/components/common/metallic-button";
import Reveal from "@/components/common/reveal";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[72vh] min-h-[520px] w-full">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero/fabricOptions.jpg"
            alt="Metallic woven fabric background"
            fill
            className="object-cover scale-105 animate-[pan_18s_ease-in-out_infinite]"
            priority
          />
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <Reveal>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Technology‑Integrated Fabrics for Demanding Environments
              </h1>
            </Reveal>
            <Reveal delay={0.05}>
              <p
                className="mt-4 text-lg md:text-xl text-gray-200"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
              >
                Premium, engineered textiles with embedded electronics, sensing,
                and performance coatings—manufactured at scale.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <MetallicButton>
                  <Link href="#technologies">Explore Technologies</Link>
                </MetallicButton>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white bg-transparent shadow-sm transition-colors hover:text-white"
                >
                  <Link href="#contact">Speak to an Engineer</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </section>
  );
}
