import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sun, Shield, Snowflake } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function TechnologyPage() {
  return (
    <>
      <section className="relative bg-primary text-white">
        <div className="absolute inset-0 bg-[url('/coverImage/techCover.png')] bg-cover bg-bottom  [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_100%)] [mask-repeat:no-repeat] [mask-size:cover]" />
        <div className="container relative px-4 py-16 pb-12 sm:px-6 lg:px-16">
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
      <section className="md:mx-16 mx-2 py-8 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollAnimation animation="fade-in-left">
                <div>
                  <h2 className="mb-6 text-3xl font-bold text-primary">
                    Advanced Textile Technologies for Extreme Conditions
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      From scorching heat to freezing cold — SUNTECH, PRIMERRA, and X15 TECH deliver unmatched thermal performance, protection, and durability.
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
      </section>

      {/* Technology Cards */}
      <section className="py-8 md:py-16 px-4 md:mx-16 mx-2 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Technologies</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Three breakthrough textile technologies engineered for superior performance in the most demanding
              environments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SUNTECH Card */}
            <Card className="shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <img
                    src="/technology/pages/suntech.png"
                    alt="SUNTECH passive cooling technology"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-between mb-0">
                  <Sun className="h-8 w-8 text-orange-500" />
                  <Badge variant="secondary">Passive Cooling</Badge>
                </div>
                <CardTitle className="text-2xl">SUNTECH</CardTitle>
                <CardDescription>
                  Revolutionary passive cooling technology with up to 20°C surface temperature reduction
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Reflects heat as infrared radiation
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Works with any yarn composition
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Water-repellent & breathable
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Antibacterial & flame retardant
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* PRIMERRA Card */}
            <Card className="shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <img
                    src="/technology/pages/insulation.png"
                    alt="PRIMERRA advanced insulation technology"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-between mb-0">
                  <Shield className="h-8 w-8 text-green-500" />
                  <Badge variant="secondary">Adjustable Insulation</Badge>
                </div>
                <CardTitle className="text-2xl">PRIMERRA</CardTitle>
                <CardDescription>SMC nano-tube filling with adjustable ultrathin insulation technology</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 ">
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Silver dot antibacterial treatment
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Ultrasonically welded seams
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Gram weights: 150-450g
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Breathable & washable
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* X15 TECH Card */}
            <Card className="shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <img
                    src="/technology/pages/graphene_2.png"
                    alt="X15 TECH advanced materials technology"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-between mb-0">
                  <Snowflake className="h-8 w-8 text-purple-500" />
                  <Badge variant="secondary">Advanced Materials</Badge>
                </div>
                <CardTitle className="text-2xl">X15 TECH</CardTitle>
                <CardDescription>
                  Graphene-enhanced polymer films for urban heat mitigation and sustainability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Multilayer graphene/polymer options
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Urban heat island mitigation
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Passive operation, no energy required
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Sustainable & lightweight
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section>
        <img src="/technology/pages/banner.jpg" className="invert my-6" alt="banner" />
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
  )
}
