"use client";

import Section from "./section";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Mail } from "lucide-react";

type Product = {
  id: string;
  name: string;
  desc: string;
  img: string;
  gallery: string[];
};

const products: Product[] = [
  {
    id: "srx-200",
    name: "SRX-200 SunRay Shade",
    desc: "High-IR reflective shade fabric for automotive and industrial use.",
    img: "/images/tech-sunray.png",
    gallery: ["/images/tech-sunray.png", "/images/hero-fabric.png"],
  },
  {
    id: "fr-armor",
    name: "FR-Armor",
    desc: "Inherently flame-resistant fabric for tactical and industrial PPE.",
    img: "/images/tech-fire.png",
    gallery: ["/images/tech-fire.png", "/images/case-fire.png"],
  },
  {
    id: "ab-shield",
    name: "AB-Shield",
    desc: "Antibacterial fabric ideal for medical uniforms and linens.",
    img: "/images/tech-antibacterial.png",
    gallery: ["/images/tech-antibacterial.png", "/images/case-med.png"],
  },
  {
    id: "aw-pro",
    name: "AW-Pro",
    desc: "All-weather membrane fabric for tents and outerwear.",
    img: "/images/tech-allweather.png",
    gallery: ["/images/tech-allweather.png", "/images/app-outdoor.png"],
  },
];

export default function ProductCatalog() {
  return (
    <Section
      id="catalog"
      eyebrow="Product Catalog"
      title="Explore our portfolio"
      subtitle="Quick-view details and reach out for specifications, samples, and quotes."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </Section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="group text-left rounded-xl border overflow-hidden focus:outline-none focus:ring-2 focus:ring-slate-400">
          <div className="relative aspect-[4/3]">
            <Image
              src={product.img || "/placeholder.svg"}
              alt={product.name}
              fill
              sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.16) 50%, rgba(255,255,255,0) 60%)",
                backgroundSize: "300% 100%",
              }}
            />
          </div>
          <div className="p-4">
            <div className="font-semibold text-slate-900">{product.name}</div>
            <div className="text-sm text-slate-600 mt-1">{product.desc}</div>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-6">
          <div className="grid grid-cols-2 gap-3">
            {product.gallery.map((g, i) => (
              <div
                key={g + i}
                className="relative aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src={g || "/placeholder.svg"}
                  alt={`${product.name} image ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Request technical datasheets, compliance certificates, and
              tailored recommendations for your application.
            </p>
            <Button onClick={() => setOpen(false)}>
              <Mail className="h-4 w-4 mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
