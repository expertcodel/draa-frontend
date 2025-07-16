"use client"
import Breadcrumb from "@/component/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import SortingSelect from "@/component/SortingSelect";
import { faAngleDoubleLeft, faAngleDoubleRight, faAngleRight, faBarsStaggered, faBookBookmark, faCartShopping, faHeart, faPeopleGroup, faSearch } from "@fortawesome/free-solid-svg-icons";
import RangeSlider from "@/component/RangeSlider";
import { useState, useEffect, useRef } from "react";
import FilterList from '../component/FilterList.jsx'
import { useRouter } from "next/navigation";
import DOMPurify from 'dompurify';
export default function Books({ booklist, totalItems, total, book_category }) {

    const [bookList, setbooklist] = useState(booklist);
    const [button, setButton] = useState(totalItems);
    const [idx, setIdx] = useState(1);
    const [name, setName] = useState("");
    const [Total, setTotal] = useState(total);
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState(-1);
    const [bsOffcanvas, setBsOffcanvas] = useState(null);
    const offcanvasRef = useRef(null);
    const [value, setValue] = useState([200, 500]);
    const router = useRouter();
    const setBookdetail = (bookDetail) => {

        sessionStorage.setItem('BookDetail', JSON.stringify({ price: bookDetail.price, title: bookDetail.title, book_id: bookDetail.id }));
        router.push("/book-checkout");
    }

    useEffect(() => {

        import("bootstrap/dist/js/bootstrap.esm.min.js").then((module) => {
            const { Offcanvas } = module;
            const instance = Offcanvas.getInstance(offcanvasRef.current) || new Offcanvas(offcanvasRef.current);
            setBsOffcanvas(instance);
        });
        setbooklist(booklist)
        setButton(totalItems)
        setTotal(total)
        setName("")

    }, [booklist, total])


    const pagination = async (idx) => {

        if (idx > 0 && idx <= button) {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/books/?page=${idx}&name=${name}&book_category=${book_category}&sort=${selected}&value=${JSON.stringify(value)}`);
            setIdx(idx);
            const res = await response.json();
            if (res.status) {
                setbooklist(res.booklist);
                setButton(Math.ceil(res.totalItems / 12));
                setTotal(res.totalItems);

            }
        }
    }

    const searching = async (idx, name) => {


        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/books/?page=${1}&name=${name}&book_category=${book_category}&sort=${selected}&value=${JSON.stringify(value)}`);
        setName(name);
        setIdx(1);
        const res = await response.json();
        if (res.status) {
            setbooklist(res.booklist);
            setButton(Math.ceil(res.totalItems / 12));
            setTotal(res.totalItems);
        }

    }

    const applyFilter = async (value) => {

        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/books/?page=${1}&name=${name}&book_category=${book_category}&sort=${selected}&value=${JSON.stringify(value)}`);
        setName(name);
        setIdx(1);
        const res = await response.json();
        setLoading(false);
        if (res.status) {

            setbooklist(res.booklist);
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
            <Breadcrumb title={book_category === 'null' ? "Books" : book_category.replace(/[^a-zA-Z0-9]/g, ' ') + " Books"} />

            {/*searchField*/}
            <div className="searchField">
                <form className="search-box">
                    <input type="text" className="input-search" placeholder="Waht do you want to learn?" onChange={(e) => searching(idx, e.target.value)} value={name} />
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                {name !== "" && <FilterList filtered={bookList} />}
            </div>

            {/* Start books Area */}
            <div className="products-area ptb-100">
                <div className="container">
                    <div className="elearniv-grid-sorting row align-items-center">
                        <div className="col-md-8 col-sm-7 result-count">
                            <p>
                                We found <span className="count">{Total}</span> books available for you
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-5 filterOption">
                            <div className="select-box noBG">
                                <label>Sort By:</label>
                                <div className="nice-select">
                                    <SortingSelect setcourselist={setbooklist} selected={selected} setSelected={setSelected} name={name} course_name={book_category} setIdx={setIdx} setButton={setButton} type={"books"} value={value} />
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
                        {bookList.map((book, i) => {
                            const cleanDescription = DOMPurify.sanitize(book.description, {
                                FORBID_ATTR: ['style'], // remove inline styles
                            });
                            return (
                            <div className="col-md-4 col-sm-6 col-12" key={i}>
                                <div className="single-products-box">
                                    <div className="products-image">
                                        <Link href={`/books/${book.slug}`}>
                                            <img width={670} height={800} src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/book/featured/${book.image}`} className="main-image" alt="image" />
                                            {/* <Image src="/images/products/img2.jpg" alt="image" width={670} height={800} className="main-image" /> */}
                                        </Link>
                                    </div>
                                    <div className="products-content">
                                        <h3>
                                            <Link href={`/books/${book.slug}`}>  {book.title}</Link>
                                        </h3>
                                        <div className="price">
                                            <p className="line-clamp-4" dangerouslySetInnerHTML={{ __html: cleanDescription }}>

                                            </p>
                                            {/* <p>
                                                {book.author}
                                            </p> */}
                                        </div>
                                        <div className="position-relative w-100 d-flex align-items-center">
                                            <Link href={`/books/${book.slug}`} className="default-btn me-2">
                                                View more <FontAwesomeIcon icon={faAngleRight} />
                                                <span />
                                            </Link>
                                            <button onClick={() => setBookdetail(book)} className="default-btn">
                                                Buy Now <FontAwesomeIcon icon={faAngleRight} />
                                                <span />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
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

            <div className="offcanvas offcanvas-end filterMainSec"
                tabIndex={-1}
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
                ref={offcanvasRef}>
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Select Filter {(value[0] !== 200 || value[1] !== 500) && <small onClick={() => [setValue([200, 500]), applyFilter([200, 500])]} style={{ cursor: 'pointer' }}>Reset</small>}</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                    <div className="card">

                        <div className="card-header border-top">
                            <h3 className="card-title">Price Range</h3>
                        </div>
                        <div className="card-body">
                            <h6>
                                <RangeSlider value={value} setValue={setValue} />
                            </h6>
                            {/* <div id="mySlider" /> */}
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn default-btn applyBtn" onClick={() => applyFilter(value)}>
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