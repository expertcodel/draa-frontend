"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

export default function TestimonialsCarousel() {
  return (
    <>
      <div className="Testimonials-slider-wrapper verticalSlider">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={16}
          grabCursor={true}
          loop={true}
          autoHeight={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            1280: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
          }}
          className="Testimonials-slider"
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <SwiperSlide key={item}>
              <div className="single-feedback-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="client-info d-flex align-items-center">
                  <img
                    src="/images/user/user1.jpg"
                    className="rounded-circle"
                    alt="User"
                  />
                  <div className="title">
                    <h3>John Smith</h3>
                    <span>Python Developer</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
