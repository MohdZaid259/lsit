"use client";

import { Mail, MapPin, Phone } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Our Services", href: "#our-services" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Heat Resistant", href: "/products/heat-resistant" },
      { label: "Waterproof & Breathable", href: "/products/waterproof" },
      { label: "Cut & Abrasion Resistant", href: "/products/protective" },
      { label: "Tent Fabrics", href: "/products/tents" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Fabric Technologies", href: "#technologies" },
      { label: "Product Catalog", href: "#catalog" },
      { label: "Certifications", href: "#certifications" },
      { label: "Why Choose Us", href: "#why-us" },
    ],
  },
];

const contactInfo = [
  {
    icon: Mail,
    content: (
      <a
        href="mailto:hello@suntechfabrics.com"
        className="hover:text-slate-900"
      >
        info@lsit.com
      </a>
    ),
  },
  {
    icon: Phone,
    content: (
      <a href="tel:+97152666997" className="hover:text-slate-900">
        +971 52 666997
      </a>
    ),
  },
  {
    icon: MapPin,
    content: (
      <span>
        1200 Industrials, Suite 300
        <br />
        Ajman, UAE
      </span>
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer
      className="mt-16 mx-0 md:mx-16 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-t"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link
              href="/"
              className="inline-flex -ml-6 -mt-12 scale-150 absolute items-center gap-3"
            >
              <Logo />
            </Link>
            <p className="mt-20 text-sm text-primary">
              Engineering textiles for heat control, protection, and all-weather
              performance.
            </p>
          </div>

          {/* Links */}
          <nav className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {footerLinks.map(({ title, links }) => (
              <div key={title}>
                <div className="text-xs uppercase tracking-wide text-primary">
                  {title}
                </div>
                <ul className="mt-3 space-y-2 text-sm">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-slate-700 hover:underline hover:text-slate-900"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div>
              <div className="text-xs uppercase text-primary tracking-wide ">
                Contact
              </div>
              <ul className="mt-3 -mx-6 space-y-2 text-sm">
                {contactInfo.map(({ icon: Icon, content }, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-slate-700"
                  >
                    <Icon className="h-4 w-4 text-slate-500 mt-0.5" />
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t pt-6 flex flex-col gap-3 sm:flex-row sm:items-center text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} SunTech Fabrics. All rights reserved.
          </div>
          <div className="sm:ml-auto flex items-center gap-4">
            {["Privacy", "Terms", "Sitemap"].map((item) => (
              <Link
                key={item}
                href="#"
                className="hover:text-slate-800 hover:underline"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
    </footer>
  );
}
