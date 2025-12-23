"use client";
import { useState } from "react";
import NavigationCarousel from "./NavigationCarousel";
import Image from "next/image";

type ProductImagesProps = {
  images: string[];
};

function ProductImages({ images }: ProductImagesProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div
      className=" w-full h-full grid grid-cols-3
        grid-rows-[repeat(13,1fr)]
        gap-y-2 gap-x-2 rounded-[10px]  aspect-[1/1.5] md:col-[1/6]
          select-none
"
    >
      {/* Main Carousel */}
      <NavigationCarousel
        images={images}
        activeIndex={activeIndex}
        handleImageChange={setActiveIndex}
      />

      {/* Additional Thumbnails */}
      {images.slice(1, 4).map((image, index) => (
        <div
          key={index}
          className={`block w-full h-full cursor-pointer aspect-square rounded-[10px] row-[11/-1]
  overflow-hidden
            `}
          style={{
            gridColumn: `${index + 1} / ${index === 2 ? "-1" : index + 2}`,
            backgroundColor: "#f0f0f0",
          }}
          onClick={() => setActiveIndex(index + 1 || images.length - 1 || 0)}
        >
          <div className="relative size-full bg-[#f5f5f5]">
            <Image
              src={image}
              alt={`Thumbnail ${index}`}
              fill
              className="object-cover rounded-[10px] bg-gray-100 aspect-square  p-4"
            />
          </div>
        </div>
      ))}

    </div>
  );
}

export default ProductImages;
