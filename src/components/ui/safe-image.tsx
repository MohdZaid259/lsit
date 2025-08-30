"use client";

import NextImage, { ImageProps } from "next/image";

import { useState } from "react";

export function SafeImage({
  src,
  alt,
  ...props
}: ImageProps & { src?: string | null }) {
  const [safeSrc, setSafeSrc] = useState(
    src && src.trim() !== "" ? src : "/placeholder.png"
  );
  return (
    <NextImage
      src={safeSrc}
      alt={alt}
      {...props}
      onError={() => setSafeSrc("/placeholder.png")}
    />
  );
}
