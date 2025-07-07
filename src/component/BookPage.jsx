"use client"
import Breadcrumb from "@/component/Breadcrumb";
import ThumbnailBookCarousel from "@/component/ThumbnailBookCarousel";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, faBook, faCartShopping, faClock, faPlay, faStar, faStarHalfStroke, faTag, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function BookPage({ bookDetail, bookList }) {

    const router = useRouter();
    const setBookdetail = () => {

        sessionStorage.setItem('BookDetail', JSON.stringify({ price: bookDetail.price, title: bookDetail.title, book_id: bookDetail.id }));
        router.push("/book-checkout");
    }


    return (
        <>
            {/*Breadcrumb*/}
            <head>
                <meta name="keywords" content={bookDetail.meta_keywords} />
                <meta name="description" content={bookDetail.meta_description} />
                <title>{bookDetail.seo_title}</title>
            </head>
            <Breadcrumb title={bookDetail.title.replace(/[^a-zA-Z0-9]/g, ' ')} />

            {/* Start products Details Area */}
            <div className="products-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="products-details-image">
                                <a href="/images/products/img2.jpg" className="popup-btn">
                                    {/* <Image width={670} height={800} src="/images/products/img2.jpg" alt="image" /> 
                                    */}
                                     <img width={670} height={800} src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/course/featured/${bookDetail.image}`} className="main-image" alt="image" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="products-details-desc">
                                <h3>{bookDetail.title}</h3>
                                <div className="price">
                                    <span className="new-price">&#8377;{bookDetail.price}</span>
                                    {/* <span className="old-price">$210</span> */}
                                </div>
                                {/* <div className="products-review">
                                <div className="rating">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfStroke} />
                                </div>
                                <a href="single-product.html" className="rating-count">
                                    3 reviews
                                </a>
                            </div> */}
                                <p className="line-clamp-4" dangerouslySetInnerHTML={{ __html: bookDetail.description }}>

                                </p>
                                <div className="products-meta">
                                    {/* <span>
                                    SKU: <span className="sku">10</span>
                                </span> */}
                                    <span>
                                        Availability: <span className="in-stock">In Stock</span>
                                    </span>
                                    <span>
                                        Category: <Link href={`/books/?book_category=${bookDetail.slug}`}>{bookDetail.category}</Link>
                                    </span>
                                    <span>
                                        Tag: <Link href="/books">Book</Link>
                                    </span>
                                </div>
                                <div className="products-add-to-cart">
                                    <button type="button" className="default-btn" onClick={setBookdetail}>
                                        Buy Now <FontAwesomeIcon icon={faAngleRight} />
                                        <span />
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="products-details-tabs">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">
                                            Description
                                        </button>
                                    </li>
                                    {/* <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">
                                        Reviews (2)
                                    </button>
                                </li> */}
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="description" role="tabpanel">
                                        <p dangerouslySetInnerHTML={{ __html: bookDetail.description }}>

                                        </p>

                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End products Details Area */}

            {/* Start Related Products Area */}
            <div className="products-area pt-100 pb-70 bg-f5f1ed">
                <div className="container">
                    <div className="section-title">
                        {/* <span className="sub-title">Our Shop</span> */}
                        <h2>Related Books</h2>
                    </div>

                    <div className="row">
                        <ThumbnailBookCarousel bookList={bookList} />
                    </div>
                </div>
            </div>
        </>
    );
}
