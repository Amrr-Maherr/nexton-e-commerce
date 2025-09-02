"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export default function Slider({
  children,
  slidesPerView = 4,
  spaceBetween = 20,
  slidesPerViewMobile = 1,
  className,
  swiperOptions = {},
  modules = [Pagination, Autoplay],
}) {
  return (
    <Swiper
      slidesPerView={slidesPerViewMobile} // default for mobile
      spaceBetween={spaceBetween}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        ...swiperOptions.autoplay,
      }}
      loop={swiperOptions.loop ?? true}
      pagination={swiperOptions.pagination ?? false}
      breakpoints={{
        640: {
          slidesPerView: Math.min(slidesPerView, 2),
          spaceBetween: spaceBetween,
          ...swiperOptions.breakpoints?.[640],
        },
        768: {
          slidesPerView: Math.min(slidesPerView, 3),
          spaceBetween: spaceBetween,
          ...swiperOptions.breakpoints?.[768],
        },
        1024: {
          slidesPerView: slidesPerView,
          spaceBetween: spaceBetween,
          ...swiperOptions.breakpoints?.[1024],
        },
        ...swiperOptions.breakpoints,
      }}
      modules={modules}
      className={`mySwiper ${className || ""}`}
      {...swiperOptions}
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
