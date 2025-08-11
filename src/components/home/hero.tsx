import { Button } from "@/components/ui/button";
import Link from "next/link";
import MetallicButton from "@/components/common/metallic-button";
import Reveal from "@/components/common/reveal";
import { SafeImage } from "../ui/safe-image";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-screen min-h-[520px] w-full">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <SafeImage
            src="/hero/fibreOptions.png"
            alt="Metallic woven fabric background"
            fill
            sizes="100vw"
            className="object-cover scale-100 animate-[pan_18s_ease-in-out_infinite]"
            priority
          />
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/50 to-black" />
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
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <MetallicButton>
                  <Link href="/#technologies">Explore Technologies</Link>
                </MetallicButton>
                <Button variant="outline" className="">
                  <Link href="/#contact">Speak to an Engineer</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
