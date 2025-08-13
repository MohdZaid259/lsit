import Image from "next/image";

export default function Logo({
  size = 36,
  className = "",
}: {
  readonly size?: number;
  readonly className?: string;
}) {
  return (
    <div className="">
      <Image
        src="/logo/logoSvg.svg"
        alt="LS4IT logo"
        height={size}
        width={size}
        className={`w-${size} ${className} invert mt-3 -ml-2 md:-ml-0 rounded-lg`}
        priority
      />
    </div>
  );
}
