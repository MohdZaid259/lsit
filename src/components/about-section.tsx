import Image from "next/image"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { values } from "../../public/aboutData"
const ScrollAnimation = dynamic(() => import('./scroll-animation'));
import company from '../../public/company.webp'
import NewsletterSignup from './newsletter'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white">
        <div className="absolute inset-0 bg-[url('/coverImage/aboutCover.jpg')] bg-cover bg-center [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_100%)] [mask-repeat:no-repeat] [mask-size:cover]" />
        <div className="container relative px-4 py-20  sm:px-6 lg:px-16">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              About Our Company
            </h1>
            <p className="mb-8 text-lg text-white/80 sm:text-xl">
              Engineering fabrics that protect, perform, and endure — no matter the environment
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 mx-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollAnimation animation="fade-in-left">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-navy-blue sm:text-4xl">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    LS4IT (Lateral 4 System for Innovation Technology) is a pioneering technical textile manufacturer headquartered in Ajman, UAE. We design and produce cutting-edge fabrics engineered for extreme performance, capable of withstanding the harshest climates and most demanding applications.
                  </p>
                  <p>
                    Our expertise lies in merging material innovation with precision manufacturing to create fabrics that excel in defense, industrial, and outdoor environments. Whether it's the relentless heat of desert terrain, the constant exposure of marine settings, LS4IT fabrics are built to endure, protect, and perform.
                  </p>
                  <p>
                    We don’t just manufacture textiles — we deliver solutions that enhance safety, sustainability, and operational efficiency for industries worldwide.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Our Services
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-right">
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src={company.src}
                  alt="Company History"
                  fill
                  priority={false}
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-primary/10 py-16 md:py-24">
        <div className=" mx-16 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollAnimation animation="fade-in-left">
              <div className="rounded-xl bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-navy-blue">
                  Our Vision
                </h3>
                <p className="text-muted-foreground">
                  Our vision is to be recognized globally as the benchmark for technical textile innovation. A company where science, craftsmanship, and responsibility come together to create materials that redefine industry standards. We aspire to not only supply fabrics, but to inspire progress across defense, industrial, and outdoor sectors.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-right">
              <div className="rounded-xl bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-navy-blue">
                  Our Mission
                </h3>
                <p className="text-muted-foreground">
                  Our mission is to push the boundaries of textile technology, delivering fabrics that empower our clients to operate with confidence in any environment available. We strive to create products that merge high performance with environmental responsibility, ensuring that strength never comes at the cost of sustainability.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 mx-16 md:py-24 md:pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <ScrollAnimation animation="fade-in-up">
              <h2 className="mb-4 text-3xl font-bold text-navy-blue sm:text-4xl">Fabric Technologies</h2>
              <p className="mx-auto max-w-3xl text-muted-foreground">
                At LS4IT, innovation begins at the fiber level. Instead of applying performance features as afterthoughts, we integrate technology directly into the fabric structure, ensuring durability, consistency, and maximum efficiency in real-world use.
              </p>
            </ScrollAnimation>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <ScrollAnimation
                key={index}
                animation="scale-in"
                delay={
                  `delay-${
                    ((index % 6) + 1) * 100 > 500
                      ? 500
                      : ((index % 6) + 1) * 100
                  }` as
                    | "delay-100"
                    | "delay-200"
                    | "delay-300"
                    | "delay-400"
                    | "delay-500"
                }
              >
                <div className="rounded-xl border border-primary/40 p-6 relative">
                    <img src={value.icon.src} className="w-10 absolute p-[1px] right-3 top-3"/>
                  <h3 className="mb-2 text-xl font-semibold text-navy-blue">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      <section className="-mb-16 mt-20">
        <NewsletterSignup/>
      </section>
    </>
  )
}
