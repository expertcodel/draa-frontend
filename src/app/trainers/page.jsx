import Breadcrumb from "@/component/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default async function Trainers() {
    return (
        <>
            {/*Breadcrumb*/}
            <Breadcrumb title="Trainers" />

            {/* Start Teachers Area */}
            <div className="trainer-area pt-100 pb-70">
                <div className="container">
                    <div className="row g-3">
                        {[...Array(5)].map((_, i) => (
                            <div className="col-md-4 col-12" key={i}>
                                <div className="single-trainer-box">
                                    <img src="/images/trainer/trainer-img1.jpg" alt="image" />
                                    <span className="designation">AERIAL EXPERT</span>
                                    <div className="content">
                                        <h3>ALYSA MAYA</h3>
                                        <ul className="social-link">
                                            <li>
                                                <Link href="#" className="d-block" target="_blank">
                                                    <FontAwesomeIcon icon={faFacebook} />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="d-block" target="_blank">
                                                    <FontAwesomeIcon icon={faTwitter} />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="d-block" target="_blank">
                                                    <FontAwesomeIcon icon={faInstagram} />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="d-block" target="_blank">
                                                    <FontAwesomeIcon icon={faLinkedin} />
                                                </Link>
                                            </li>
                                        </ul>
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