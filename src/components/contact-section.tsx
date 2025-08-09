"use client";

import type React from "react";

import Section from "./section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent", {
        description: "We’ll get back to you within 1-2 business days.",
      });
    }, 900);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s discuss your application"
      subtitle="Share your requirements—our engineering team will recommend the right construction."
    >
      <div className="grid lg:grid-cols-[1fr_420px] gap-8">
        <form
          onSubmit={onSubmit}
          className="grid gap-4 p-6 rounded-xl border bg-white"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Name</label>
              <Input required placeholder="Jane Smith" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">
                Company
              </label>
              <Input required placeholder="Acme Corp" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Email</label>
              <Input required type="email" placeholder="jane@company.com" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Phone</label>
              <Input placeholder="+1 555 123 4567" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Message</label>
            <Textarea
              required
              placeholder="Tell us about your use case and performance targets..."
            />
          </div>
          <div className="flex items-center justify-end">
            <Button disabled={loading}>
              {loading ? "Sending..." : "Send message"}
            </Button>
          </div>
        </form>
        <aside className="space-y-4">
          <div className="p-6 rounded-xl border">
            <div className="flex items-center gap-2 text-slate-800">
              <Mail className="h-4 w-4 text-slate-500" />
              <a
                href="mailto:hello@suntechfabrics.com"
                className="hover:underline"
              >
                hello@suntechfabrics.com
              </a>
            </div>
            <div className="mt-3 flex items-center gap-2 text-slate-800">
              <Phone className="h-4 w-4 text-slate-500" />
              <a href="tel:+15551234567" className="hover:underline">
                +1 (555) 123-4567
              </a>
            </div>
            <div className="mt-3 flex items-start gap-2 text-slate-800">
              <MapPin className="h-4 w-4 text-slate-500 mt-0.5" />
              <div>
                1200 Industrial Way, Suite 300
                <br />
                Austin, TX 73301
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border">
            <iframe
              title="SunTech Fabrics Office Map"
              src="https://www.google.com/maps?q=Austin,TX&output=embed"
              className="w-full h-[260px]"
              loading="lazy"
            />
          </div>
        </aside>
      </div>
    </Section>
  );
}
