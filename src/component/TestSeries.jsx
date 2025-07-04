"use client"
import Image from "next/image";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight, faAngleRight, faBarsStaggered, faCalendar, faCheckCircle, faDownload, faEye, faPhone, faSearch, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from "@/component/Breadcrumb";
import SortingSelect from "@/component/SortingSelect";
import RangeSlider from "@/component/RangeSlider";
import { useState, useEffect } from "react";
import FilterList from '../component/FilterList.jsx'
export default function TestSeries({ courselist, totalItems, total }) {

    const [courseList, setcourselist] = useState(courselist);
    const [button, setButton] = useState(totalItems);
    const [idx, setIdx] = useState(1);
    const [name, setName] = useState("");
    const [selected, setSelected] = useState(null);
    const [Total, setTotal] = useState(total);

    useEffect(() => {

        setcourselist(courselist)
        setButton(totalItems)
        setTotal(total)
        setName("")

    }, [courselist, total])

    const pagination = async (idx) => {

        if (idx > 0 && idx <= button) {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/test-series/?page=${idx}&name=${name}&sort=${selected}`);
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


        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/test-series/?page=${1}&name=${name}&sort=${selected}`);
        setName(name);
        setIdx(1);
        const res = await response.json();
        if (res.status) {
            setcourselist(res.courselist);
            setButton(Math.ceil(res.totalItems / 12));
            setTotal(res.totalItems);
        }

    }

    return (
        <>
            {/*Breadcrumb*/}
            <Breadcrumb title="Test - Series" />

            {/*searchField*/}
            <div className="searchField">
                <form className="search-box">
                    <input type="text" className="input-search" placeholder="Search for your tests" onChange={(e) => searching(idx, e.target.value)} value={name} />
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                {name !== "" && <FilterList filtered={courseList} />}
            </div>

            {/* <!-- News Section --> */}
            <section className="blog-area ptb-100">
                <div className="container">
                    <div className="elearniv-grid-sorting row align-items-center">
                        <div className="col-md-8 col-sm-7 result-count">
                            <p>
                                We found <span className="count">{Total}</span> Test available for you
                            </p>
                        </div>
                         <div className="col-md-4 col-sm-5 filterOption">
                            <div className="select-box noBG">
                                <label>Sort By:</label>
                                <div className="nice-select">
                                    <SortingSelect setcourselist={setcourselist} selected={selected} setSelected={setSelected} name={name} setIdx={setIdx} setButton={setButton} type={"test-series"} />
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
                        {
                            courseList.map((course, index) => (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="single-blog-post-box">
                                        <div className="post-content">
                                            <span className="category">
                                                {/* {total} Total tests <em>| 16 Free Tests</em> */}
                                                {course.sub_title}
                                            </span>
                                            <h3>
                                                <Link href={`/test-series/${course.slug}`}>
                                                    {course.title}
                                                </Link>
                                            </h3>
                                            <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <div className="post-author d-flex align-items-center">
                                                        <Link href={`/test-series/${course.slug}`} className="default-btn">
                                                            View Test Series
                                                            <span />
                                                        </Link>
                                                    </div>
                                                </li>
                                                {/* <li>
                                                    <FontAwesomeIcon icon={faEye} /> 2k Users
                                                </li> */}
                                                {/* <li className="cursorPointer">
                                                    <FontAwesomeIcon icon={faDownload} /> PDF
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

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
            </section>

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
    );
}