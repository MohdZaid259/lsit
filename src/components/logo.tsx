import Image from "next/image";

export default function Logo({
  size = 48,
  className = "",
}: {
  readonly size?: number;
  readonly className?: string;
}) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/logo/logoSvg.svg"
        alt="LS4IT logo"
        height={size}
        width={size}
        className={`${className} rounded-lg`}
        priority
      />
    </div>
  );
}
