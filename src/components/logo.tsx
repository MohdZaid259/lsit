import Image from "next/image";

export default function Logo({ size = 36 }: { readonly size?: number }) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/logo/logoWhite.jpg"
        alt="LS4IT logo"
        height={12}
        width={size}
        className="w-36 invert mt-3 rounded-lg"
        priority
      />
    </div>
  );
}
