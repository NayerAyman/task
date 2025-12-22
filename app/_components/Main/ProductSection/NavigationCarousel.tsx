/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "@/app/_styling/productPageSwipper.css";
import { Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";

type NavigationCarouselProps = {
  images: string[];
  activeIndex: number;
  handleImageChange: React.Dispatch<React.SetStateAction<number>>;
};

export default function NavigationCarousel({
  images,
  activeIndex = 0,
  handleImageChange,
}: NavigationCarouselProps) {
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideTo(activeIndex);
    }
  }, [activeIndex]);

  const onSlideChange = (swiper: SwiperType) => {
    handleImageChange(swiper.activeIndex);
  };

  return (
    <Swiper
      ref={swiperRef}
      style={{
        width: "100%",
        height: "100%",
        gridColumn: "1/-1",
        gridRow: "1/11",
        borderRadius: "10px",
        overflow: "hidden",
        aspectRatio: 1 / 1,
      }}
      navigation={true}
      modules={[Navigation, Scrollbar]}
      onSlideChange={onSlideChange}
      scrollbar={{
        hide: false,
        draggable: true,
        snapOnRelease: true,
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide className="m-0 " key={index}>
          <div
            style={{
              boxShadow: "0px 67px 39px -31px rgba(0, 0, 0, 0.301) inset;",
            }}
            className="relative w-full h-full bg-[#f5f5f5]"
          >
            <img
              src={image}
              alt={`Product Image ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                objectPosition: "center",
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
