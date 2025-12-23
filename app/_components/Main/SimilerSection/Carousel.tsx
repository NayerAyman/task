/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";



/* ------------------ Swiper Breakpoints ------------------ */
const productCarouselBreakpoints = {
  0: { slidesPerView: 2.2, spaceBetween: 12 },
  640: { slidesPerView: 3, spaceBetween: 16 },
  1024: { slidesPerView: 4, spaceBetween: 24 },
  1280: { slidesPerView: 4.5, spaceBetween: 28 },
};

/* ------------------ Types ------------------ */
type ProductType = {
  id: string;
  name: string;
  image: string;
  price: number;
  discount?: number;
  colors: string[];
};

/* ------------------ Products ------------------ */
const products: ProductType[] = [
  {
    id: "1",
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
    image: "/imgs/driss.png",
    price: 900,
    discount: 25,
    colors: ["#b08b81", "#2c2c2c", "#e6e6e6", "#c1b09c", "#cbd8e5"],
  },
  {
    id: "2",
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
    image: "/imgs/d4ec73b3fba71262a4241c34963a4c9a19e27a6a.png",
    price: 900,
    colors: ["#b08b81", "#2c2c2c", "#e6e6e6"],
  },
  {
    id: "3",
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
    image: "/imgs/2a06448687de473ade55a532f6a0aeb01428bd37.png",
    price: 900,
    discount: 25,
    colors: ["#b08b81", "#2c2c2c", "#e6e6e6"],
  },
  {
    id: "4",
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
    image: "/imgs/tshert.png",
    price: 900,
    colors: ["#b08b81", "#2c2c2c", "#e6e6e6"],
  },
  {
    id: "5",
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
    image: "/imgs/tshert.png",
    price: 900,
    colors: ["#b08b81", "#2c2c2c", "#e6e6e6"],
  },
];

/* ------------------ Product Card ------------------ */
function ProductCard({ product }: { product: ProductType }) {
  const [activeColor, setActiveColor] = useState(product.colors[0]);

  return (
    <div className="h-full  bg-white overflow-hidden rounded-xl ">
      {/* Top Section: Header + Product Image */}
      <div className="w-full bg-[#fafafa] border border-[#f0f0f0] flex flex-col items-stretch aspect-square rounded-xl ">
        {/* Header: Discount + Action Icons */}
        <div className="flex items-center justify-between p-3 w-full rounded-t-xl overflow-hidden">

          {product.discount ? (
            <span className="py-1 px-2 rounded-md border border-[#f0d5cf] bg-white text-[9px] font-medium text-[#c08a7d]">
              {product.discount}% OFF
            </span>
          ):<span></span>}

          <div className="flex items-center gap-2 ">
            <button className="border border-gray-200 p-1 rounded-lg">
              <img
              src="/icon/ecommerce/outline/bag-add.svg"
              alt="Add to cart"
              className="pt-0! size-5!"
            />
            </button>
            <button className="border border-gray-200 p-1 rounded-lg">
            <img
              src="/icon/interface/outline/heart_2.svg"
              alt="Add to cart"
              className="pt-0! size-5!"
            />
            </button>
          </div>
        </div>

        {/* Product Image */}
        <div className="flex justify-center items-center p-3 rounded-b-xl">
          <Image
            src={product.image}
            alt={product.name}
            width={260}
            height={260}
            className="w-full h-52 object-contain aspect-square "
          />
        </div>
      </div>

      {/* Bottom Section: Info */}
      <div className="p-3 flex flex-col gap-1">
        {/* Category + Rating */}
        <div className="flex items-center justify-between text-xs text-[#777]">
          <p>Dresses</p>
          <div className="flex items-center gap-1">
            <Image
              src="/icon/Star.svg"
              alt="star"
              width={16}
              height={16}
              className="pt-0!"
            />
            <span className="text-black font-medium">4.5</span>
            <span className="text-[#888]">(2910)</span>
          </div>
        </div>

        {/* Title */}
        <h4 className="mt-1 text-[13px] font-medium leading-[1.4]">
          {product.name}
        </h4>

        {/* Price + Colors */}
        <div className="mt-2 flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="font-semibold">AED {product.price}</p>
            {product.discount && (
              <p className="text-[#aaa4a2] text-sm line-through">
                AED {Math.round(product.price + (product.price * product.discount) / 100)}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            {product.colors.slice(0, 3).map((color) => (
              <span
                key={color}
                onClick={() => setActiveColor(color)}
                style={{ backgroundColor: color }}
                className={`h-4 w-4 cursor-pointer rounded-full border ${
                  activeColor === color ? "border-2 border-black" : "border border-[#ddd]"
                }`}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


/* ------------------ Main Component ------------------ */


export default function SuggestedProducts() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const handlePrev = () => {
    swiper?.slidePrev();
  };

  const handleNext = () => {
    swiper?.slideNext();
  };

  return (
    <section className="w-full pb-10 lg:ps-20 ps-5">
      <h3 className=" relative mb-4 text-[22px] font-semibold">
        Similar Items
        <span className="w-15 md:w-9 h-1 bg-[#be968e] inline-block rounded-2xl absolute left-0 -bottom-1"></span>
      </h3>

      <Swiper
        breakpoints={productCarouselBreakpoints}
        onSwiper={setSwiper}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="mt-8 flex items-center justify-center gap-4 lg:me-20 me-5">
        {/* Prev */}
        <button
          onClick={handlePrev}
          disabled={!swiper}
          aria-label="Previous"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eef1f5] transition hover:bg-[#e0e4ea] disabled:opacity-50"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#333"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Next */}
        <button
          onClick={handleNext}
          disabled={!swiper}
          aria-label="Next"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c08a7d] transition hover:bg-[#b0796d] disabled:opacity-50"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}


