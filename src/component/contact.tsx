"use client"

import type React from "react"
import Section from "@/component/section"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function ContactSection() {
  const [loading, setLoading] = useState(false)

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
      eyebrow="Contact"
      title="Let's discuss"
      subtitle="Share your requirements—our engineering team will recommend the right construction."
    >
      <div className="grid lg:grid-cols-[1fr_420px] gap-8">
        <form onSubmit={onSubmit} className="grid gap-0 p-6 pb-0 rounded-xl border border-gray-500 bg-white">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Name</label>
              <Input required placeholder="Jane Smith" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Company</label>
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
              <Input placeholder="+971 38 123 4567" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Message</label>
            <Textarea required placeholder="Tell us about your use case and performance targets..." />
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
              title="Lsit Office Map"
              src="https://www.google.com/maps?q=Dubai,UAE&output=embed"
              className="w-full h-[260px]"
              loading="lazy"
            />
          </div>
        </aside>
      </div>
    </Section>
  )
}
