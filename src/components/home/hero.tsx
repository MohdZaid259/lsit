import Image from "next/image";
import Link from "next/link";
import MetallicButton from "@/components/common/metallic-button";
import Reveal from "@/components/common/reveal";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-screen min-h-[520px] w-full">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero/fibreOptions.png"
            alt="Metallic woven fabric background"
            fill
            className="object-cover scale-100 animate-[pan_18s_ease-in-out_infinite]"
            priority
          />
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 ml-0 md:ml-24 h-full flex items-center">
          <div className="max-w-3xl -mt-16">
            <Reveal>
              <h1
                className="text-3xl text-shadow-black text-shadow-2xs md:text-5xl lg:text-6xl font-bold md:font-extrabold tracking-wide text-white"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Technology‑Integrated Fabrics for Demanding Environments
              </h1>
            </Reveal>
            <Reveal delay={0.05}>
              <p
                className="mt-4 text-shadow-black text-shadow-2xs text-lg md:text-xl text-gray-200 tracking-wide"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}
              >
                Premium, engineered textiles with embedded electronics, sensing,
                and performance coatings—manufactured at scale.
              </p>
            </Reveal>
            
            <Reveal delay={0.1}>
                <MetallicButton className="py-2 mt-4 border">
                  <Link className="tracking-wider" href="#technologies">Explore Technologies</Link>
                </MetallicButton>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </section>
  );
}
