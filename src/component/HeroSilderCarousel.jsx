"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";
import Image from "next/image";
import heroBanner from "../utils/heroBanner";
import SearchForm from "./SearchForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
export default function HeroSilderCarousel({ category }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination, EffectFade]}
      autoplay={{
        delay: 5000000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false
      }}
      effect="fade"
      fadeEffect={{
        crossFade: true,
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
      className="hero-slider customSwiper"
    >
        {heroBanner.map((slide, i) => (
            <SwiperSlide key={i}>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-wrapper-content">
                            <h1>{slide.heading}</h1>
                            <p>
                                {slide.subHeading}
                            </p>
                            <div className="position-relative w-100 d-flex align-items-center">
                                <Link href={`/books/${slide.slug}`} className="default-btn me-2">
                                    Explore <FontAwesomeIcon icon={faAngleRight} />
                                    <span />
                                </Link>
                                <button className="default-btn">
                                    Apply Now <FontAwesomeIcon icon={faAngleRight} />
                                    <span />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-wrapper-image">
                            <Image width={550} height={620} src={slide.src} alt={slide.heading} />
                            <div className="banner-shape8" data-speed="0.06" data-revert="true">
                                <img src="/images/shape/banner-shape8.png" alt="image" />
                            </div>
                            <div className="banner-shape9" data-speed="0.06" data-revert="true">
                                <img src="/images/shape/banner-shape9.png" alt="image" />
                            </div>
                            <div className="banner-shape10" data-speed="0.06" data-revert="true">
                                <img src="/images/shape/banner-shape10.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))}
        <div className="banner-wrapper-content heroSearchSec">
            <SearchForm />
            <ul className="popular-search-list">
                <li>
                    <span>Popular:</span>
                </li>
                {category.map((category, i) => i < 3 && <li key={i}>
                    <Link href={`/courses/?course_name=${category.slug}`}>{category.name}</Link>
                </li>)}

            </ul>
        </div>
    </Swiper>
  );
}
