import Image from "next/image";
import { heroSetionTitle } from "../../_lib/consts";

export default function Breadcrumb() {
  const staticRoutes = [
    { lg: "Home", sm: "Home" },
    { lg: "Our Category", sm: "Our Category" },
    heroSetionTitle,
  ];

  return (
    <div className="bg-[#f6f6f6] w-full h-14 flex gap-2 items-center px-5 text-sm font-semibold rounded-2xl capitalize mb-2">
      {staticRoutes.map((route, index) => (
        <div className="flex gap-2 items-center" key={route.lg}>
          <button
            className={` cursor-pointer ${
              index === staticRoutes.length - 1
                ? "text-[#8a8a8a]"
                : "text-black"
            }`}
          >
            <span className="hidden md:block">{route.lg}</span>
            <span className="block md:hidden">{route.sm}</span>
          </button>

          {index < staticRoutes.length - 1 && (
            <Image width={10} height={10} alt="chevron" src="/icon/Back.svg" />
          )}
        </div>
      ))}
    </div>
  );
}
