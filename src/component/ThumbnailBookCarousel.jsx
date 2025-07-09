"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DOMPurify from 'dompurify';
import { faAngleRight, faBook, faCartShopping, faClock, faPlay, faStar, faStarHalfStroke, faTag, faUserTie } from "@fortawesome/free-solid-svg-icons";
export default function ThumbnailBookCarousel({ bookList }) {
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
      {bookList.map((book, i) => {

        const cleanDescription = DOMPurify.sanitize(book.description, {
          FORBID_ATTR: ['style'], // remove inline styles
        });

        return (<SwiperSlide key={i}>
          <div className="single-products-box">
            <div className="products-image">
              <Link href={`/books/${book.slug}`}>
                {/* <Image width={670} height={800} src="/images/products/img1.jpg" className="main-image" alt="image" /> */}
                <img width={670} height={800} src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/book/featured/${book.image}`} className="main-image" alt="image" />
              </Link>
            </div>
            <div className="products-content">
              <h3>
                <Link href={`/books/${book.slug}`}>{book.title}</Link>
              </h3>
              <div className="price">
                <p className="line-clamp-4" dangerouslySetInnerHTML={{ __html: cleanDescription }}>

                </p>
              </div>
              <div className="position-relative w-100 d-flex align-items-center">
                <Link href={`/books/${book.slug}`} className="default-btn me-2">
                  View more <FontAwesomeIcon icon={faAngleRight} />
                  <span />
                </Link>
                <button onClick={() => setBookdetail(book)} className="default-btn">
                  Buy Now <FontAwesomeIcon icon={faAngleRight} />
                  <span />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>)
      }
      )}
    </Swiper>
  );
}
