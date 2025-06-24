import Breadcrumb from "@/component/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default async function TermsCondition() {
    return (
        <>
            {/*Breadcrumb*/}
            <Breadcrumb title="Terms & Condition" />

            {/* Start privacy-policy Area */}
            <div className="terms-of-service-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="terms-of-service-content">
                                <ul>
                                    <li>
                                        <strong>Fees once paid to the DRAA (OPC) Pvt Ltd will not be refunded in any circumstances, except in case of the duplicate payment made by the users.</strong>
                                    </li>
                                    <li>
                                        By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully. If you do not agree with these Terms, you should not access or use our website.
                                    </li>
                                </ul>
                                <h3>1. Acceptance of Terms</h3>
                                <ul>
                                    <li>
                                        By accessing, using, or subscribing to our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, along with our <strong>Privacy Policy</strong> and any other policies referenced herein.
                                    </li>
                                </ul>
                                <h3>2. Services Provided</h3>
                                <ul>
                                    <li>
                                        DRAA OPC Pvt Ltd provides educational resources, courses, tutorials, assessments, and other materials (“Services”). We reserve the right to modify or discontinue any part of our Services at any time.
                                    </li>
                                </ul>
                                <h3>3. Eligibility</h3>
                                <ul>
                                    <li>
                                        You must be at least 5 years old to use our Services. By using the website, you confirm that you meet the eligibility requirements. If you are under the age of 5, you must have the consent of a parent or legal guardian to use the website.
                                    </li>
                                </ul>
                                <h3>4. Account Registration</h3>
                                <ul>
                                    <li>
                                        To access certain Services, you may need to create an account. You agree to provide accurate, complete, and up-to-date information when registering and to maintain the confidentiality of your login credentials. You are responsible for all activities under your account.
                                    </li>
                                </ul>
                                <h3>5. User Content</h3>
                                <ul>
                                    <li>
                                        By submitting or uploading content to our website (e.g., comments, assignments, posts), you grant DRAA OPC PVt Ltd a non-exclusive, royalty-free, transferable license to use, reproduce, and distribute the content in connection with the Services.
                                    </li>
                                    <li>
                                        You are solely responsible for the content you upload and represent and warrant that such content does not infringe upon the rights of third parties.
                                    </li>
                                </ul>
                                <h3>6. Use of Services</h3>
                                <p>
                                    You agree to use our Services for lawful purposes only. You may not:
                                </p>
                                <ul>
                                    <li>
                                        Violate any laws or regulations in your jurisdiction.
                                    </li>
                                    <li>
                                        Impose an unreasonable load on our servers or disrupt the functioning of the website.
                                    </li>
                                    <li>
                                        Attempt to gain unauthorized access to our systems or accounts.
                                    </li>
                                    <li>
                                        Engage in any activity that harms the integrity or reputation of DRAA OPC Pvt. Ltd.
                                    </li>
                                </ul>
                                <h3>7. Intellectual Property</h3>
                                <ul>
                                    <li>
                                        All content, materials, logos, trademarks, and software on DRAA.in are the property of DRAA OPC Pvt Ltd or its licensors and are protected by intellectual property laws. You may not reproduce, distribute, or otherwise exploit the content without our express permission.
                                    </li>
                                </ul>
                                <h3>8. Privacy and Data Security</h3>
                                <ul>
                                    <li>
                                        We are committed to protecting your privacy. Please refer to our <strong>Privacy Policy</strong> for information on how we collect, use, and protect your personal data.
                                    </li>
                                </ul>
                                <h3>9. Third-Party Links</h3>
                                <ul>
                                    <li>
                                        Our website may contain links to third-party websites. These links are provided for convenience, but we are not responsible for the content or practices of any third-party sites. We encourage you to review the terms and privacy policies of those websites.
                                    </li>
                                </ul>
                                <h3>10. Limitation of Liability</h3>
                                <ul>
                                    <li>
                                        To the fullest extent permitted by law, draa.in will not be liable for any indirect, incidental, special, or consequential damages arising out of your use or inability to use the website, even if we have been advised of the possibility of such damages.
                                    </li>
                                </ul>
                                <h3>11. Disclaimers</h3>
                                <ul>
                                    <li>
                                        <strong>No Warranty:</strong> Our Services are provided “as is” and “as available,” with no warranties of any kind, either express or implied.
                                    </li>
                                    <li>
                                        <strong>Content Accuracy:</strong> We strive to ensure the accuracy of the content on our website, but we make no guarantees that the content is error-free or up-to-date.
                                    </li>
                                    <li>
                                        We may update these Terms from time to time. When we do, we will post the updated Terms on our website and revise the "Effective Date" at the top. Continued use of the website after such modifications constitutes your acceptance of the updated Terms.
                                    </li>
                                    <li>
                                        We reserve the right to suspend or terminate your account and access to the website at any time, without notice, for any reason, including if you violate these Terms.
                                    </li>
                                    <li>
                                        These Terms are governed by the laws of Delhi, India. Any disputes related to these Terms will be resolved in the courts located in Delhi.
                                    </li>
                                    <li>
                                        By using our website, you acknowledge that you have read and understood these Terms and Conditions and agree to abide by them.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End privacy-policy Area */}
        </>
    )
}