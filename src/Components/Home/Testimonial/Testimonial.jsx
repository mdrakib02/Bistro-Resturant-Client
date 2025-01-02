import React, { useEffect, useState } from "react";
import SectionsTitle from "../../SectionTitle/SectionsTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Testimonial() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="container mx-auto">
      <SectionsTitle
        SubHeading={"What our clients says"}
        Heading={"Testimonials"}
      ></SectionsTitle>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {reviews.map((review) => (
          <SwiperSlide>
            <div className="flex h-auto">
              <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
                <div className="flex-auto p-4 md:p-6">
                  <p className="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
                   {review.details}
                  </p>
                </div>

                <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                  <div className="flex items-center gap-x-3">
                    <div className="shrink-0">
                      <img
                        className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Avatar"
                      />
                    </div>

                    <div className="grow">
                      <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                        {review.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-neutral-400">
                        Product Manager | Capsule
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </div>
  );
}
