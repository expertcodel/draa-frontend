import Image from "next/image";
import Link from 'next/link';
import { faAngleLeft, faAngleRight, faBook, faCartShopping, faClock, faEye, faPhone, faPlay, faTag, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumb from "@/component/Breadcrumb";

export default async function LeaderahipDetails() {

    return (
        <>
            {/*Breadcrumb*/}
            <Breadcrumb title="Test - Test Category" />

            {/* Start Courses Details Area */}
            <div className="courses-details-area pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            {/* <div className="single-courses-item mt-5">
                                <div className="row align-items-center">
                                    <div className="col-12">
                                        <div className="courses-content helpDiv">
                                            <h3>
                                                <Link href="single-course-1.html">
                                                    Agile Crash Course: Agile Project Management
                                                </Link>
                                            </h3>
                                            <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <FontAwesomeIcon icon={faBook} /> 1088 Total Tests
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faClock} /> Last updated on May 28, 2025
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faEye} /> 2k Users
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faBook} /> <mark>3 Free Tests</mark>
                                                </li>
                                            </ul>
                                            <a href="/" className="default-btn mt-4">
                                                Add This Test Series
                                                <span />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className="courses-details-desc">
                                <h5>
                                    Agile Crash Course: Agile Project Management
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
                                            3 Free Test
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="overview" role="tabpanel">
                                        <div className="courses-overview">
                                            <h3>Course Description</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
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
                                        <div className="courses-overview">
                                            <h3>Course Description</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
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
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="courses-details-info mt-5">
                                <div className="btn-box">
                                    <span className="text-center d-block"><FontAwesomeIcon icon={faClock} /> Call for Assistance</span>
                                    <a href="tel:+44587154756" className="default-btn">
                                        <FontAwesomeIcon icon={faPhone} /> +1 (123) 456 7890
                                        <span />
                                    </a>
                                </div>
                                <div className="btn-box">
                                    {/* <span>Registration is closed. We will open soon.</span> */}
                                    <Link href="/" className="default-btn">
                                        Add This Test Series <FontAwesomeIcon icon={faAngleRight} />
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
        </>
    );
}