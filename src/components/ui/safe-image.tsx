import NextImage, { ImageProps } from "next/image";

export function SafeImage({
  src,
  alt,
  ...props
}: ImageProps & { src?: string | null }) {
  const safeSrc = src && src.trim() !== "" ? src : "/placeholder.png";
  return <NextImage src={safeSrc} alt={alt} {...props} />;
}
