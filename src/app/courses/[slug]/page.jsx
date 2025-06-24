import Breadcrumb from "@/component/Breadcrumb";
import { faAngleLeft, faAngleRight, faBook, faCartShopping, faClock, faPhone, faPlay, faTag, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function CoursePage() {
  return (
    <>
        {/*Breadcrumb*/}
        <Breadcrumb title="Course Category" />

        {/* Start Courses Details Area */}
        <div className="courses-details-area pb-100">
            <div className="courses-details-image">
                <Image width={1920} height={500} src="/images/courses/course-details.jpg" alt="image" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="courses-details-desc">
                            <h5>
                                Course Name
                            </h5>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="overview" aria-selected="true">
                                        Overview
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="curriculum-tab" data-bs-toggle="tab" data-bs-target="#curriculum" type="button" role="tab" aria-controls="curriculum" aria-selected="false">
                                        Curriculum
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="instructor-tab" data-bs-toggle="tab" data-bs-target="#instructor" type="button" role="tab" aria-controls="instructor" aria-selected="false">
                                        Instructor
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">
                                        Reviews
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="overview" role="tabpanel">
                                    <div className="courses-overview">
                                        <figure className="courseThumbImg">
                                            <Image fill src="/images/courses/img1.jpg" alt="image" />
                                        </figure>
                                        <h3>Course Description</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                        </p>
                                        <h3>Certification</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                        </p>
                                        <h3>Who this course is for</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                        </p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="curriculum" role="tabpanel">
                                    <div className="courses-curriculum faq-accordion">
                                        <h3>Python Introduction</h3>
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button
                                                        className="accordion-button"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOne"
                                                        aria-expanded="true"
                                                        aria-controls="collapseOne"
                                                    >
                                                        Accordion Item #1
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing
                                                        and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{" "}
                                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseTwo"
                                                        aria-expanded="false"
                                                        aria-controls="collapseTwo"
                                                    >
                                                        Accordion Item #2
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the
                                                        showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                                        does limit overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingThree">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseThree"
                                                        aria-expanded="false"
                                                        aria-controls="collapseThree"
                                                    >
                                                        Accordion Item #3
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing
                                                        and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does
                                                        limit overflow.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="instructor" role="tabpanel">
                                    <div className="courses-instructor">
                                        <div className="single-advisor-box">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="advisor-image">
                                                        <img src="/images/advisor/img2.jpg" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 col-md-8">
                                                    <div className="advisor-content">
                                                        <h3>Sarah Taylor</h3>
                                                        <span className="sub-title">
                                Agile Project Expert
                            </span>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                                                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        </p>
                                                        <ul className="social-link">
                                                            <li>
                                                                <a href="#" className="d-block" target="_blank">
                                                                    <i className="bx bxl-facebook" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="d-block" target="_blank">
                                                                    <i className="bx bxl-twitter" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="d-block" target="_blank">
                                                                    <i className="bx bxl-instagram" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="d-block" target="_blank">
                                                                    <i className="bx bxl-linkedin" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="reviews" role="tabpanel">
                                    <div className="courses-reviews">
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
                                    <div className="courses-review-comments">
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="courses-details-info">
                            <div className="image">
                                <Image width={750} height={500} src="/images/courses/img1.jpg" alt="image" />
                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="link-btn popup-youtube" />
                                {/* <a href="/" className="link-btn popup-youtube" /> */}
                                <div className="content">
                                    <em><FontAwesomeIcon icon={faPlay} /></em>
                                    <span>Course Preview</span>
                                </div>
                            </div>
                            <div className="btn-box order-details">
                                <div className="payment-box p-0 bg-blank">
                                    <label className="mb-2">Select Course Level</label>
                                    <div className="payment-method">
                                        <p>
                                            <input type="radio" id="Level1" name="radio-level" />
                                            <label htmlFor="Level1">Level-I</label>
                                        </p>
                                        <p>
                                            <input type="radio" id="Level2" name="radio-level" />
                                            <label htmlFor="Level2">Level-II</label>
                                        </p>
                                        <p>
                                            <input type="radio" id="Level3" name="radio-level" />
                                            <label htmlFor="Level3">Level-III</label>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-box">
                                <span className="text-center d-block"><FontAwesomeIcon icon={faClock} /> Call for Assistance</span>
                                <a href="tel:+44587154756" className="default-btn">
                                    <FontAwesomeIcon icon={faPhone} /> +1 (123) 456 7890
                                    <span />
                                </a>
                            </div>
                            <div className="btn-box">
                                {/* <span>Registration is closed. We will open soon.</span> */}
                                <Link href="/register-course" className="default-btn">
                                    Register For Course <FontAwesomeIcon icon={faAngleRight} />
                                    <span />
                                </Link>
                            </div>
                        </div>

                        <div className="contact-form mt-3">
                            <h2>Ask Your Query</h2>
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group mb-3">
                                            <input type="text" name="name" id="name" required="" data-error="Please enter your name" placeholder="Your name" />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group mb-3">
                                            <input type="email" name="email" id="email" required="" data-error="Please enter your email" placeholder="Your email address" />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group mb-3">
                                            <input type="text" name="phone_number" id="phone_number" required="" data-error="Please enter your phone number" placeholder="Your phone number" />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group mb-3">
                                            <textarea name="message" id="message" cols={30} rows={5} required="" data-error="Please enter your message" placeholder="Write your message..." defaultValue={ ""} />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="default-btn">
                                            Send Message
                                            <span />
                                        </button>
                                        <div id="msgSubmit" className="h3 text-center hidden" />
                                        <div className="clearfix" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Courses Details Area */}

        {/* Modal */}
        <div className="modal fade customVideoModal" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <iframe src="https://www.youtube.com/embed/PCILAgR3q9Y?si=gZ950tYYoK8k1I5R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
