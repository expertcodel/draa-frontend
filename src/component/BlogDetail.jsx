"use client"
import Breadcrumb from "@/component/Breadcrumb";
import blogs from "@/utils/blogs";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { faCalendar, faCheckCircle, faComments, faTag, faUserCircle, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatToReadableDate } from '../utils/ReadableDate.js'
export default function BlogDetail({ blogDetail, contentData, blogList, categoryList }) {


    return (
        <>
            {/*Breadcrumb*/}
            <head>
                <title>{blogDetail.seo_title}</title>
                <meta name="keywords" content={blogDetail.meta_keywords} />
                <meta name="description" content={blogDetail.meta_description} />
            </head>
            <Breadcrumb title={blogDetail.title} />

            {/* Start Blog Details Area */}
            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/blogs/${blogDetail.main_image}`} alt={blogDetail.title} width={810} height={590} />
                                </div>
                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            {/* <li>
                                            <FontAwesomeIcon icon={faFolderOpen} />
                                            <span>{blog.category}</span>
                                        </li> */}
                                            <li>
                                                <FontAwesomeIcon icon={faCalendar} />
                                                <span>{formatToReadableDate(blogDetail.publish_date)}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: contentData }} />

                                </div>
                                {/* <div className="article-footer">
                                    <div className="article-tags">
                                        <span>
                                            <FontAwesomeIcon icon={faTag} />
                                        </span>
                                        <a href="single-course-1.html">Fashion</a>,
                                        <a href="single-course-1.html">Games</a>,
                                        <a href="single-course-1.html">Travel</a>
                                    </div>
                                    <div className="article-share">
                                        <ul className="social">
                                            <li>
                                                <span>Share:</span>
                                            </li>
                                            <li>
                                                <Link href="/" className="facebook" target="_blank">
                                                    <FontAwesomeIcon icon={faFacebook} />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/" className="twitter" target="_blank">
                                                    <FontAwesomeIcon icon={faTwitter} />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/" className="linkedin" target="_blank">
                                                    <FontAwesomeIcon icon={faLinkedin} />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/" className="instagram" target="_blank">
                                                    <FontAwesomeIcon icon={faInstagram} />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <aside className="widget-area">
                                <div className="widget widget_elearniv_posts_thumb">
                                    <h3 className="widget-title">Popular Posts</h3>
                                    {
                                        blogList.map((blog, index) => (
                                            <article className="item" key={index}>
                                                <Link href={`/blog/${blog.slug}`} className="thumb">
                                                    <img className="fullimage cover bg1" role="img" src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/blogs/${blog.main_image}`} />
                                                </Link>
                                                <div className="info">
                                                    <span>{formatToReadableDate(blog.publish_date)}</span>
                                                    <h4 className="title usmall">
                                                        <Link href={`/blog/${blog.slug}`}>
                                                            {blog.title}
                                                        </Link>
                                                    </h4>
                                                </div>
                                                <div className="clear" />
                                            </article>
                                        ))
                                    }
                                </div>
                                <div className="widget widget_categories">
                                    <h3 className="widget-title">Categories</h3>
                                    <ul>
                                        {categoryList.map((category, index) => <li key={index}>
                                            <Link href={`/blog/?category=${category.id}`}>
                                                {category.name} <span className="post-count">({category.count})</span>
                                            </Link>
                                        </li>)}
                                    
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Blog Details Area */}
        </>
    );
}
