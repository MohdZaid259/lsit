"use client";

import Image from "next/image";

export default function Logo({ size = 36 }: { readonly size?: number }) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/logo/logoSvg.svg"
        alt="SunTech Fabrics logo"
        height={size}
        width={size}
        className="w-36 invert mt-3 rounded-lg"
        priority
      />
    </div>
  );
}
