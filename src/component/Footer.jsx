
"use client"
import { faFacebook, faFacebookSquare, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faEnvelopeOpen, faMapLocation, faPaperPlane, faPhone, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import Tooltip from './Tooltip';
export default function Footer({ courses }) {
    const topCategories = courses.slice(0, 4);
    const [message, setMessage] = useState({ succMsg: "", failedMsg: "" });
    const [data, setData] = useState({ email: "" });
    const [loading, setLoading] = useState(false);
    const [validation, setValidation] = useState({ email: "-1" })
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleChange = (e) => {

        const { name, value } = e.target;
        const updatedData = { ...data };
        updatedData[name] = value;
        const updateValidation = { ...validation };


        if (value === "") {

            updateValidation['email'] = "This field can't be blank";

        }
        else {

            if (!validateEmail(value)) {

                updateValidation['email'] = "Please fill valid email";

            }
            else {

                updateValidation['email'] = "";
            }

        }



        setValidation(updateValidation);
        setData(updatedData);
    }

    const submitForm = async (e) => {

        e.preventDefault();
        let updateValidation = { ...validation }
        let valid = true;
        if (validation['email'] === "-1") {
            valid = false;
            updateValidation['email'] = 'The email field is required.'
        }
        else if (validation['email'] !== "") {

            valid = false;
        }

        setValidation(updateValidation)



        if (valid) {


            setLoading(true)
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/createNewsletter`, { method: "POST", body: JSON.stringify({ email:data.email }), headers: { 'Content-Type': 'application/json' } });
            const res = await response.json();
            setLoading(false)
            if (res.status) {

                setMessage({ failedMsg: "", succMsg: res.message });
                setData({ email: "" });
            }
            else {
                setMessage({ failedMsg: res.message, succMsg: "" });

            }

            setTimeout(() => {
                setMessage({ failedMsg: "", succMsg: "" });
            }, 3000);


        }



    }
    return (
        <>

            {/* Start Subscribe Area */}
            {message.succMsg !== "" && <Tooltip message={message.succMsg} />}
            <div className="subscribe-area ptb-100">
                <div className="container">
                    <div className="subscribe-content">
                        <span className="sub-title">Go At Your Own Pace</span>
                        <h2>Subscribe To Our Newsletter</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <form className="newsletter-form" data-toggle="validator" onSubmit={submitForm}>
                            <input type="text" className="input-newsletter" placeholder="Enter your email address" name="email" required="" autoComplete="off" style={{ border: validation.email !== "" && validation.email !== "-1" && '1px solid red' }} onChange={(e) => handleChange(e)} value={data.email} />
                            <button type="submit" className="default-btn">
                                {loading ? <div style={{ display: 'flex', justifyContent: 'center' }}><div className="spinner-border text-success" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div> </div> :
                                    <><i className="flaticon-user" />Subscribe Now </>}
                            </button>

                            {
                                <span style={{ color: 'red' }}>{validation.email !== "" && validation.email !== "-1" && validation.email}</span>
                            }
                            {
                                message.failedMsg !== "" && <span style={{ color: 'red' }}>{message.failedMsg}</span>
                            }

                            <div id="validator-newsletter" className="form-result" />
                        </form>
                    </div>
                </div>
                <div className="shape4" data-speed="0.06" data-revert="true">
                    <img src="/images/shape/shape4.png" alt="image" />
                </div>
                <div className="shape13" data-speed="0.06" data-revert="true">
                    <img src="/images/shape/shape12.png" alt="image" />
                </div>
                <div className="shape14" data-speed="0.06" data-revert="true">
                    <img src="/images/shape/shape13.png" alt="image" />
                </div>
                <div className="shape15" data-speed="0.06" data-revert="true">
                    <img src="/images/shape/shape14.png" alt="image" />
                </div>
            </div>
            {/* End Subscribe Area */}

            {/* Start Footer Area */}
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <Link href="/" className="logo">
                                    <Image width={90} height={80} src="/images/logo.png" alt="logo" />
                                </Link>
                                <p>
                                    Our guiding principles are Teaching, Tutoring and Training. Doing Research Assessment & Analysis (DRAA) (OPC) Pvt Ltd, bring education, technology, innovation, and AI together to transform learning experiences.
                                </p>
                                <ul className="social-link">
                                    <li>
                                        <a href="#" className="d-block" target="_blank">
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-block" target="_blank">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-block" target="_blank">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-block" target="_blank">
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Explore</h3>
                                <ul className="footer-links-list">
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/about-us">About</Link>
                                    </li>
                                    <li>
                                        <Link href="/faculty">Our Faculty</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">Knowladge Hub</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Courses</h3>
                                <ul className="footer-links-list">
                                    {topCategories.map((cat, i) => {

                                        return (
                                            <li key={i}>
                                                <Link href={`/courses/?course_name=${cat.slug}`}>
                                                    {cat.name}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Address</h3>
                                <ul className="footer-contact-info">
                                    <li>
                                        <FontAwesomeIcon icon={faMapLocation} /> DRAA OPC Pvt Ltd B-99/B-97, Panchsheel Vihar Malaviya Nagar, New Delhi- 110017
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faPhone} />
                                        <a href="tel:+44587154756">+1 (123) 456 7890</a>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <a href="mailto:draa.iit@gmail.com">draa.iit@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-area">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>
                                    <FontAwesomeIcon icon={faCopyright} /> DRAA is Proudly Powered by{" "}
                                    <a target="_blank" href="https://expertcodelab.com/">
                                        Expert code lab (p). ltd
                                    </a>
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <ul>
                                    <li>
                                        <Link href="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-condition">Terms &amp; Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lines">
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                </div>
            </footer>
            {/* End Footer Area */}
        </>
    );
}