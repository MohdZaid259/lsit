"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function NewsletterSignup({
  className = "",
}: {
  className?: string
}) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    setLoading(true)
    // simulate request
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setEmail("")
  }

  return (
    <section className={cn("w-full", "bg-[#072243] text-white", "relative overflow-hidden", className)}>
      {/* Subtle decorative pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url('/coverImage/newsCover.png')",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Stay Ahead with <span className="font-bold ml-1 text-teal-500 tracking-wider">LS4IT</span> Innovations</h2>
            <p className="mt-3 max-w-prose text-sm text-white/70 md:text-base">
              {"Get the latest updates on our advanced textile technologies, industry insights, exclusive product launches."}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="w-full">
            <label htmlFor="email" className="sr-only">
              {"Your email address"}
            </label>
            <div className="flex w-full items-stretch overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/10 focus-within:ring-black/20">
              <Input
                id="email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={cn(
                  "h-12 w-0 flex-1 rounded-none rounded-l-full border-0 bg-transparent px-5 text-[15px] text-neutral-800 placeholder:text-neutral-400 focus-visible:ring-0",
                )}
              />
              <Button
                type="submit"
                disabled={loading}
                className={cn(
                  "rounded-none rounded-r-lg h-12 px-6 text-sm font-semibold",
                  "bg-teal-600 text-white hover:bg-teal-500",
                )}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </Button>
            </div>
            <p className="mt-2  float-right text-xs text-white/60">{"We respect your privacy. Unsubscribe anytime."}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
