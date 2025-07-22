"use client";
import { faViadeo } from "@fortawesome/free-brands-svg-icons";
import { faAngleUp, faChalkboardTeacher, faClockRotateLeft, faGamepad, faLightbulb, faRobot, faUser, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default  function AboutSection({ aboutDetail }) {
    const pathname = usePathname();
    const aboutSection1=aboutDetail.substr(0,aboutDetail.length/2);
    const aboutSection2=aboutDetail.substr(aboutDetail.length/2,aboutDetail.length/2);
    return (
        <>
            {/* Start About Area */}
            <div className={`about-area bg-fef8ef ptb-100`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                        <div className="image wow animate__animated animate__fadeInLeft">
                                            <img src="/images/about/about-img1.webp" alt="About Us" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                        <div className="image wow animate__animated animate__fadeInDown">
                                            <img src="/images/about/about-img2.webp" alt="About Us" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                        <div className="image wow animate__animated animate__fadeInUp">
                                            <img src="/images/about/about-img3.webp" alt="About Us" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                        <div className="image wow animate__animated animate__fadeInRight">
                                            <img src="/images/about/about-img4.webp" alt="About Us" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content" dangerouslySetInnerHTML={{__html:aboutSection1}}>
                              
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="about-content" dangerouslySetInnerHTML={{__html:aboutSection2}}>
                              
                            </div>
                        </div>

                    </div>
                </div>
                <div className="shape1" data-speed="0.06" data-revert="true">
                    <img src="/images/shape/shape1.png" alt="image" />
                </div>
                <div className="shape2" data-speed="0.06" data-revert="true">
                    {/* <img src="/images/shape/shape2.png" alt="image" /> */}
                </div>
                <div className="shape3" data-speed="0.06" data-revert="true">
                    <img src="/images/shape/shape3.png" alt="image" />
                </div>
                <div className="shape4" data-speed="0.06" data-revert="true">
                    <img src="/images/shape/shape4.png" alt="image" />
                </div>
            </div>
            {/* End About Area */}
        </>
    )
}