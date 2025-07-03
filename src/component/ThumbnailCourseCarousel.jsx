"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

export default function ThumbnailCourseCarousel() {
  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      freeMode={true}
      grabCursor={true}
      loop={true}
      spaceBetween={16}
      slidesPerView={4}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 8 },
        1280: { slidesPerView: 4, spaceBetween: 16 },
      }}
      className="Course-slider customSwiper"
    >
      {[...Array(10)].map((_, i) => (
        <SwiperSlide key={i}>
          <div className="single-features-box">
            <div className="icon">
              <i className="flaticon-brain-process" />
            </div>
            <h3>Learn the Latest Top Skills</h3>
            <p>Learning top skills can bring an extra-ordinary outcome in a career.</p>
            <a href="/" className="link-btn">Start Now!</a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
