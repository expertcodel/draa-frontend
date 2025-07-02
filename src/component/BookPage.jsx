"use client"
import Breadcrumb from "@/component/Breadcrumb";
import ThumbnailBookCarousel from "@/component/ThumbnailBookCarousel";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBook, faCartShopping, faClock, faPlay, faStar, faStarHalfStroke, faTag, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function BookPage({ bookDetail, bookList }) {

    
    
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
                                    <Image width={670} height={800} src="/images/products/img2.jpg" alt="image" />
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
                                    <button type="submit" className="default-btn">
                                        <FontAwesomeIcon icon={faCartShopping} /> Buy Now
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
                                    {/* <div className="tab-pane fade" id="reviews" role="tabpanel">
                                    <div className="products-reviews">
                                        <h3>Course Rating</h3>
                                        <div className="rating">
                                            <span className="bx bxs-star checked" />
                                            <span className="bx bxs-star checked" />
                                            <span className="bx bxs-star checked" />
                                            <span className="bx bxs-star checked" />
                                            <span className="bx bxs-star" />
                                        </div>
                                        <div className="rating-count">
                                            <span>4.1 average based on 4 reviews.</span>
                                        </div>
                                        <div className="row">
                                            <div className="side">
                                                <div>5 star</div>
                                            </div>
                                            <div className="middle">
                                                <div className="bar-container">
                                                    <div className="bar-5" />
                                                </div>
                                            </div>
                                            <div className="side right">
                                                <div>02</div>
                                            </div>
                                            <div className="side">
                                                <div>4 star</div>
                                            </div>
                                            <div className="middle">
                                                <div className="bar-container">
                                                    <div className="bar-4" />
                                                </div>
                                            </div>
                                            <div className="side right">
                                                <div>03</div>
                                            </div>
                                            <div className="side">
                                                <div>3 star</div>
                                            </div>
                                            <div className="middle">
                                                <div className="bar-container">
                                                    <div className="bar-3" />
                                                </div>
                                            </div>
                                            <div className="side right">
                                                <div>04</div>
                                            </div>
                                            <div className="side">
                                                <div>2 star</div>
                                            </div>
                                            <div className="middle">
                                                <div className="bar-container">
                                                    <div className="bar-2" />
                                                </div>
                                            </div>
                                            <div className="side right">
                                                <div>05</div>
                                            </div>
                                            <div className="side">
                                                <div>1 star</div>
                                            </div>
                                            <div className="middle">
                                                <div className="bar-container">
                                                    <div className="bar-1" />
                                                </div>
                                            </div>
                                            <div className="side right">
                                                <div>00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="products-review-comments">
                                        <h3>3 Reviews</h3>
                                        <div className="user-review">
                                            <img src="/images/user/user1.jpg" alt="image" />
                                            <div className="review-rating">
                                                <div className="review-stars">
                                                    <i className="bx bxs-star checked" />
                                                    <i className="bx bxs-star checked" />
                                                    <i className="bx bxs-star checked" />
                                                    <i className="bx bxs-star checked" />
                                                    <i className="bx bxs-star checked" />
                                                </div>
                                                <span className="d-inline-block">James Anderson</span>
                                            </div>
                                            <span className="d-block sub-comment">Excellent</span>
                                            <p>
                                                Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.
                                            </p>
                                        </div>
                                        <div className="user-review">
                                            <img src="/images/user/user2.jpg" alt="image" />
                                            <div className="review-rating">
                                                <div className="review-stars">
                                                    <i className="bx bxs-star checked" />
                                                    <i className="bx bxs-star checked" />
                                                    <i className="bx bxs-star checked" />
                                                    <i className="bx bxs-star" />
                                                    <i className="bx bxs-star" />
                                                </div>
                                                <span className="d-inline-block">Sarah Taylor</span>
                                            </div>
                                            <span className="d-block sub-comment">Video Quality!</span>
                                            <p>
                                                Was really easy to implement and they quickly answer my additional questions!
                                            </p>
                                        </div>
                                        <div className="user-review">
                                            <img src="/images/user/user3.jpg" alt="image" />
                                            <div className="review-rating">
                                                <div className="review-stars">
                                                    <i className="bx bxs-star checked" />
                                                    <i className="bx bxs-star checked" />
                                                    <i className="bx bxs-star checked" />
                                                    <i className="bx bxs-star checked" />
                                                    <i className="bx bxs-star checked" />
                                                </div>
                                                <span className="d-inline-block">David Warner</span>
                                            </div>
                                            <span className="d-block sub-comment">Perfect Coding!</span>
                                            <p>
                                                Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.
                                            </p>
                                        </div>
                                        <div className="user-review">
                                            <img src="/images/user/user4.jpg" alt="image" />
                                            <div className="review-rating">
                                                <div className="review-stars">
                                                    <i className="bx bxs-star checked" />
                                                    <i className="bx bxs-star checked" />
                                                    <i className="bx bxs-star checked" />
                                                    <i className="bx bxs-star checked" />
                                                    <i className="bx bxs-star" />
                                                </div>
                                                <span className="d-inline-block">King Kong</span>
                                            </div>
                                            <span className="d-block sub-comment">Perfect Video!</span>
                                            <p>
                                                Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="review-form-wrapper">
                                        <h3>Add a review</h3>
                                        <p className="comment-notes">
                                            Your email address will not be published. Required fields are marked <span>*</span>
                                        </p>
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="rating">
                                                        <input type="radio" id="star5" name="rating" defaultValue={5} />
                                                        <label htmlFor="star5" />
                                                        <input type="radio" id="star4" name="rating" defaultValue={4} />
                                                        <label htmlFor="star4" />
                                                        <input type="radio" id="star3" name="rating" defaultValue={3} />
                                                        <label htmlFor="star3" />
                                                        <input type="radio" id="star2" name="rating" defaultValue={2} />
                                                        <label htmlFor="star2" />
                                                        <input type="radio" id="star1" name="rating" defaultValue={1} />
                                                        <label htmlFor="star1" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Name *" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" placeholder="Email *" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <textarea placeholder="Your review" className="form-control" cols={30} rows={6} defaultValue={ ""} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <p className="comment-form-cookies-consent">
                                                        <input type="checkbox" id="test1" />
                                                        <label htmlFor="test1">
                                                            Save my name, email, and website in this browser for the next time I comment.
                                                        </label>
                                                    </p>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <button type="submit">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div> */}
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
