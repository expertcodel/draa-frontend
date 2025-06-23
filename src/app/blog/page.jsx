import Breadcrumb from "@/component/Breadcrumb";
import blogs from "@/utils/blogs";
import { faAngleDoubleLeft, faAngleDoubleRight, faCalendar, faLongArrowAltRight, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <>
        {/*Breadcrumb*/}
        <Breadcrumb title="Blog" />

        {/* <!-- News Section --> */}
        <section className="blog-area ptb-100">
            <div className="container">
                <div className="row">
                    {
                        blogs.map((blog, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="single-blog-post">
                                    <div className="post-image">
                                        <Link href={`/blog/${blog.slug}`} className="d-block">
                                            <Image src={blog.image} alt={blog.title} width={750} height={500} />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <Link href={`/blog/${blog.slug}`} className="category">
                                            {blog.category}
                                        </Link>
                                        <h3>
                                            <Link href={`/blog/${blog.slug}`}>
                                                {blog.title}
                                            </Link>
                                        </h3>
                                        <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                            <li>
                                                <div className="post-author d-flex align-items-center">
                                                    <Image src="/images/user/user1.jpg" className="rounded-circle" alt="Author" width={35} height={35} />
                                                    <span>{blog.author}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faCalendar} /> {blog.date}
                                            </li>
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
    </>
  );
}
