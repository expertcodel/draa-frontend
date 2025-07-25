"use client"
import Image from "next/image";
// import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleUp, faBookBookmark, faCalendar, faClockRotateLeft, faDesktop, faGlobe, faHeart, faNoteSticky, faPeopleGroup, faSearch, faTimes, faTimesCircle, faUser, faUserCheck, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faViadeo } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import ThumbnailCourseCarousel from "@/component/ThumbnailCourseCarousel";
import ThumbnailPopularCourseCarousel from "@/component/ThumbnailPopularCourseCarousel";
import TestimonialsCarousel from "@/component/TestimonialsCarousel";
import AboutSection from "@/component/AboutSection";
import TestimonialOdometer from "@/component/TestimonialOdometer";
import SingleBookCarousel from "@/component/SingleBookCarousel";
import ThumbnailTestSeriesCarousel from "@/component/ThumbnailTestSeriesCarousel";
import { formatToReadableDate } from '../utils/ReadableDate.js'
import Tooltip from "./Tooltip.jsx";
import { useState, useEffect } from "react";
import HeroSilderCarousel from "./HeroSilderCarousel.jsx";
import SearchForm from './SearchForm';

export default function Home({ blogList, bookList, testimoniallist, category, courselist, testSerieslist,sliderlist ,aboutDetail}) {


    const [courseList, setCourselist] = useState(courselist);
    const [message, setMessage] = useState(typeof window !== 'undefined' && sessionStorage.getItem('successMsg') ? sessionStorage.getItem('successMsg') : "")
    useEffect(() => {



        const subscribe = async (email) => {

            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/createNewsletter?email=${email}`, {
                method: 'GET'
            });

            const res = await response.json();
            setMessage(res.message);
            const timer = setTimeout(() => {
                setMessage("");
                sessionStorage.removeItem('successMsg');
            }, 3000);

            return () => clearTimeout(timer);

        }

        const query = window.location.search;
        const email = new URLSearchParams(query).get('email');
        if (email) {
            subscribe(email)
        }



    }, [])

    useEffect(() => {

        if (message !== "") {
            const timer = setTimeout(() => {
                setMessage("");
                sessionStorage.removeItem('successMsg');
            }, 3000);

            return () => clearTimeout(timer);
        }

    }, [])
    const courseBycategory = async (course_category_id) => {

        try {

            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courseByCategory/?course_category_id=${course_category_id}`, { method: 'GET' });
            const res = await response.json();
            if (res.status) {
                setCourselist(res.courselist);
            }

        } catch (error) {

            console.log(error);

        }


    }

    return (
        <>

            {/* Start Main Banner Area */}
            <div className="banner-wrapper-area">
                {

                    message !== "" && <Tooltip message={message} />
                }
                <div className="container heroSlider">
                    <HeroSilderCarousel sliderlist={sliderlist}/>
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
                    <div className="banner-inner-area">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-12">
                                <div className="single-banner-box">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faDesktop} />
                                    </div>
                                    <h3>10,000 Online Courses</h3>
                                    <p>Lorem ipsum dolor sit amet consectets.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="single-banner-box">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faUserFriends} />
                                    </div>
                                    <h3>Experts Teachers</h3>
                                    <p>Lorem ipsum dolor sit amet consectets.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="single-banner-box">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </div>
                                    <h3>Lifetime Access</h3>
                                    <p>Lorem ipsum dolor sit amet consectets.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider" />
            </div>
            {/* End Main Banner Area */}

            <div className="bg-f5f7fa py-5"></div>
            {/* Start Courses Area */}
            <div className="courses-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">Learn At Your Own Pace</span>
                        <h2>eLearniv Popular Courses</h2>
                        <p>
                            Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 courses-details-desc mt-0">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                {category.map((category, i) => <li className="nav-item" role="presentation" key={category.id}>
                                    <button className={i === 0 ? "nav-link active" : "nav-link"} id="overview-tab" data-bs-toggle="tab" data-bs-target={`#${category.slug}`} type="button" role="tab" aria-controls="overview" aria-selected={i === 0 ? "true" : "false"} onClick={() => courseBycategory(category.id)}>
                                        {category.name}
                                    </button>
                                </li>)}

                            </ul>
                            <div className="tab-content px-0" id="myTabContent">
                                {category.map((category, i) => <div className={i === 0 ? "tab-pane fade show active" : "tab-pane fade"} id={category.slug} role="tabpanel" key={i}>
                                    <ThumbnailPopularCourseCarousel courselist={courseList} />
                                </div>)}
                                {/* <div className="tab-pane fade" id="curriculum" role="tabpanel">
                                    2
                                </div>
                                <div className="tab-pane fade" id="instructor" role="tabpanel">
                                    3
                                </div>
                                <div className="tab-pane fade" id="reviews" role="tabpanel">
                                    <ThumbnailPopularCourseCarousel courselist={courselist} />
                                </div>
                                <div className="tab-pane fade" id="test" role="tabpanel">
                                    5
                                </div> */}
                            </div>

                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="courses-info">
                                <p>
                                    Enjoy the top notch learning methods and achieve next level skills! You are the creator of your own career &amp; we will guide you through that.{" "}
                                    <Link href="/courses">View ALl</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Courses Area */}

            <AboutSection aboutDetail={aboutDetail} />

            {/* Start Test Series */}
            <div className="features-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">Test Series</span>
                        <h2>Ace Every Exam with Our Test Series</h2>
                        <p>
                            Boost your preparation with expertly crafted test series designed to improve accuracy, speed, and confidence for competitive exams.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ThumbnailTestSeriesCarousel testSerieslist={testSerieslist} />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="courses-info">
                            <p>
                                Enjoy the top notch learning methods and achieve next level skills! You are the creator of your own career &amp; we will guide you through that.{" "}
                                <Link href="/test-series">View ALl</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Test Series */}

            <TestimonialOdometer testimoniallist={testimoniallist} />

            {/* Start Get Instant Courses Area */}
            <div className="get-instant-courses-area bg-fef8ef">
                <div className="container">
                    <SingleBookCarousel bookList={bookList} />
                    <div className="row pb-5">
                        <div className="col-lg-12 col-md-12">
                            <div className="blog-post-info">
                                <p>
                                    Get into details now?​ <Link href="/books">View all books</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Get Instant Courses Area */}

            {/* Start Blog Area */}
            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">News and Blogs</span>
                        <h2>Our Latest Publications</h2>
                        <p>
                            We always give extra care to our student's skills improvements and feel excited to share our latest research and learnings!
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        {
                            blogList.map((blog) =>
                                <div className="col-lg-4 col-md-6" key={blog.id}>
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href={`/blog/${blog.slug}`} className="d-block">
                                                <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/blogs/${blog.main_image}`} alt={blog.title} />
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <h3>
                                                <Link href={`/blog/${blog.slug}`}>
                                                    {blog.title}
                                                </Link>
                                            </h3>
                                            <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <div className="post-author d-flex align-items-center">
                                                        <img src="/images/user/user1.jpg" className="rounded-circle" alt="image" />
                                                        <span>{blog.author}</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faCalendar} /> {formatToReadableDate(blog.publish_date)}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        <div className="col-lg-12 col-md-12">
                            <div className="blog-post-info">
                                <p>
                                    Get into details now?​ <Link href="/blog">View all posts</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Blog Area */}

            {/* Start View All Courses Area */}
            <div className="view-all-courses-area bg-fef8ef pt-0">
                <div className="container-fluid px-md-0">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="view-all-courses-content">
                                <span className="sub-title">Distance learning</span>
                                <h2>Feel Like You Are Attending Your Classes Physically!</h2>
                                <p>
                                    eLearniv training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classes virtually by sitting in your comfort zone.
                                </p>
                                <Link href="/courses" className="default-btn">
                                    <i className="flaticon-agenda" /> View Courses
                                    <span />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="view-all-courses-image">
                                <img src="/images/man-with-laptop.webp" alt="Banner" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape1" data-speed="0.06" data-revert="true">
                    <img src="/images/shape/shape1.png" alt="image" />
                </div>
                <div className="shape9" data-speed="0.06" data-revert="true">
                    <img src="/images/shape/shape8.svg" alt="image" />
                </div>
            </div>
            {/* End View All Courses Area */}

        </>
    );
}
