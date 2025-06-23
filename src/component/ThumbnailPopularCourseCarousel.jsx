"use client";
import { faBookBookmark, faHeart, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

export default function ThumbnailPopularCourseCarousel() {
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
      slidesPerView={3}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 8 },
        1280: { slidesPerView: 3, spaceBetween: 16 },
      }}
      className="PopularCourse-slider customSwiper"
    >
      {[...Array(10)].map((_, i) => (
        <SwiperSlide key={i}>
            <div className="single-courses-box">
                <div className="courses-image">
                    <a href="single-course-1.html" className="d-block image">
                        <img src="/images/courses/img1.jpg" alt="image" />
                    </a>
                    <a href="single-course-1.html" className="fav">
                        <FontAwesomeIcon icon={faHeart} /> <i className="flaticon-heart" />
                    </a>
                    <div className="price shadow">$39</div>
                </div>
                <div className="courses-content">
                    <div className="course-author d-flex align-items-center">
                        <img src="/images/user/user1.jpg" className="rounded-circle" alt="image" />
                        <span>Alex Morgan</span>
                    </div>
                    <h3>
                        <a href="single-course-1.html">
                            Deep Learning a-z™: Hands-on Artificial Neural Networks
                        </a>
                    </h3>
                    <p>
                        This master level course is for you if you are looking to learn the DL &amp; ANN topics in and out within a short time!
                    </p>
                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                        <li>
                            <FontAwesomeIcon icon={faBookBookmark} /> 15 Lessons
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPeopleGroup} /> 145 Students
                        </li>
                    </ul>
                </div>
            </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
