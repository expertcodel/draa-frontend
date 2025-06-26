"use client"
import Image from "next/image";
// import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleUp, faBookBookmark, faClockRotateLeft, faDesktop, faGlobe, faHeart, faNoteSticky, faPeopleGroup, faSearch, faTimes, faTimesCircle, faUser, faUserCheck, faUserFriends } from "@fortawesome/free-solid-svg-icons";
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
import { useState } from "react";


export default function Home({ blogList, bookList, testimoniallist, category, courselist }) {


    const [courseList, setCourselist] = useState(courselist);
    const courseBycategory = async (course_category_id) => {

        try {

            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courseByCategory/?course_category_id=${course_category_id}`, { method: 'GET' });
            const res=await response.json();
            if(res.status)
            {
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
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="banner-wrapper-content">
                                <h1>Build Skills With Experts Any Time, Anywhere</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <form>
                                    <label>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </label>
                                    <input type="text" className="input-search" placeholder="What do you want to learn?" />
                                    <button type="submit" className="default-btn">
                                        Search Now
                                        <span />
                                    </button>
                                </form>
                                <ul className="popular-search-list">
                                    <li>
                                        <span>Popular:</span>
                                    </li>
                                    <li>
                                        <Link href="/">Development</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Marketing</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Illustration</Link>
                                    </li>
                                    <li>
                                        <Link href="/">UX/UI</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="banner-wrapper-image">
                                <Image width={550} height={620} src="/images/banner/banner-img2.png" alt="image" />
                                <div className="banner-shape8" data-speed="0.06" data-revert="true">
                                    <img src="/images/shape/banner-shape8.png" alt="image" />
                                </div>
                                <div className="banner-shape9" data-speed="0.06" data-revert="true">
                                    <img src="/images/shape/banner-shape9.png" alt="image" />
                                </div>
                                <div className="banner-shape10" data-speed="0.06" data-revert="true">
                                    <img src="/images/shape/banner-shape10.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-inner-area">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-banner-box">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faDesktop} />
                                    </div>
                                    <h3>10,000 Online Courses</h3>
                                    <p>Lorem ipsum dolor sit amet consectets.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-banner-box">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faUserFriends} />
                                    </div>
                                    <h3>Experts Teachers</h3>
                                    <p>Lorem ipsum dolor sit amet consectets.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
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
                                    <button className={i === 0 ? "nav-link active" : "nav-link"} id="overview-tab" data-bs-toggle="tab" data-bs-target={`#${category.slug}`} type="button" role="tab" aria-controls="overview" aria-selected={i === 0 ? "true" : "false"} onClick={()=>courseBycategory(category.id)}>
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

            <AboutSection bgClass="bg-fef8ef" />

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
                            <ThumbnailTestSeriesCarousel />
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
                        {blogList.map((blog) => <div className="col-lg-4 col-md-6" key={blog.id}>
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <a href={`/blog/${blog.slug}`} className="d-block">
                                        <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/blogs/${blog.main_image}`} alt="image" />
                                    </a>
                                </div>
                                <div className="post-content">
                                    {/* <a href="blog-1.html" className="category">
                    Education
                </a> */}
                                    <h3>
                                        <a href={`/blog/${blog.slug}`}>
                                            {blog.title}
                                        </a>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <img src="/images/user/user1.jpg" className="rounded-circle" alt="image" />
                                                <span>{blog.author}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <i className="flaticon-calendar" /> {formatToReadableDate(blog.publish_date)}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>)}
                        {/* <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <a href="single-blog-1.html" className="d-block">
                                    <img src="/images/blog/img2.jpg" alt="image" />
                                </a>
                            </div>
                            <div className="post-content">
                                <a href="blog-1.html" className="category">
                    Online
                </a>
                                <h3>
                    <a href="single-blog-1.html">
                    Online Learning Can Prepare Students For A Fast-Changing
                    </a>
                </h3>
                                <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src="/images/user/user2.jpg" className="rounded-circle" alt="image" />
                                            <span>Sarah Taylor</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="flaticon-calendar" /> April 29, 2025
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <a href="single-blog-1.html" className="d-block">
                                    <img src="/images/blog/img3.jpg" alt="image" />
                                </a>
                            </div>
                            <div className="post-content">
                                <a href="blog-1.html" className="category">
                    Learning
                </a>
                                <h3>
                    <a href="single-blog-1.html">
                    As Learning Moves Online, Trigger Warnings Must Too
                    </a>
                </h3>
                                <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src="/images/user/user3.jpg" className="rounded-circle" alt="image" />
                                            <span>David Warner</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="flaticon-calendar" /> April 28, 2025
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                        <div className="col-lg-12 col-md-12">
                            <div className="blog-post-info">
                                <p>
                                    Get into details now?​ <a href="/blog">View all posts</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Blog Area */}

            {/* Start View All Courses Area */}
            <div className="view-all-courses-area bg-fef8ef">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="view-all-courses-content">
                                <span className="sub-title">Distance learning</span>
                                <h2>Feel Like You Are Attending Your Classes Physically!</h2>
                                <p>
                                    eLearniv training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classes virtually by sitting in your comfort zone. Our flexible learning initiatives will help
                                    you to learn better and quicker than the traditional ways of learning skills.
                                </p>
                                <a href="courses-1.html" className="default-btn">
                                    <i className="flaticon-agenda" /> View Courses
                                    <span />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="view-all-courses-image">
                                <img src="/images/man-with-laptop.png" alt="image" />
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

            {/* Start Premium Access Area */}
            <div className="premium-access-area ptb-100">
                <div className="container">
                    <div className="premium-access-content">
                        <span className="sub-title">Affordable Certification</span>
                        <h2>Get Your Quality Skills Certificate Through Online Exam</h2>
                        <p>
                            Students friendly pricing for the certificate programs helps individuals to get their skill certificate easier than ever!
                        </p>
                        <a href="membership-levels.html" className="default-btn">
                            <i className="flaticon-user" /> Get Started Now
                            <span />
                        </a>
                    </div>
                </div>
                <div className="shape3" data-speed="0.06" data-revert="true">
                    <img src="/images/shape/shape3.png" alt="image" />
                </div>
                <div className="shape4" data-speed="0.06" data-revert="true">
                    <img src="/images/shape/shape4.png" alt="image" />
                </div>
                <div className="shape8" data-speed="0.06" data-revert="true">
                    <img src="/images/shape/shape7.png" alt="image" />
                </div>
            </div>
            {/* End Premium Access Area */}

        </>
    );
}
