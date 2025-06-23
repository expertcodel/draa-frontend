import Image from "next/image";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight, faAngleRight, faBarsStaggered, faCalendar, faCheckCircle, faDownload, faEye, faPhone, faSearch, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from "@/component/Breadcrumb";
import SortingSelect from "@/component/SortingSelect";
import RangeSlider from "@/component/RangeSlider";

export default async function Leaderahip() {

    return (
        <>
            {/*Breadcrumb*/}
            <Breadcrumb title="Test - Leaderahip" />
                        
            {/*searchField*/}
            <div className="searchField">
                <form className="search-box">
                    <input type="text" className="input-search" placeholder="Search for your tests" />
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>

            {/* <!-- News Section --> */}
            <section className="blog-area ptb-100">
                <div className="container">
                    <div className="elearniv-grid-sorting row align-items-center">
                        <div className="col-md-8 col-sm-7 result-count">
                            <p>
                                We found <span className="count">12</span> Test available for you
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
                        {
                            [...Array(8)].map((_, index) => (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="single-blog-post-box">
                                        <div className="post-content">
                                            <span className="category">
                                                1792 Total tests <em>| 16 Free Tests</em>
                                            </span>
                                            <h3>
                                                <Link href="/leadership/1">
                                                    Leadership Level Test -180 Q 28-May
                                                </Link>
                                            </h3>
                                            <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <div className="post-author d-flex align-items-center">
                                                        <Link href="/leadership/1" className="default-btn">
                                                            View Test Series
                                                            <span />
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon={faEye} /> 2k Users
                                                </li>
                                                {/* <li className="cursorPointer">
                                                    <FontAwesomeIcon icon={faDownload} /> PDF
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

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