"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function ThumbnailCourseAdvisor() {
  return (
    <Swiper
        modules={[Autoplay, FreeMode, Pagination]}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }}
        freeMode={true}
        grabCursor={true}
        loop={true}
        spaceBetween={16}
        slidesPerView={2}
        pagination={{
            clickable: true,
            dynamicBullets: true, // Optional: animated bullets
        }}
        breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 8 },
            1280: { slidesPerView: 2, spaceBetween: 16 },
        }}
        className="courseAdvisor-slider customSwiper"
    >
      {[...Array(5)].map((_, i) => (
        <SwiperSlide key={i}>
            <div className="single-advisor-box">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-4">
                        <div className="advisor-image">
                            <Image width={230} height={340} src="/images/advisor/img1.jpg" alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8">
                        <div className="advisor-content">
                            <h3>
                                <Link href="/">William James</Link>
                            </h3>
                            <span className="sub-title">Project Management Expert</span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol aliqua.
                            </p>
                            <ul className="social-link">
                                <li>
                                    <Link href="/" className="d-block" target="_blank">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="d-block" target="_blank">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="d-block" target="_blank">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="d-block" target="_blank">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
