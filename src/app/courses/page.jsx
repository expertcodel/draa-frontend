import Breadcrumb from "@/component/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import SortingSelect from "@/component/SortingSelect";
import { faAngleDoubleLeft, faAngleDoubleRight, faBarsStaggered, faBookBookmark, faHeart, faPeopleGroup, faSearch } from "@fortawesome/free-solid-svg-icons";
import RangeSlider from "@/component/RangeSlider";

export default async function Courses() {
    return (
        <>
            {/*Breadcrumb*/}
            <Breadcrumb title="Courses" />

            {/*searchField*/}
            <div className="searchField">
                <form className="search-box">
                    <input type="text" className="input-search" placeholder="Waht do you want to learn?" />
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>

            {/* Start Courses Area */}
            <div className="courses-area courses-section pt-100 pb-70">
                <div className="container">
                    <div className="elearniv-grid-sorting row align-items-center">
                        <div className="col-md-8 col-sm-7 result-count">
                            <p>
                                We found <span className="count">12</span> courses available for you
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-5 filterOption">
                            <div className="select-box noBG">
                                <label>Sort By:</label>
                                <div className="nice-select">
                                    <SortingSelect />
                                </div>                                
                            </div>
                            <div className="customFilter">
                                <button className="filterBtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                    <FontAwesomeIcon className="active" icon={faBarsStaggered} /> FIlter
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {[...Array(10)].map((_, i) => (
                            <div className="col-md-4 col-sm-6 col-12">
                                <div className="single-courses-box">
                                    <div className="courses-image">
                                        <Link href="/courses/1" className="d-block image">
                                            <Image width={750} height={500} src="/images/courses/img1.jpg" alt="image" />
                                        </Link>
                                        {/* <Link href="/courses/1" className="fav">
                                            <FontAwesomeIcon icon={faHeart} /> <i className="flaticon-heart" />
                                        </Link>
                                        <div className="price shadow">$39</div> */}
                                    </div>
                                    <div className="courses-content">
                                        {/* <div className="course-author d-flex align-items-center">
                                            <Image width={300} height={300} src="/images/user/user1.jpg" className="rounded-circle" alt="image" />
                                            <span>Alex Morgan</span>
                                        </div> */}
                                        <h3>
                                            <Link href="/courses/1">
                                                Deep Learning a-z™: Hands-on Artificial Neural Networks
                                            </Link>
                                        </h3>
                                        <p>
                                            This master level course is for you if you are looking to learn the DL &amp; ANN topics in and out within a short time!
                                        </p>
                                        <Link href="/" className="default-btn">
                                            Enroll Now
                                            <span />
                                        </Link>
                                        {/* <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                            <li>
                                                <FontAwesomeIcon icon={faBookBookmark} /> 15 Lessons
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faPeopleGroup} /> 145 Students
                                            </li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area text-center">
                                <Link href="/" className="prev page-numbers">
                                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                                </Link>
                                <span className="page-numbers current" aria-current="page">
                                    1
                                </span>
                                <Link href="/" className="page-numbers">
                                    2
                                </Link>
                                <Link href="/" className="page-numbers">
                                    3
                                </Link>
                                <Link href="/" className="page-numbers">
                                    4
                                </Link>
                                <Link href="/" className="next page-numbers">
                                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-end filterMainSec" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Select Filter</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Skill Level</h3>
                        </div>
                        <div className="card-body">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="level1" />
                                <label className="form-check-label" htmlFor="level1">
                                    Level-1
                                </label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="level2" />
                                <label className="form-check-label" htmlFor="level2">
                                    Level-2
                                </label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="level3" />
                                <label className="form-check-label" htmlFor="level3">
                                    Level-3
                                </label>
                            </div>
                        </div>
                        <div className="card-header border-top">
                            <h3 className="card-title">Price Range</h3>
                        </div>
                        <div className="card-body">
                            <h6>
                                <RangeSlider />
                            </h6>
                            {/* <div id="mySlider" /> */}
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn default-btn applyBtn">
                                Apply Filter
                                <span />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}