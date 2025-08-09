"use client";

import Image from "next/image";

export default function Logo({ size = 36 }: { readonly size?: number }) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/logo.jpg"
        alt="SunTech Fabrics logo"
        height={12}
        width={size}
        className="w-14 rounded-lg"
        priority
      />
    </div>
  );
}
