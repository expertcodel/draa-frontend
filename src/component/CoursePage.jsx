"use client"
import Breadcrumb from "@/component/Breadcrumb";
import { faAngleLeft, faAngleRight, faBook, faCartShopping, faClock, faPhone, faPlay, faTag, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquareInstagram,
    faSquareFacebook,
    faSquareTwitter,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "./Form";
export default function CoursePage({ courseDetail, faqs, reviews, instructor,category }) {


    const router = useRouter();
    const [level, setLevel] = useState(sessionStorage.getItem('courseDetail') ? JSON.parse(sessionStorage.getItem('courseDetail')) : { level: "1", price: courseDetail.price_level_1 });
    const setCoursedetail = () => {

        sessionStorage.setItem('courseDetail', JSON.stringify({ level: level.level, price: level.price, title: courseDetail.title, course_id: courseDetail.id, mode_of_study: courseDetail.mode_of_study }));
        router.push("/register-course");
    }

    return (
        <>
            {/*Breadcrumb*/}
            <Breadcrumb title={category} />

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
                                    {courseDetail.title}
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
                                        <button className="nav-link" id="faq-tab" data-bs-toggle="tab" data-bs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false">
                                            FAQ
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="Case-Studies-tab" data-bs-toggle="tab" data-bs-target="#Case-Studies" type="button" role="tab" aria-controls="Case-Studies" aria-selected="false">
                                            Case Studies
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
                                        <div className="courses-overview" >
                                            <figure className="courseThumbImg">
                                                <img fill src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/course/prospectus/${courseDetail.prospectus_image}`} alt="image" />
                                            </figure>
                                            <div dangerouslySetInnerHTML={{ __html: courseDetail.course_outline }}></div>

                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="curriculum" role="tabpanel">
                                        <div className="courses-curriculum faq-accordion">
                                            {/* <h3>Python Introduction</h3> */}
                                            <div className="accordion" id="accordionExample">
                                                {courseDetail.level_one && <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button
                                                            className="accordion-button"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseOne"
                                                            aria-expanded="true"
                                                            aria-controls="collapseOne"
                                                        >
                                                            {courseDetail.level_one}
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body" dangerouslySetInnerHTML={{ __html: courseDetail.body_one }}>

                                                        </div>
                                                    </div>
                                                </div>}
                                                {courseDetail.level_two && <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo"
                                                            aria-expanded="false"
                                                            aria-controls="collapseTwo"
                                                        >
                                                            {courseDetail.level_two}
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body" dangerouslySetInnerHTML={{ __html: courseDetail.body_two }}>

                                                        </div>
                                                    </div>
                                                </div>}
                                                {courseDetail.level_three && <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseThree"
                                                            aria-expanded="false"
                                                            aria-controls="collapseThree"
                                                        >
                                                            {courseDetail.level_three}
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body" dangerouslySetInnerHTML={{ __html: courseDetail.body_three }}>

                                                        </div>
                                                    </div>
                                                </div>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="faq" role="tabpanel">
                                        <div className="courses-curriculum faq-accordion">
                                            {/* <h3>Python Introduction</h3> */}
                                            <div className="accordion" id="accordionExample">
                                                {faqs.map((faq, i) => <div className="accordion-item" key={i}>
                                                    <h2 className="accordion-header" id={`heading${i}`}>
                                                        <button
                                                            className={i === 0 ? "accordion-button" : "accordion-button collapsed"}
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#collapse${i}`}
                                                            aria-expanded={i === 0 ? "true" : "false"}
                                                            aria-controls={`collapse${i}`}
                                                        >
                                                            {faq.question}
                                                        </button>
                                                    </h2>
                                                    <div id={`collapse${i}`} className={i === 0 ? `accordion-collapse collapse show` : `accordion-collapse collapse`} aria-labelledby={`heading${i}`} data-bs-parent="#accordionExample">
                                                        <div className="accordion-body" dangerouslySetInnerHTML={{ __html: faq.answer }}>

                                                        </div>
                                                    </div>
                                                </div>)}

                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="Case-Studies" role="tabpanel">
                                        <div className="courses-overview" dangerouslySetInnerHTML={{ __html: courseDetail.case_studies }}>

                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="instructor" role="tabpanel">
                                        <div className="courses-instructor">
                                            <div className="single-advisor-box">
                                                {instructor.map((instructor) => <div className="row align-items-center" key={instructor.id}>
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="advisor-image">
                                                            <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/members/${instructor.image}`} alt="image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 col-md-8">
                                                        <div className="advisor-content">
                                                            <h3>{instructor.name}</h3>
                                                            <span className="sub-title">
                                                                {instructor.rank}
                                                            </span>

                                                            <ul className="social-link">
                                                                <li>
                                                                    <a href={instructor.facebook} className="d-block" target="_blank">
                                                                        <FontAwesomeIcon icon={faSquareFacebook} />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href={instructor.twitter} className="d-block" target="_blank">
                                                                        <FontAwesomeIcon icon={faSquareTwitter} />

                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href={instructor.instagram} className="d-block" target="_blank">
                                                                        <FontAwesomeIcon icon={faSquareInstagram} />

                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href={instructor.linkedin} className="d-block" target="_blank">
                                                                        <FontAwesomeIcon icon={faLinkedin} />

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="reviews" role="tabpanel">

                                        <div className="courses-review-comments">
                                            <h3>{reviews.length} Reviews</h3>
                                            {reviews.map((review, i) => <div className="user-review">
                                                <img src="/images/user/user1.jpg" alt="image" />
                                                <div className="review-rating">
                                                    <div className="review-stars">
                                                        <i className="bx bxs-star checked" />
                                                        <i className="bx bxs-star checked" />
                                                        <i className="bx bxs-star checked" />
                                                        <i className="bx bxs-star checked" />
                                                        <i className="bx bxs-star checked" />
                                                    </div>
                                                    <span className="d-inline-block">{review.name}</span>
                                                </div>
                                                <span className="d-block sub-comment">{review.rating} <i class="fa-solid fa-star" style={{ color: 'green' }} /></span>
                                                <p dangerouslySetInnerHTML={{ __html: review.comment }}>

                                                </p>
                                            </div>)}

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
                                                <input type="radio" id="Level1" name="radio-level" checked={level.level === "1" ? true : false} onChange={() => setLevel({ level: "1", price: courseDetail.price_level_1 })} />
                                                <label htmlFor="Level1">Level-I</label>
                                            </p>
                                            <p>
                                                <input type="radio" id="Level2" name="radio-level" checked={level.level === "2" ? true : false} onChange={() => setLevel({ level: "2", price: courseDetail.price_level_2 })} />
                                                <label htmlFor="Level2">Level-II</label>
                                            </p>
                                            <p>
                                                <input type="radio" id="Level3" name="radio-level" checked={level.level === "3" ? true : false} onChange={() => setLevel({ level: "3", price: courseDetail.price_level_3 })} />
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
                                    <button onClick={setCoursedetail} className="default-btn" type="button">
                                        Register For Course <FontAwesomeIcon icon={faAngleRight} />
                                        <span />
                                    </button>
                                </div>
                            </div>

                            <div className="contact-form mt-3">
                                <h2>Ask Your Query</h2>
                                <Form />
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
                            <iframe src={`https://www.youtube.com/embed/${courseDetail.video_id}?autoplay=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
