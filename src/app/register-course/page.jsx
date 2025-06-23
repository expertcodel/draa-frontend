import Image from "next/image";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCheckCircle, faPhone, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import CountrySelect from "@/component/CountrySelect";
import Breadcrumb from "@/component/Breadcrumb";

export default async function RegisterCourse() {

    return (
        <>
            {/*Breadcrumb*/}
            <Breadcrumb title="Register Course" />

            {/* Start Checkout Area */}
            <div className="checkout-area ptb-100">
                <div className="container">
                    <div className="user-actions">
                        <ul className="list-unstyled courseOrderDetails">
                            <li>
                                Course Title : <span>FSP 102: Fingerprint Examination and Analysis</span>
                            </li>
                            <li>
                                Course Price : <span>₹ 11800</span>
                            </li>
                            <li>
                                Course Level : <span>Level-1</span>
                            </li>
                        </ul>
                    </div>
                    <form className="customForm">
                        <div className="row">
                            <div className="col-12">
                                <div className="billing-details">
                                    <h3 className="title">Course Details</h3>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>
                                                    Name <span className="required">*</span>
                                                </label>
                                                <input type="text" className="form-control" placeholder="Full name as on certificate" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>
                                                    Email Address <span className="required">*</span>
                                                </label>
                                                <input type="email" className="form-control" placeholder="Email for notification" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>
                                                    Phone <span className="required">*</span>
                                                </label>
                                                <input type="text" className="form-control" placeholder="Number with country code" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label>
                                                    Address <span className="required">*</span>
                                                </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>
                                                    Date of Birth <span className="required">*</span>
                                                </label>
                                                <input type="date" className="form-control" placeholder="DD-MM-YY" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>
                                                    City <span className="required">*</span>
                                                </label>
                                                <input type="text" className="form-control" placeholder="City/District" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>
                                                    Country <span className="required">*</span>
                                                </label>
                                                <CountrySelect />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>
                                                    Postcode / Zip <span className="required">*</span>
                                                </label>
                                                <input type="text" className="form-control" placeholder="Enter postcode" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Qualification</label>
                                                <input type="text" className="form-control" placeholder="Last qualification" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Institution Name</label>
                                                <input type="text" className="form-control" placeholder="Last institution name" />
                                            </div>
                                        </div>

                                        <div className="col-12 order-details">
                                            <div className="payment-box">
                                                <label>Gender</label>
                                                <div className="payment-method">
                                                    <p>
                                                        <input type="radio" id="genderMale" name="radio-gender" />
                                                        <label htmlFor="genderMale">Male</label>
                                                    </p>
                                                    <p>
                                                        <input type="radio" id="genderFemale" name="radio-gender" />
                                                        <label htmlFor="genderFemale">Female</label>
                                                    </p>
                                                    <p>
                                                        <input type="radio" id="genderOthers" name="radio-gender" />
                                                        <label htmlFor="genderOthers">Others</label>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="create-an-account" />
                                                <label className="form-check-label" htmlFor="create-an-account">
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    </p>
                                                    <p>
                                                        Terms and Condition
                                                    </p>
                                                    <ol>
                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>
                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>
                                                        <li>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        </li>
                                                    </ol>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-12 courseBtn">
                                            <button type="submit" className="default-btn">
                                                Register <FontAwesomeIcon icon={faAngleRight} />
                                                <span />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* End Checkout Area */}
        </>
    );
}