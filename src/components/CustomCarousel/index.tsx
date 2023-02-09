"use client";

import { ReactNode, useRef } from "react";

import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import ArrowRight from "@/assets/carousel/ArrowRight.svg";
import ArrowLeft from "@/assets/carousel/ArrowLeft.svg";

import styles from "./carousel.module.scss";

type Props = {
  items: ReactNode[];
  count: number;
  loop?: boolean;
};

export default function Carousel({ items, count , loop }: Props) {
  const swiperRef = useRef<SwiperCore>();

  const onInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  return (
    <div className={styles.main}>
      <div
        className={styles.arrowRight}
        onClick={() => {
          swiperRef.current ? swiperRef.current.slidePrev() : "";
        }}
      >
        <ArrowRight />
      </div>
      <Swiper
        onInit={onInit}
        spaceBetween={0}
        slidesPerView={count}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="swiper"
        loop={loop}
      >
        {items &&
          items.map((item: ReactNode, index: number) => {
            return (
              <SwiperSlide key={index} onClick={(e) => {}}>
                {item}
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div
        className={styles.arrowLeft}
        onClick={() => {
          swiperRef.current ? swiperRef.current.slideNext() : "";
        }}
      >
        <ArrowLeft />
      </div>
    </div>
  );
}
