"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function ThumbnailTestSeriesCarousel({ testSerieslist }) {
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
      className="testSeries-slider customSwiper"
    >
      {testSerieslist.map((test, i) => (
        <SwiperSlide key={i}>
          <div className="single-blog-post-box">
            <div className="post-content">
              <span className="category">
                {/* 1792 Total tests <em>| 16 Free Tests</em> */}
                {test.sub_title}
              </span>
              <h3>
                <Link href={`/test-series/${test.slug}`}>
                  {test.title}
                </Link>
              </h3>
              <ul className="post-content-footer d-flex justify-content-between align-items-center">
                <li>
                  <div className="post-author d-flex align-items-center">

                    <Link href={`/test-series/${test.slug}`} className="default-btn">
                      View Test Series
                      <span />
                    </Link>
                  </div>
                </li>
                {/* <li>
                            <FontAwesomeIcon icon={faEye} /> 2k Users
                        </li> */}
                {/* <li className="cursorPointer">
                            <FontAwesomeIcon icon={faDownload} /> PDF
                        </li> */}
              </ul>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
