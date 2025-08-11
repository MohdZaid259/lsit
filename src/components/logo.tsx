import Image from "next/image";

export default function Logo({ size = 36, className='' }: { readonly size?: number, className?: string }) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/logo/logoSvg.svg"
        alt="LS4IT logo"
        height={12}
        width={size}
        className={`w-36 ${className} invert mt-3 rounded-lg`}
        priority
      />
    </div>
  );
}
