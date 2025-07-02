import Breadcrumb from "@/component/Breadcrumb";
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBook, faCartShopping, faClock, faPlay, faTag, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function FacultyPage({ memberdetail,about}) {
    return (
        <>
            {/*Breadcrumb*/}
            <Breadcrumb title="Profile" />

            {/* Start profile Details Area */}
            <div className="profile-area pt-100 pb-70">
                <div className="container">
                    <div className="profile-box">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="image">
                                    <Image width={390} height={400} src="/images/advisor/img10.jpg" alt="image" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <div className="content">
                                    <h3>{memberdetail.name}</h3>
                                    <span className="sub-title">{memberdetail.rank}</span>
                                    <p dangerouslySetInnerHTML={{__html:about}}>
                                       
                                    </p>
                                    <ul className="info">
                                        {/* <li>
                                            <span>Phone Number:</span>{" "}
                                            <a href="tel:+44254588689">(+44) -2545 - 88689</a>
                                        </li> */}
                                        <li>
                                            <span>Email:</span>{" "}
                                            <a href="mailto:hello@sarahtaylor.com">{memberdetail.email}</a>
                                        </li>
                                    </ul>
                                    <ul className="social-link">
                                        {memberdetail.facebook && <li>
                                            <Link href={memberdetail.facebook} className="d-block" target="_blank">
                                                <FontAwesomeIcon icon={faFacebook} />
                                            </Link>
                                        </li>}
                                        {memberdetail.twitter && <li>
                                            <Link href={memberdetail.twitter} className="d-block" target="_blank">
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </Link>
                                        </li>}
                                        {memberdetail.instagram && <li>
                                            <Link href={memberdetail.instagram} className="d-block" target="_blank">
                                                <FontAwesomeIcon icon={faInstagram} />
                                            </Link>
                                        </li>}
                                        {memberdetail.linkedin && <li>
                                            <Link href={memberdetail.linkedin} className="d-block" target="_blank">
                                                <FontAwesomeIcon icon={faLinkedinIn} />
                                            </Link>
                                        </li>}
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
