import Breadcrumb from "@/component/Breadcrumb";
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBook, faCartShopping, faClock, faPlay, faTag, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function FacultyPage() {
  return (
    <>
        {/*Breadcrumb*/}
        <Breadcrumb title="Profile" />

        {/* Start profile Details Area */}
        <div className="profile-area pt-100 pb-70">
            <div className="container">
                <div className="profile-box">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-4">
                            <div className="image">
                                <Image width={390} height={400} src="/images/advisor/img10.jpg" alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <div className="content">
                                <h3>Sarah Taylor</h3>
                                <span className="sub-title">Agile Project Expert</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <ul className="info">
                                    <li>
                                        <span>Phone Number:</span>{" "}
                                        <a href="tel:+44254588689">(+44) -2545 - 88689</a>
                                    </li>
                                    <li>
                                        <span>Email:</span>{" "}
                                        <a href="mailto:hello@sarahtaylor.com">hello@sarahtaylor.com</a>
                                    </li>
                                </ul>
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
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End profile Details Area */}
    </>
  );
}
