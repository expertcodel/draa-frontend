"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function ThumbnailBookCarousel({bookList}) {
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
        768: { slidesPerView: 3, spaceBetween: 8 },
        1280: { slidesPerView: 3, spaceBetween: 16 },
      }}
      className="book-slider customSwiper"
    >
      {bookList.map((book, i) => (
        <SwiperSlide key={i}>
            <div className="single-products-box">
                <div className="products-image">
                    <Link href={`/books/${book.slug}`}>
                        <Image width={670} height={800} src="/images/products/img1.jpg" className="main-image" alt="image" />
                    </Link>
                </div>
                <div className="products-content">
                    <h3>
                        <Link href={`/books/${book.slug}`}>{book.title}</Link>
                    </h3>
                    <div className="price">
                        <p>
                           {book.author}
                        </p>
                    </div>
                    <Link href={`/books/${book.slug}`} className="add-to-cart default-btn">
                        <FontAwesomeIcon icon={faCartShopping} /> Buy Now
                        <span />
                    </Link>
                </div>
            </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
