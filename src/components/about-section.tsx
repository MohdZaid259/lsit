import Image from "next/image"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { values } from "../../public/aboutData"
const ScrollAnimation = dynamic(() => import('./scroll-animation'));
import company from '../../public/company.webp'

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-[#042d53] text-white">
        <div className="absolute inset-0 bg-[url('/coverImage/aboutCover.jpg')] bg-cover bg-center [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_100%)] [mask-repeat:no-repeat] [mask-size:cover]" />
        <div className="container relative px-4 py-20  sm:px-6 lg:px-16">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">About Our Company</h1>
            <p className="mb-8 text-lg text-white/80 sm:text-xl">
              Your trusted technical service provider in Dubai since 2010, delivering excellence in every project.
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
                <h2 className="mb-6 text-3xl font-bold text-navy-blue sm:text-4xl">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2010, our company has grown from a small civil contracting business to a comprehensive
                    technical service provider in Dubai and across the UAE. What started as a vision to deliver quality
                    services has evolved into a trusted name in the industry.
                  </p>
                  <p>
                    Over the years, we've expanded our expertise to include heavy equipment lifting and transportation,
                    birds and pest control, marble supply, and all kinds of civil and carpentry work. This
                    diversification allows us to be a one-stop solution for all technical service needs.
                  </p>
                  <p>
                    Today, we're proud to have served hundreds of clients across residential, commercial, and industrial
                    sectors, building a reputation for reliability, quality, and customer satisfaction.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white">Our Services</Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
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
                <h3 className="mb-4 text-2xl font-bold text-navy-blue">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading technical service provider in the UAE, recognized for excellence, innovation, and
                  customer satisfaction. We aim to set new standards in the industry by delivering comprehensive
                  solutions that exceed client expectations and contribute to the development of Dubai's infrastructure.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-right">
              <div className="rounded-xl bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-navy-blue">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver high-quality technical services that meet the diverse needs of our clients through
                  professional expertise, innovative solutions, and unwavering commitment to excellence. We strive to
                  build lasting relationships with our clients by providing reliable, safe, and timely services that add
                  value to their projects.
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
              <h2 className="mb-4 text-3xl font-bold text-navy-blue sm:text-4xl">Our Values</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                The core principles that guide our operations and relationships with clients, partners, and team
                members.
              </p>
            </ScrollAnimation>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <ScrollAnimation
                key={index}
                animation="scale-in"
                delay={
                  `delay-${((index % 6) + 1) * 100 > 500 ? 500 : ((index % 6) + 1) * 100}` as
                    | "delay-100"
                    | "delay-200"
                    | "delay-300"
                    | "delay-400"
                    | "delay-500"
                }
              >
                <div className="rounded-xl border border-primary/40 p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                    <value.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-navy-blue">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}