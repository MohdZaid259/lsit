"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type React from "react";
import Section from "../common/section";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  function handleSubmit(e: any) {
    e.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement)?.value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const phone = (document.getElementById("phone") as HTMLInputElement)?.value;
    const company = (document.getElementById("company") as HTMLSelectElement)
      ?.value;
    const message = (document.getElementById("message") as HTMLTextAreaElement)
      ?.value;

    const subject = encodeURIComponent(
      "New Technical Support Request from " + name
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\nMessage:\n${message}\n\n--\n`
    );

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=razvizaid259@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailURL, "_blank");
  }

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Let's discuss"
      subtitle="Share your requirements—our engineering team will recommend the right construction."
      className="md:mx-16 mx-0 bg-transparent md:pb-16 pb-0"
    >
      <div className="grid lg:grid-cols-[1fr_420px] gap-8">
        <form className="grid gap-0 p-6 pb-0 rounded-xl border border-gray-500 bg-white">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm text-slate-600 mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <Input id="name" required placeholder="Jane Smith" />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm text-slate-600 mb-1"
              >
                Company
              </label>
              <Input id="company" required placeholder="Acme Corp" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-slate-600 mb-1"
              >
                Email
              </label>
              <Input
                id="email"
                required
                type="email"
                placeholder="jane@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm text-slate-600 mb-1"
              >
                Phone
              </label>
              <Input id="phone" placeholder="+1 555 123 4567" />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm text-slate-600 mb-1"
            >
              Message
            </label>
            <Textarea
              id="message"
              required
              placeholder="Tell us about your use case and performance targets..."
            />
          </div>
          <div className="flex items-center justify-end py-4 md:py-0">
            <Button onClick={handleSubmit}>Send message</Button>
          </div>
        </form>
        <aside className="space-y-4">
          <div className="p-4 rounded-xl border border-gray-500">
            <div className="flex items-center gap-1 text-slate-800">
              <Mail className="h-4 w-4 text-slate-500" />
              <a
                href="mailto:info@lsit.com"
                className="tracking-wider hover:underline"
              >
                info@lsit.com
              </a>
            </div>
            <div className="mt-3 flex items-center gap-1 text-slate-800">
              <Phone className="h-4 w-4 text-slate-500" />
              <a
                href="tel:+971 52 666 9974"
                className="tracking-wide hover:underline"
              >
                +971 52 666 997
              </a>
            </div>
            <div className="mt-3 flex items-start gap-1 text-slate-800">
              <MapPin className="h-4 w-4 text-slate-500 mt-0.5" />
              <div className="tracking-wider">
                Dubai, UAE
                <br />
                Dubai, UAE
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-500">
            <iframe
              title="Lsit Office Map"
              src="https://www.google.com/maps?q=Dubai,UAE&output=embed"
              className="w-full h-[260px]"
              loading="lazy"
            ></iframe>
          </div>
        </aside>
      </div>
    </Section>
  );
}
