"use client"
import Breadcrumb from "@/component/Breadcrumb";
import blogs from "@/utils/blogs";
import { faAngleDoubleLeft, faAngleDoubleRight, faCalendar, faLongArrowAltRight, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { formatToReadableDate } from '../utils/ReadableDate.js'
import { useState } from "react";
export default function Blog({ bloglist, totalItems }) {

   
    const [blogList, setBloglist] = useState(bloglist);
    const [button, setButton] = useState(totalItems);
    const [idx, setIdx] = useState(1);
    

    const pagination = async (idx) => {

        if (idx > 0 && idx <= button) {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/?path=/blog&page=${idx}`);
            setIdx(idx);
            const res = await response.json();
            if (res.status) {
                setBloglist(res.bloglist);
                setButton(Math.ceil(res.totalItems / 9));
            }
        }
    }


    return (
        <>
            {/*Breadcrumb*/}
            <Breadcrumb title="Blog" />

            {/* <!-- News Section --> */}
            <section className="blog-area ptb-100">
                <div className="container">
                    <div className="row">
                        {
                            blogList.map((blog, index) => (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href={`/blog/${blog.slug}`} className="d-block">
                                                <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/blogs/${blog.main_image}`} alt={blog.title} width={750} height={500} />
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            {/* <Link href={`/blog/${blog.slug}`} className="category">
                                                {blog.category}
                                            </Link> */}
                                            <h3>
                                                <Link href={`/blog/${blog.slug}`}>
                                                    {blog.title}
                                                </Link>
                                            </h3>
                                            <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <div className="post-author d-flex align-items-center">

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
                            ))
                        }
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area text-center">
                                <button className="prev page-numbers" onClick={() => pagination(idx - 1)} style={{border:'none'}}>
                                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                                </button>
                                {Array.from({ length: button }, (_, i) => <span className={idx === i + 1 ? "page-numbers current" : "page-numbers"} aria-current="page" key={i} onClick={() => pagination(i + 1)} style={{cursor:'pointer'}}>
                                    {i + 1}
                                </span>)}


                                <button className="next page-numbers" onClick={() => pagination(idx + 1)} style={{border:'none'}}>
                                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
