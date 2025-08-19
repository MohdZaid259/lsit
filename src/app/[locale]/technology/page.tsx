import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sun, Shield, Snowflake, Droplets, Wind, Flame, Thermometer, ShieldCheck } from "lucide-react";
import ScrollAnimation from "@/components/scroll-animation";

export default function TechnologyPage() {
  const technologies = [
    {
      img: "/technology/pages/suntech.png",
      icon: <Sun className="h-8 w-8 text-orange-500" />,
      badge: "Passive Cooling",
      title: "Summer Shield",
      description: "Passive cooling fabric technology delivering up to 20°C surface temperature reduction.",
      bulletColor: "bg-blue-500",
      bullets: [
        "Reflects heat via infrared radiation",
        "Works with any yarn composition",
        "Water-repellent & breathable",
        "Flame retardant"
      ]
    },
    {
      img: "/technology/pages/insulation.png",
      icon: <Shield className="h-8 w-8 text-green-500" />,
      badge: "Adjustable Insulation",
      title: "PRIMERRA",
      description: "SMC nano-tube insulation with customizable warmth and comfort.",
      bulletColor: "bg-green-500",
      bullets: [
        "Antibacterial silver-dot treatment",
        "Ultrasonically welded seams",
        "150–450g weight range",
        "Breathable & washable"
      ]
    },
    {
      img: "/technology/pages/graphene_2.png",
      icon: <Snowflake className="h-8 w-8 text-purple-500" />,
      badge: "Advanced Materials",
      title: "X15 TECH",
      description: "Graphene-enhanced polymers for urban heat control and sustainability.",
      bulletColor: "bg-purple-500",
      bullets: [
        "Multilayer graphene/polymer options",
        "Heat island mitigation",
        "Passive operation, no energy needed",
        "Lightweight & sustainable"
      ]
    },
    {
      img: "/technology/pages/waterproof.jpg",
      icon: <Droplets className="h-8 w-8 text-sky-500" />,
      badge: "Waterproof Protection",
      title: "HydroGuard",
      description: "High-performance membranes designed to block water penetration while keeping fabrics lightweight.",
      bulletColor: "bg-sky-500",
      bullets: [
        "100% waterproof barrier",
        "Maintains flexibility & comfort",
        "Long-lasting in harsh weather"
      ]
    },
    {
      img: "/technology/pages/breathable.jpg",
      icon: <Wind className="h-8 w-8 text-cyan-500" />,
      badge: "Breathable Comfort",
      title: "AeroWeave",
      description: "Engineered for airflow without sacrificing protection.",
      bulletColor: "bg-cyan-500",
      bullets: [
        "Optimized moisture vapor transmission",
        "Quick-dry technology",
        "Ideal for active/outdoor use"
      ]
    },
    {
      img: "/technology/pages/fireproof.jpg",
      icon: <Flame className="h-8 w-8 text-red-500" />,
      badge: "Fireproof Safety",
      title: "FlameShield",
      description: "Heat- and flame-resistant fabrics for extreme protection.",
      bulletColor: "bg-red-500",
      bullets: [
        "Meets NFPA & EN safety standards",
        "Thermal barrier without bulk",
        "Resistant to sparks & flames"
      ]
    },
    {
      img: "/technology/pages/insulation.jpg",
      icon: <Thermometer className="h-8 w-8 text-amber-500" />,
      badge: "Thermal Insulation",
      title: "ThermoCore",
      description: "Advanced fibers for year-round temperature control.",
      bulletColor: "bg-amber-500",
      bullets: [
        "Superior heat retention in cold climates",
        "Lightweight, non-bulky insulation",
        "Breathable in variable conditions"
      ]
    },
    {
      img: "/technology/pages/antibacterial.jpg",
      icon: <ShieldCheck className="h-8 w-8 text-emerald-500" />,
      badge: "Antibacterial Protection",
      title: "BioDefend",
      description: "Textiles infused with long-lasting antibacterial agents.",
      bulletColor: "bg-emerald-500",
      bullets: [
        "Inhibits bacterial growth & odor",
        "Hypoallergenic & gentle on skin",
        "Effective through multiple washes"
      ]
    }
  ];

  return (
    <>      
      <section className="relative bg-primary text-white">
        <div className="absolute inset-0 bg-[url('/coverImage/techCover.png')] bg-cover bg-bottom  [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_100%)] [mask-repeat:no-repeat] [mask-size:cover]" />
        <div className="container relative py-8 md:py-20 sm:px-6 px-4 lg:px-24">
          <div className="max-w-3xl">
            <h1 className="mb-4 md:text-4xl font-bold tracking-tight text-3xl">
              Technology-First Textiles
            </h1>
            <p className="mb-8 text-lg text-white/80 sm:text-xl">
              Advanced textile solutions featuring passive cooling up to -20°C surface reduction, adjustable ultrathin insulation, and military-grade protection for demanding applications.
            </p>
          </div>
        </div>
      </section>
      <section className="md:mx-16 mx-0 py-8 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollAnimation animation="fade-in-left">
                <div>
                  <h2 className="mb-6 text-3xl font-bold text-primary">
                    Advanced Textile Technologies for Extreme Conditions
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      From scorching heat to freezing cold — Summer Shield, PRIMERRA, and X15 TECH deliver unmatched thermal performance, protection, and durability.
                    </p>
                    <p>
                      We engineer fabrics that cool surfaces by up to 20°C, insulate in extreme cold, and resist water, wind, and UV. Trusted by military, medical, and outdoor industries worldwide, our solutions combine innovation, sustainability, and style.
                    </p>
                    <ul className="list-disc pl-5">
                      <li><span className="font-bold">Passive Cooling:</span> Reflects sunlight & releases heat efficiently.</li>
                      <li><span className="font-bold">Ultra-Thin Insulation:</span> Adjustable warmth without bulk.</li>
                      <li><span className="font-bold">All-Weather Protection:</span> Waterproof, windproof, UV-blocking.</li>
                      <li><span className="font-bold">Certified Quality:</span> OEKO-TEX®, SGS, EN standards.</li>
                    </ul>
                  </div>
                </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in-right">
                <div className="mb-8">
                  <img
                    src="/technology/pages/hero.png"
                    alt="Advanced textile technologies showcase"
                    className="mx-auto rounded-lg w-[800px] shadow-lg"
                  />
                </div>
          </ScrollAnimation>
          </div>
          </div>
      </section>

      {/* Technology Cards */}
      <section className="py-8 md:py-16 px-4 md:mx-16 mx-2 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Technologies</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Eight breakthrough textile technologies engineered for superior performance in the most demanding environments.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-2">
            {technologies.map((tech, index) => (
              <Card key={index} className="shadow-xl">
                <CardHeader className="">
                  <div className="mb-4">
                    <img
                      src={tech.img}
                      alt={tech.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-0">
                    {tech.icon}
                    <Badge variant="secondary">{tech.badge}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{tech.title}</CardTitle>
                  <CardDescription>{tech.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tech.bullets.map((point, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <div className={`w-2 h-2 ${tech.bulletColor} rounded-full mr-3`}></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="md:mx-8 mx-2">
        <img src="/technology/pages/banner.jpg" className="invert md:block hidden my-6" alt="banner" />
        <img src="/technology/pages/bannerSm.jpg" className="invert md:hidden block my-6 scale-90" alt="banner" />
      </section>

      {/* Applications Section */}
      <section className="py-8 md:py-16 pb-0 md:pb-0 md:mx-16 mx-2 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Applications</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our technologies serve diverse industries requiring superior thermal management and protection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 ">
            <div className="text-center">
              <img
                src="/technology/pages/tents.png"
                alt="Military and tactical applications"
                className="w-full h-56 object-cover rounded-lg mb-2  md:mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Military & Tactical</h3>
              <p className="text-slate-600 text-sm">Advanced protection for defense applications</p>
            </div>
            <div className="text-center">
              <img
                src="/technology/pages/carShade.webp"
                alt="Event and commercial tents"
                className="w-full h-56 object-[25%_75%] object-cover rounded-lg mb-2  md:mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Car Parking Shades</h3>
              <p className="text-slate-600 text-sm">Protection from sun and heat for vehicles</p>
            </div>
            <div className="text-center">
              <img
                src="/technology/pages/jacket.png"
                alt="Performance apparel and clothing"
                className="w-full h-56 object-cover rounded-lg mb-2  md:mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Performance Apparel</h3>
              <p className="text-slate-600 text-sm">Next-generation clothing technology</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
