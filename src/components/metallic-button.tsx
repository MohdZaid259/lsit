"use client";

import { Button } from "@/components/ui/button";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export default function MetallicButton({
  className,
  children,
  ...props
}: Props) {
  return (
    <Button
      {...props}
      className={cn(
        "relative overflow-hidden border-0",
        "bg-[linear-gradient(135deg,var(--primary)_0%,var(--secondary)_100%)]",
        "text-white shadow-md hover:shadow-lg transition-all",
        "after:pointer-events-none after:absolute after:inset-y-0 after:-left-1/3 after:w-1/3",
        "after:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.10),transparent)]",
        "hover:after:translate-x-[300%] after:translate-x-[-100%] after:transition-transform after:duration-700",
        className
      )}
    >
      {children}
    </Button>
  );
}
