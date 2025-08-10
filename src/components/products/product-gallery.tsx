"use client";

import { useMemo, useRef, useState } from "react";

import Image from "next/image";
import type React from "react";
import { cn } from "@/lib/utils";

export function ProductGallery({ images }: { readonly images: string[] }) {
  const [index, setIndex] = useState(0);
  const src = images[index] || images[0];
  return (
    <div className="grid gap-4">
      <ZoomImage src={src} alt="Product main image" />
      <div className="grid grid-cols-4 gap-2">
        {images.slice(0, 4).map((img, i) => (
          <button
            key={img + i}
            onClick={() => setIndex(i)}
            className={cn(
              "relative aspect-square overflow-hidden rounded-md border",
              i === index ? "ring-2 ring-primary" : "hover:border-foreground/30"
            )}
            aria-label={`Select image ${i + 1}`}
          >
            <Image
              src={img || "/placeholder.svg"}
              alt={`Thumbnail ${i + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function ZoomImage({
  src,
  alt,
}: {
  readonly src: string;
  readonly alt: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hovering, setHovering] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  const bgStyle = useMemo(
    () => ({
      backgroundImage: `url(${src})`,
      backgroundSize: "200%",
      backgroundPosition: `${pos.x}% ${pos.y}%`,
    }),
    [src, pos]
  );

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-muted"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMove}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className="object-cover transition-opacity"
        style={{ opacity: hovering ? 0 : 1 }}
      />
      {/* Zoom layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 transition-opacity"
        style={{ ...bgStyle, opacity: hovering ? 1 : 0 }}
      />
    </div>
  );
}
