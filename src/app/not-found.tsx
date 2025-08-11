import { Home, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[url('/fabric-pattern.png')] opacity-5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-lg text-center">
        <h1 className="text-7xl font-extrabold text-slate-800">404</h1>
        <h2 className="mt-2 text-2xl font-semibold text-slate-700">
          Page Not Found
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          We couldn’t find the page you’re looking for. LS4IT is all about
          innovation in fabrics—let’s get you back to where the magic happens.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/">
            <Button className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <Link href="/#contact">
            <Button variant="outline" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      {/* Decorative bottom text */}
      <div className="absolute bottom-6 text-xs text-slate-400">
        © {new Date().getFullYear()} LS4IT — Fabric Manufacturing with
        Technology
      </div>
    </div>
  );
}
