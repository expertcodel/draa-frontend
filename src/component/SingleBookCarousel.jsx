"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function SingleBookCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      pagination={{
        clickable: true,
      }}
      grabCursor={true}
      loop={true}
      spaceBetween={16}
      slidesPerView={1}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 1, spaceBetween: 8 },
        1280: { slidesPerView: 1, spaceBetween: 16 },
      }}
      className="singleBook-slider customSwiper"
    >
      {[...Array(4)].map((_, i) => (
        <SwiperSlide key={i}>
          <div className="get-instant-courses-inner-area bg-blank">
              <div className="row align-items-center">
                  <div className="col-lg-8 col-md-12">
                      <div className="get-instant-courses-content ps-0">
                          <span className="sub-title">The Perfect Frame for Your Notebook Design</span>
                          <h2>Note Book Mockup</h2>
                          <p>
                              eLearniv Self Development Course can assist you in bringing the significant changes in personal understanding and reshaping the confidence to achieve the best from your career! We trust that learning should be enjoyable, and only that can make substantial
                              changes to someone!
                          </p>
                          <Link href="/books" className="default-btn me-2">
                              Learn More <FontAwesomeIcon icon={faAngleRight} />
                              <span />
                          </Link>
                          <Link href="/register-course" className="default-btn">
                              Buy Now <FontAwesomeIcon icon={faAngleRight} />
                              <span />
                          </Link>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                      <div className="get-instant-courses-image">
                          <Image width={670} height={800} src="/images/products/img1.jpg" className="main-image" alt="image" />
                          <div className="shape7" data-speed="0.06" data-revert="true">
                              <img src="/images/shape/shape4.png" alt="image" />
                          </div>
                          <div className="shape6" data-speed="0.06" data-revert="true">
                              <img src="/images/shape/shape6.png" alt="image" />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="shape5" data-speed="0.06" data-revert="true">
                  <img src="/images/shape/shape5.png" alt="image" />
              </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
