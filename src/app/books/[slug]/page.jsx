import Breadcrumb from "@/component/Breadcrumb";
import ThumbnailBookCarousel from "@/component/ThumbnailBookCarousel";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBook, faCartShopping, faClock, faPlay, faStar, faStarHalfStroke, faTag, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function BookPage() {
  return (
    <>
        {/*Breadcrumb*/}
        <Breadcrumb title="Book Name" />

        {/* Start products Details Area */}
        <div className="products-details-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <div className="products-details-image">
                            <a href="/images/products/img2.jpg" className="popup-btn">
                                <Image width={670} height={800} src="/images/products/img2.jpg" alt="image" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="products-details-desc">
                            <h3>Motivational Book Cover</h3>
                            <div className="price">
                                <span className="new-price">$200</span>
                                <span className="old-price">$210</span>
                            </div>
                            <div className="products-review">
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
                            </div>
                            <p>
                                This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et.
                            </p>
                            <div className="products-meta">
                                <span>
                                    SKU: <span className="sku">10</span>
                                </span>
                                <span>
                                    Availability: <span className="in-stock">In Stock</span>
                                </span>
                                <span>
                                    Category: <a href="single-course-1.html">Business</a>
                                </span>
                                <span>
                                    Tag: <a href="single-course-1.html">Book</a>
                                </span>
                            </div>
                            <div className="products-add-to-cart">
                                <button type="submit" className="default-btn">
                                    <FontAwesomeIcon icon={faCartShopping} /> Buy Now
                                    <span />
                                </button>
                            </div>
                            <div className="products-share">
                                <ul className="social">
                                    <li>
                                        <span>Share:</span>
                                    </li>
                                    <li>
                                        <a href="#" className="facebook" target="_blank">
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="twitter" target="_blank">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="linkedin" target="_blank">
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="instagram" target="_blank">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </li>
                                </ul>
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
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">
                                        Reviews (2)
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="description" role="tabpanel">
                                    <p>
                                        This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Lorem ipsum dolor
                                        sit.
                                    </p>
                                    <ul>
                                        <li>Instant eLearniv bestseller</li>
                                        <li>Translated into 18 languages</li>
                                        <li>#1 Most Recommended Book of the year.</li>
                                        <li>
                                            A neglected project, widely dismissed, its champion written off as unhinged.
                                        </li>
                                        <li>
                                            Yields a negative result in an experiment because of a flaw in the design of the experiment.
                                        </li>
                                        <li>
                                            An Amazon, Bloomberg, Financial Times, Forbes, Inc., Newsweek, Strategy + Business, Tech Crunch, Washington Post Best Business Book of the year
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="reviews" role="tabpanel">
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
                    <span className="sub-title">Our Shop</span>
                    <h2>Related Products</h2>
                </div>

                <div className="row">
                    <ThumbnailBookCarousel />
                </div>
            </div>
        </div>
    </>
  );
}
