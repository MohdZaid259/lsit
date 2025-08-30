import { Sun, Shield, Snowflake, Droplets, Wind, Flame, Thermometer, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export default function TechCards() {
  const t = useTranslations("Technology.Cards");

  const icons = [
    <Sun className="h-8 w-8 text-orange-500" />,
    <Shield className="h-8 w-8 text-green-500" />,
    <Snowflake className="h-8 w-8 text-purple-500" />,
    <Droplets className="h-8 w-8 text-sky-500" />,
    <Wind className="h-8 w-8 text-cyan-500" />,
    <Flame className="h-8 w-8 text-red-500" />,
    <Thermometer className="h-8 w-8 text-amber-500" />,
    <ShieldCheck className="h-8 w-8 text-emerald-500" />,
  ];

  const bulletColors = [
    "bg-blue-500", "bg-green-500", "bg-purple-500", "bg-sky-500",
    "bg-cyan-500", "bg-red-500", "bg-amber-500", "bg-emerald-500"
  ];

  const images = [
    "/technology/pages/suntech.png",
    "/technology/pages/insulation.png",
    "/technology/pages/graphene_2.png",
    "/technology/pages/waterproof.jpg",
    "/technology/pages/breathable.jpg",
    "/technology/pages/fireproof.jpg",
    "/technology/pages/insulation.jpg",
    "/technology/pages/antibacterial.jpg"
  ];

  const technologies = t.raw("technologies");

  return (
    <section className="py-8 md:py-16 px-4 md:mx-16 mx-2 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">{t("title")}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-2">
          {technologies.map((tech:any, index:any) => (
            <Card key={index} className="shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <img
                    src={images[index]}
                    alt={tech.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-between mb-0">
                  {icons[index]}
                  <Badge variant="secondary">{tech.badge}</Badge>
                </div>
                <CardTitle className="text-2xl">{tech.title}</CardTitle>
                <CardDescription>{tech.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tech.bullets.map((point:any, i:any) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className={`w-2 h-2 ${bulletColors[index]} rounded-full mr-3`}></div>
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
  )
}