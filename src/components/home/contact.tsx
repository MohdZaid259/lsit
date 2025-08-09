"use client"

<<<<<<< HEAD:src/components/contact-section.tsx
import type React from "react"
import Section from "@/components/section"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function ContactSection() {
  const [loading, setLoading] = useState(false)
=======
import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type React from "react";
import Section from "./section";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
>>>>>>> 203a4346942c60a819651c7ed7bc6926ab93f113:src/components/home/contact.tsx

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast("Message sent")
    }, 900)
  }

  return (
    <Section
      id="contact"
      title="Let's discuss"
      subtitle="Share your requirements—our engineering team will recommend the right construction."
      className="mx-16"
    >
      <div className="grid lg:grid-cols-[1fr_420px] gap-8">
        <form onSubmit={onSubmit} className="grid gap-0 p-6 pb-0 rounded-xl border border-gray-500 bg-white">
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
<<<<<<< HEAD:src/components/contact-section.tsx
              <label className="block text-sm text-slate-600 mb-1">Company</label>
              <Input required placeholder="Acme Corp" />
=======
              <label
                htmlFor="company"
                className="block text-sm text-slate-600 mb-1"
              >
                Company
              </label>
              <Input id="company" required placeholder="Acme Corp" />
>>>>>>> 203a4346942c60a819651c7ed7bc6926ab93f113:src/components/home/contact.tsx
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
<<<<<<< HEAD:src/components/contact-section.tsx
              <label className="block text-sm text-slate-600 mb-1">Phone</label>
              <Input placeholder="+971 38 123 4567" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Message</label>
            <Textarea required placeholder="Tell us about your use case and performance targets..." />
=======
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
>>>>>>> 203a4346942c60a819651c7ed7bc6926ab93f113:src/components/home/contact.tsx
          </div>
          <div className="flex items-center justify-end py-4 md:py-0">
            <Button disabled={loading}>{loading ? "Sending..." : "Send message"}</Button>
          </div>
        </form>
        <aside className="space-y-4">
          <div className="p-4 rounded-xl border border-gray-500">
            <div className="flex items-center gap-1 text-slate-800">
              <Mail className="h-4 w-4 text-slate-500" />
              <a href="mailto:info@lsit.com" className="tracking-wider hover:underline">
                info@lsit.com
              </a>
            </div>
            <div className="mt-3 flex items-center gap-1 text-slate-800">
              <Phone className="h-4 w-4 text-slate-500" />
              <a href="tel:+971 52 666 9974" className="tracking-wide hover:underline">
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
<<<<<<< HEAD:src/components/contact-section.tsx
              title="Lsit Office Map"
              src="https://www.google.com/maps?q=Dubai,UAE&output=embed"
              className="w-full h-[260px]"
=======
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.3130626453067!2d15.936918676161392!3d45.80498827108157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6c8adfb3dd3%3A0x10eb55a8e2c1a240!2sStubi%C4%8Dka%20ul.%2043%2C%2010000%2C%20Zagreb%2C%20Croatia!5e0!3m2!1sen!2sus!4v1754752975945!5m2!1sen!2sus"
              width="600"
              height="200"
>>>>>>> 203a4346942c60a819651c7ed7bc6926ab93f113:src/components/home/contact.tsx
              loading="lazy"
            ></iframe>
          </div>
        </aside>
      </div>
    </Section>
  )
}
