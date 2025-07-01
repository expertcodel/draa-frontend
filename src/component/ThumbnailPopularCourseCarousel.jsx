"use client";
import { faBookBookmark, faHeart, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";

export default function ThumbnailPopularCourseCarousel({ courselist }) {

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
      {courselist.map((course, i) => (
        <SwiperSlide key={i}>
          <div className="single-courses-box">
            <div className="courses-image">
              <Link href={`/courses/${course.slug}`} className="d-block image">
                <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/course/featured/${course.image}`} alt="image" />
              </Link>
              {/* <a href="single-course-1.html" className="fav">
                        <FontAwesomeIcon icon={faHeart} /> <i className="flaticon-heart" />
                    </a>
                    <div className="price shadow">$39</div> */}
            </div>
            <div className="courses-content">
              {/* <div className="course-author d-flex align-items-center">
                        <img src="/images/user/user1.jpg" className="rounded-circle" alt="image" />
                        <span>Alex Morgan</span>
                    </div> */}
              <h3>
                <Link href={`/courses/${course.slug}`}>
                  {course.title}
                </Link>
              </h3>
              <p>
                {course.sub_title}
              </p>
              <Link href={`/courses/${course.slug}`} className="default-btn w-100">
                Enroll Now
                <span />
              </Link>
              {/* <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                        <li>
                            <FontAwesomeIcon icon={faBookBookmark} /> 15 Lessons
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPeopleGroup} /> 145 Students
                        </li>
                    </ul> */}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
