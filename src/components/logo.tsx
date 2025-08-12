import Image from "next/image";

export default function Logo({
  size = 85,
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
        className={`invert rounded-lg ${className}`}
        priority
      />
    </div>
  );
}
