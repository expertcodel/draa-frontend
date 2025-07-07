"use client"
import Breadcrumb from "@/component/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import SortingSelect from "@/component/SortingSelect";
import { faAngleDoubleLeft, faAngleDoubleRight, faBarsStaggered, faBookBookmark, faHeart, faPeopleGroup, faSearch } from "@fortawesome/free-solid-svg-icons";
import RangeSlider from "@/component/RangeSlider";
import { useState, useEffect, useRef } from "react";
import FilterList from '../component/FilterList.jsx'


export default function Courses({ courselist, totalItems, total, course_name }) {

    const offcanvasRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [courseList, setcourselist] = useState(courselist);
    const [hours, setHours] = useState("0");
    const [Total, setTotal] = useState(total);
    const [button, setButton] = useState(totalItems);
    const [idx, setIdx] = useState(1);
    const [name, setName] = useState("");
    const [selected, setSelected] = useState(-1);
    const [bsOffcanvas, setBsOffcanvas] = useState(null);


    useEffect(() => {

        import("bootstrap/dist/js/bootstrap.esm.min.js").then((module) => {
            const { Offcanvas } = module;
            const instance = Offcanvas.getInstance(offcanvasRef.current) || new Offcanvas(offcanvasRef.current);
            setBsOffcanvas(instance);
        });
        setcourselist(courselist)
        setButton(totalItems)
        setTotal(total)
        setName("")

    }, [courselist, total])




    const pagination = async (idx) => {

        if (idx > 0 && idx <= button) {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courses/?page=${idx}&name=${name}&course_name=${course_name}&sort=${selected}&hours=${hours}`);
            setIdx(idx);
            const res = await response.json();
            if (res.status) {
                setcourselist(res.courselist);
                setButton(Math.ceil(res.totalItems / 12));
                setTotal(res.totalItems);
            }
        }
    }

    const searching = async (idx, name) => {


        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courses/?page=${1}&name=${name}&course_name=${course_name}&sort=${selected}&hours=${hours}`);
        setName(name);
        setIdx(1);
        const res = await response.json();
        if (res.status) {
            setcourselist(res.courselist);
            setButton(Math.ceil(res.totalItems / 12));
            setTotal(res.totalItems);
        }

    }

    const applyFilter = async (hours) => {

        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courses/?page=${1}&name=${name}&course_name=${course_name}&sort=${selected}&hours=${hours}`);
        setName(name);
        setIdx(1);
        const res = await response.json();
        setLoading(false);
        if (res.status) {

            setcourselist(res.courselist);
            setButton(Math.ceil(res.totalItems / 12));
            setTotal(res.totalItems);
            if (bsOffcanvas) {
                bsOffcanvas.hide();
            }
        }

    }

    const openOffcanvas = () => {
        if (bsOffcanvas) {
            bsOffcanvas.show();
        }
    };

    return (
        <>
            {/*Breadcrumb*/}
            <Breadcrumb title={course_name === 'null' ? "Courses" : course_name} />

            {/*searchField*/}
            <div className="searchField">
                <form className="search-box">
                    <input type="text" className="input-search" placeholder="What do you want to learn?" onChange={(e) => searching(idx, e.target.value)} value={name} />
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    {name !== "" && <FilterList filtered={courseList} />}
                </form>

            </div>

            {/* Start Courses Area */}
            <div className="courses-area courses-section pt-100 pb-70">
                <div className="container">
                    <div className="elearniv-grid-sorting row align-items-center">
                        <div className="col-md-8 col-sm-7 result-count">
                            <p>
                                We found <span className="count">{Total}</span> courses available for you
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-5 filterOption">
                            <div className="select-box noBG">
                                <label>Sort By:</label>
                                <div className="nice-select">
                                    <SortingSelect setcourselist={setcourselist} selected={selected} setSelected={setSelected} name={name} course_name={course_name} setIdx={setIdx} setButton={setButton} type={"courses"} hours={hours} />
                                </div>
                            </div>
                            <div className="customFilter">
                                <button
                                    className="filterBtn"
                                    type="button"
                                    onClick={openOffcanvas}
                                    aria-controls="offcanvasRight"
                                >
                                    <FontAwesomeIcon className="active" icon={faBarsStaggered} /> Filter
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

                                            <img width={750} height={500} src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/course/featured/${course.image}`} alt="image" />
                                            {/* <Image src="/images/products/img2.jpg" alt="image" width={750} height={500} /> */}
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


            <div
                className="offcanvas offcanvas-end filterMainSec"
                tabIndex={-1}
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
                ref={offcanvasRef}
            >
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Select Filter {hours!=="0" && <small onClick={()=>[setHours("0"),applyFilter("0")]} style={{cursor:'pointer'}}>Reset</small>}</h5>
                    
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
                <div className="offcanvas-body">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Duration</h3>
                        </div>
                        <div className="card-body">
                            <div className="form-check">
                                <input type="radio" className="form-check-input" id="level1" name="hours" onChange={() => setHours("10")} checked={hours==="10"}/>
                                <label className="form-check-label" htmlFor="level1">10+ hours</label>
                            </div>
                            <div className="form-check">
                                <input type="radio" className="form-check-input" id="level2" name="hours" onChange={() => setHours("15")} checked={hours==="15"}/>
                                <label className="form-check-label" htmlFor="level2">15+ hours</label>
                            </div>
                            <div className="form-check">
                                <input type="radio" className="form-check-input" id="level3" name="hours" onChange={() => setHours("20")} checked={hours==="20"}/>
                                <label className="form-check-label" htmlFor="level3">20+ hours</label>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn default-btn applyBtn" onClick={()=>applyFilter(hours)}>
                                {loading ? <div className="spinner-border text-white" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div> : <> Apply Filter
                                    <span /> </>}


                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}