import Image from "next/image";

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

export default function Logo({
  className,
  width = 120,
  height = 32,
}: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
