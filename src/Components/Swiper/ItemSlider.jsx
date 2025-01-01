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
import SectionsTitle from "../SectionTitle/SectionsTitle";

export default function ItemSlider() {
  return (
    <section className="container mx-auto my-6 md:my-8 lg:my-24">
      <div className="mb-6 md:mb-8 lg:mb-12">
        <SectionsTitle
          SubHeading={"---From 11:00am to 10:00pm---"}
          Heading={"ORDER ONLINE"}
        />
      </div>
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
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold -mt-16 text-center text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg2} alt="" />
          <h3 className="text-3xl font-bold -mt-14 text-center text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg3} alt="" />
          <h3 className="text-3xl font-bold -mt-14 text-center text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg1} alt="" />
          <h3 className="text-3xl font-bold -mt-14 text-center text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg2} alt="" />
          <h3 className="text-3xl font-bold -mt-14 text-center text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg3} alt="" />
          <h3 className="text-3xl font-bold -mt-14 text-center text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg4} alt="" />
          <h3 className="text-3xl font-bold -mt-14 text-center text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg5} alt="" />
          <h3 className="text-3xl font-bold -mt-14 text-center text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg4} alt="" />
          <h3 className="text-3xl font-bold -mt-14 text-center text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg5} alt="" />
          <h3 className="text-3xl font-bold -mt-14 text-center text-white">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
