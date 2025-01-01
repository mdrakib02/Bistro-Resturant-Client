import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slideimg1 from "../../assets/home/slide1.jpg";
import slideimg2 from "../../assets/home/slide2.jpg";
import slideimg3 from "../../assets/home/slide3.jpg";
import slideimg4 from "../../assets/home/slide4.jpg";
import slideimg5 from "../../assets/home/slide5.jpg";

export default function ItemSlider() {
  return (
    <div className="container mx-auto">
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slideimg1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
