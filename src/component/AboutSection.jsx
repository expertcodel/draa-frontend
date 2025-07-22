"use client";
import { faViadeo } from "@fortawesome/free-brands-svg-icons";
import { faAngleUp, faChalkboardTeacher, faClockRotateLeft, faGamepad, faLightbulb, faRobot, faUser, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DOMPurify from 'dompurify';

export default function AboutSection({ aboutDetail }) {
    const pathname = usePathname();

    

    const htmlString = aboutDetail.replace(/â/g, '-')
        .replace(/â/g, '"')
        .replace(/â/g, '"')
        .replace(/â/g, "'")
        .replace(/â¦/g, '...')
        .replace(/â/g, '-');


    function cleanAttributesFromHtml(htmlString) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');

        const elements = doc.body.querySelectorAll('*');
        elements.forEach(el => {
            // Remove specific unwanted attributes
            el.removeAttribute('rt');
            el.removeAttribute('data-end');
            el.removeAttribute('style'); // You can be more selective if needed
        });

        return doc.body.innerHTML;
    }

    const cleanHtml=cleanAttributesFromHtml(htmlString)

    const cleanDescription1 = DOMPurify.sanitize((cleanHtml.substr(0, cleanHtml.length / 2)), {
        FORBID_ATTR: ['style'], // remove inline styles
    });
    const cleanDescription2 = DOMPurify.sanitize((cleanHtml.substr(cleanHtml.length / 2, cleanHtml.length)), {
        FORBID_ATTR: ['style'], // remove inline styles
    });




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
                            <div className="about-content" dangerouslySetInnerHTML={{ __html: cleanDescription1 }}>

                            </div>
                        </div>
                        {pathname === '/about-us' && <div className="col-12 mt-3">
                            <div className="about-content" dangerouslySetInnerHTML={{ __html: cleanDescription2 }}>

                            </div>
                        </div>
                        }
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