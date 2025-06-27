import Breadcrumb from "@/component/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faClock, faMapLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import Form from "../../component/Form";

export default async function ContactUs() {
    return (
        <>
            {/*Breadcrumb*/}
            <Breadcrumb title="Contact" />

            {/* Start Contact Area */}
            <div className="contact-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-info">
                                <span className="sub-title">Contact Details</span>
                                <h2>Get in Touch</h2>
                                <p>
                                    In accordance with the Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:
                                </p>
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faMapLocation} />
                                        </div>
                                        <h3>Our Address</h3>
                                        <p>DRAA OPC Pvt Ltd B-99/B-97, Panchsheel Vihar Malaviya Nagar, New Delhi- 110017</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                        <h3>Contact</h3>
                                        <p>
                                            Mobile: <a href="tel:+44457895789">(+44) - 45789 - 5789</a>
                                        </p>
                                        <p>
                                            Mail:{" "}
                                            <a href="mailto:draa.iit@gmail.com">draa.iit@gmail.com</a>
                                        </p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faClock} />
                                        </div>
                                        <h3>Hours of Operation</h3>
                                        <p>Monday - Friday: 09:00 - 20:00</p>
                                        <p>Sunday &amp; Saturday: 10:30 - 22:00</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-form">
                                <h2>Ready to Get Started?</h2>
                                <p>
                                    Your email address will not be published. Required fields are marked *
                                </p>
                                <Form/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Contact Area */}

            {/* Map */}
            <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.196592692514!2d77.21690022528519!3d28.533810075718712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2204679f48f%3A0x1a0f75af4d1e0a9b!2sKhirki%20Extension%2C%20Panchsheel%20Vihar%2C%20Sheikh%20Sarai%20Village%2C%20Sheikh%20Sarai%2C%20New%20Delhi%2C%20Delhi%20110017!5e0!3m2!1sen!2sin!4v1748252642133!5m2!1sen!2sin" />
            </div>
            {/* End Map */}
        </>
    )
}