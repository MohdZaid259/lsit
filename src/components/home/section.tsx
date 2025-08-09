"use client"

<<<<<<< HEAD:src/components/section.tsx
import type React from "react"

import { motion } from "framer-motion"

type Props = {
  id?: string
  eyebrow?: string
  title?: string
  subtitle?: string
  children?: React.ReactNode
  dark?: boolean
  className?: string
}
=======
import type React from "react";
import { motion } from "framer-motion";

type Props = {
  readonly id?: string;
  readonly eyebrow?: string;
  readonly title?: string;
  readonly subtitle?: string;
  readonly children?: React.ReactNode;
  readonly className?: string;
};
>>>>>>> 203a4346942c60a819651c7ed7bc6926ab93f113:src/components/home/section.tsx

export default function Section({
  id = undefined,
  eyebrow = "",
  title = "",
  subtitle = "",
  children,
  className = "",
}: Props) {
  return (
<<<<<<< HEAD:src/components/section.tsx
    <section id={id} className={`${dark ? "bg-slate-950 text-white" : "bg-white"} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 md:pb-16">
=======
    <section id={id} className={`bg-white ${className}`}>
      <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-24">
>>>>>>> 203a4346942c60a819651c7ed7bc6926ab93f113:src/components/home/section.tsx
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto max-w-3xl text-center">
            {eyebrow ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
<<<<<<< HEAD:src/components/section.tsx
                className={`inline-block rounded-full px-3 py-1 text-xs md:text-sm ${dark ? "bg-white/5 text-white/80 border border-white/10" : "bg-slate-100 text-slate-700"}`}
=======
                className="inline-block rounded-full px-3 py-1 text-xs md:text-sm bg-slate-100 text-primary"
>>>>>>> 203a4346942c60a819651c7ed7bc6926ab93f113:src/components/home/section.tsx
              >
                {eyebrow}
              </motion.div>
            ) : null}
            {title ? (
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
<<<<<<< HEAD:src/components/section.tsx
                className={`mt-3 text-2xl md:text-4xl font-bold ${dark ? "text-white" : "text-slate-900"}`}
=======
                className="mt-3 text-2xl md:text-4xl font-bold text-primary"
>>>>>>> 203a4346942c60a819651c7ed7bc6926ab93f113:src/components/home/section.tsx
              >
                {title}
              </motion.h2>
            ) : null}
            {subtitle ? (
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
<<<<<<< HEAD:src/components/section.tsx
                className={`mt-3 text-sm md:text-base ${dark ? "text-white/75" : "text-slate-500"}`}
=======
                className="mt-3 text-sm md:text-base text-muted-foreground"
>>>>>>> 203a4346942c60a819651c7ed7bc6926ab93f113:src/components/home/section.tsx
              >
                {subtitle}
              </motion.p>
            ) : null}
          </div>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}