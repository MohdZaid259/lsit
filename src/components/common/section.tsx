"use client";

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

export default function Section({
  id = undefined,
  eyebrow = "",
  title = "",
  subtitle = "",
  children,
  className = "",
}: Props) {
  return (
    <section id={id} className={`bg-white ${className}`}>
      <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-24">
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto max-w-3xl text-center">
            {eyebrow ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="inline-block rounded-full px-3 py-1 text-xs md:text-sm bg-slate-100 text-primary"
              >
                {eyebrow}
              </motion.div>
            ) : null}
            {title ? (
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mt-3 text-2xl md:text-4xl font-bold text-primary"
              >
                {title}
              </motion.h2>
            ) : null}
            {subtitle ? (
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mt-3 text-sm md:text-base text-muted-foreground"
              >
                {subtitle}
              </motion.p>
            ) : null}
          </div>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
