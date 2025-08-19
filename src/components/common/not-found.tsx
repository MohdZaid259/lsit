"use client";

import { Home, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundContent({
  title,
  subtitle,
  description,
  homeLabel,
  contactLabel,
}: {
  title: string;
  subtitle: string;
  description: string;
  homeLabel: string;
  contactLabel: string;
}) {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="absolute inset-0 bg-[url('/fabric-pattern.png')] opacity-5 pointer-events-none" />

      <div className="relative z-10 max-w-lg text-center">
        <h1 className="text-7xl font-extrabold text-slate-800">404</h1>
        <h2 className="mt-2 text-2xl font-semibold text-slate-700">{title}</h2>
        <p className="mt-4 text-slate-600 leading-relaxed">{description}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/">
            <Button className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              {homeLabel}
            </Button>
          </Link>
          <Link href="/#contact">
            <Button variant="outline" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {contactLabel}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
