"use client";

import Image from "next/image";

export default function Logo({
  showText = true,
  size = 36,
}: {
  readonly showText?: boolean;
  readonly size?: number;
}) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/logo.png"
        alt="SunTech Fabrics logo"
        width={size}
        height={size}
        className="h-9 w-9"
        priority
      />
      {showText ? (
        <span className="text-sm sm:text-base font-semibold tracking-wide text-primary">
          LS4IT
        </span>
      ) : null}
    </div>
  );
}
