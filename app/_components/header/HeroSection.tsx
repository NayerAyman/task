import { heroSetionTitle } from "@/app/_lib/consts";

export default function HeroSection() {
  return (
    <div className="relative flex h-40 w-full items-center bg-gray-100 justify-center bg-[url(/imgs/HeroImage.png)] bg-position-[30%_90%] sm:h-45 capitalize select-none">
      <HeroText text={heroSetionTitle.lg} className="hidden md:block" />
      <HeroText text={heroSetionTitle.sm} className="block md:hidden" />
    </div>
  );
}

type HeroTextProps = {
  text: string;
  className?: string;
};

function HeroText({ text, className = "" }: HeroTextProps) {
  return (
    <>
      <p
        className={`text-[80px] font-extrabold text-transparent text-nowrap 
          [-webkit-text-stroke:0.5px_#dad6d6] ${className}`}
      >
        {text}
      </p>

      <p
        className={`absolute left-1/2 top-[55%]
          -translate-x-1/2 -translate-y-1/2   text-nowrap
          text-4xl font-semibold  ${className}`}
      >
        {text}
      </p>
    </>
  );
}
