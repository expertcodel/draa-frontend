"use client"
import Breadcrumb from "@/component/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import SortingSelect from "@/component/SortingSelect";
import { faAngleDoubleLeft, faAngleDoubleRight, faBarsStaggered, faBookBookmark, faHeart, faPeopleGroup, faSearch } from "@fortawesome/free-solid-svg-icons";
import RangeSlider from "@/component/RangeSlider";
import { useState, useEffect } from "react";
import FilterList from '../component/FilterList.jsx'
export default function Courses({ courselist, totalItems, total, course_name }) {

    const [courseList, setcourselist] = useState(courselist);
    const [button, setButton] = useState(totalItems);
    const [idx, setIdx] = useState(1);
    const [name, setName] = useState("");
    const [selected, setSelected] = useState(null);

    useEffect(() => {

        setcourselist(courselist)
        setButton(totalItems)

    }, [courselist, total])

    const pagination = async (idx) => {

        if (idx > 0 && idx <= button) {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courses/?page=${idx}&name=${name}&course_name=${course_name}&sort=${selected}`);
            setIdx(idx);
            const res = await response.json();
            if (res.status) {
                setcourselist(res.courselist);
                setButton(Math.ceil(res.totalItems / 12));
            }
        }
    }

    const searching = async (idx, name) => {


        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courses/?page=${1}&name=${name}&course_name=${course_name}&sort=${selected}`);
        setName(name);
        setIdx(1);
        const res = await response.json();
        if (res.status) {
            setcourselist(res.courselist);
            setButton(Math.ceil(res.totalItems / 12));
        }

    }

    return (
        <>
            {/*Breadcrumb*/}
            <Breadcrumb title="Courses" />

            {/*searchField*/}
            <div className="searchField">
                <form className="search-box">
                    <input type="text" className="input-search" placeholder="What do you want to learn?" onChange={(e) => searching(idx, e.target.value)} />
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                {name!=="" && <FilterList filtered={courseList}/>}
            </div>

            {/* Start Courses Area */}
            <div className="courses-area courses-section pt-100 pb-70">
                <div className="container">
                    <div className="elearniv-grid-sorting row align-items-center">
                        <div className="col-md-8 col-sm-7 result-count">
                            <p>
                                We found <span className="count">{total}</span> courses available for you
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-5 filterOption">
                            <div className="select-box noBG">
                                <label>Sort By:</label>
                                <div className="nice-select">
                                    <SortingSelect  setcourselist={setcourselist} selected={selected} setSelected={setSelected} name={name} course_name={course_name} setIdx={setIdx} setButton={setButton} type={"courses"}/>
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
                        {courseList.map((course, i) => (
                            <div className="col-md-4 col-sm-6 col-12" key={course.id}>
                                <div className="single-courses-box">
                                    <div className="courses-image">
                                        <Link href={`/courses/${course.slug}`} className="d-block image">
                                       
                                            {/* <img width={750} height={500} src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/course/featured/${course.image}`} alt="image" /> */}
                                            <Image src="/images/products/img2.jpg" alt="image" width={750} height={500} />
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
                                            <Link href={`/courses/${course.slug}`}>
                                                {course.title}
                                            </Link>
                                        </h3>
                                        <p>
                                            {course.sub_title}
                                        </p>
                                        <Link href={`/courses/${course.slug}`} className="default-btn">
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
                        {button > 1 && <div className="col-lg-12 col-md-12">
                            <div className="pagination-area text-center">
                                <button className="prev page-numbers" onClick={() => pagination(idx - 1)} style={{ border: 'none' }}>
                                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                                </button>
                                {Array.from({ length: button }, (_, i) => <span className={idx === i + 1 ? "page-numbers current" : "page-numbers"} aria-current="page" key={i} onClick={() => pagination(i + 1)} style={{ cursor: 'pointer' }}>
                                    {i + 1}
                                </span>)}


                                <button className="next page-numbers" onClick={() => pagination(idx + 1)} style={{ border: 'none' }}>
                                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                                </button>
                            </div>
                        </div>}
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