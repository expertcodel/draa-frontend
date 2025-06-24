import Breadcrumb from "@/component/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default async function Faculty() {
    return (
        <>
            {/*Breadcrumb*/}
            <Breadcrumb title="Meet our Team Members" />

            {/* Start Teachers Area */}
            <div className="advisor-area pt-100 pb-70">
                <div className="container">
                    <div className="row g-3">
                        {[...Array(5)].map((_, i) => (
                            <div className="col-md-6 col-12" key={i}>
                                <div className="single-advisor-box">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-md-4">
                                            <div className="advisor-image">
                                                <Image width={230} height={340} src="/images/advisor/img1.jpg" alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-8">
                                            <div className="advisor-content">
                                                <h3>
                                                    <Link href="/faculty/1">William James</Link>
                                                </h3>
                                                <span className="sub-title">Project Management Expert</span>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol aliqua.
                                                </p>
                                                <ul className="social-link">
                                                    <li>
                                                        <Link href="/" className="d-block" target="_blank">
                                                            <FontAwesomeIcon icon={faFacebook} />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/" className="d-block" target="_blank">
                                                            <FontAwesomeIcon icon={faTwitter} />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/" className="d-block" target="_blank">
                                                            <FontAwesomeIcon icon={faInstagram} />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/" className="d-block" target="_blank">
                                                            <FontAwesomeIcon icon={faLinkedin} />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* End Teachers Area */}
        </>
    )
}