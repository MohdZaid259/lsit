"use client";

import { useMemo, useRef, useState } from "react";

import type React from "react";
import { SafeImage } from "../ui/safe-image";
import { cn } from "@/lib/utils";

export function ProductGallery({
  images,
  category,
}: {
  readonly images: string[];
  readonly category?: string;
}) {
  const [index, setIndex] = useState(0);
  const src = images[index] || images[0];
  return (
    <div className="grid gap-4">
      <ZoomImage src={src} category={category} alt="Product main image" />
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
            <SafeImage
              src={img || ""}
              alt={`Thumbnail ${i + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-contain"
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
  category = "",
}: {
  readonly src: string;
  readonly alt: string;
  readonly category?: string;
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
      <SafeImage
        src={src || ""}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        className={cn(
          "transition-opacity",
          category.toLowerCase() == "material"
            ? "object-cover"
            : "object-contain"
        )}
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
