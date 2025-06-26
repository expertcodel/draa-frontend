"use client"
import Image from "next/image";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCheckCircle, faPhone, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import CountrySelect from "@/component/CountrySelect";
import Breadcrumb from "@/component/Breadcrumb";
import { useState } from "react";
export default function RegisterCourse() {

    const [courseData, setCoursedata] = useState(sessionStorage.getItem('courseDetail') && JSON.parse(sessionStorage.getItem('courseDetail')))
    const [loading, setLoading] = useState(false);

    const [message, setMessage] = useState({ name: "", number: "", email: "", date: "", institute: "", qualification: "", city: "", country: "", zip: "", address: "", gender: "", terms: "" })


    const handleKeyDown = (e) => {
        const allowedKeys = [
            'Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete'
        ];
        // Prevent non-digit keys
        if (!/\d/.test(e.key) && !allowedKeys.includes(e.key)) {
            e.preventDefault();
        }
    };
    const phoneValidator = (inputtxt) => {

        let phoneno = /^\d{10}$/;
        if (inputtxt.match(phoneno)) {
            return true;
        }
        else {

            return false;
        }


    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const submitFormData = async (e) => {

        e.preventDefault();
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const number = e.target.number.value.trim();
        const date = e.target.date.value.trim();
        const institute = e.target.institute.value.trim();
        const qualification = e.target.qualification.value.trim();
        const city = e.target.city.value.trim();
        const country = e.target.country.value.trim();
        const zip = e.target.zip.value.trim();
        const address = e.target.address.value.trim();
        const gender = Array.from(e.target.radiogender);
        let genderType;
        const terms = e.target.terms.checked;
        const updateMessage = { ...message };
        let flag = true;
        if (name === "") {

            updateMessage['name'] = 'The name field is required.'
            flag = false;
        }
        else {

            updateMessage['name'] = ""
        }

        if (number === "") {

            updateMessage['number'] = "This field can't be blank";
            flag = false;
        }
        else {

            if (!phoneValidator(number)) {

                updateMessage['number'] = "Number must be of 10 digit";
                flag = false;
            }
            else {

                updateMessage['number'] = "";
            }

        }

        if (email === "") {

            updateMessage['email'] = "This field can't be blank";
            flag = false;
        }
        else {

            if (!validateEmail(email)) {

                updateMessage['email'] = "Please fill valid email";
                flag = false;
            }
            else {

                updateMessage['email'] = "";
            }

        }

        if (date === "") {

            updateMessage['date'] = 'The date of birth field is required.'
            flag = false;
        }
        else {

            updateMessage['date'] = ""
        }

        if (institute === "") {

            updateMessage['institute'] = 'The institution name field is required.'
            flag = false;
        }
        else {

            updateMessage['institute'] = ""
        }

        if (qualification === "") {

            updateMessage['qualification'] = 'The qualification field is required.'
            flag = false;
        }
        else {

            updateMessage['qualification'] = ""
        }

        if (city === "") {

            updateMessage['city'] = 'The city name field is required.'
            flag = false;
        }
        else {

            updateMessage['city'] = ""
        }

        if (country === "") {

            updateMessage['country'] = 'The country name field is required.'
            flag = false;
        }
        else {

            updateMessage['country'] = ""
        }

        if (zip === "") {

            updateMessage['zip'] = 'The postal code field is required.'
            flag = false;
        }
        else {

            updateMessage['zip'] = ""
        }


        if (address === "") {

            updateMessage['address'] = 'The full postal address field is required.'
            flag = false;
        }
        else {

            updateMessage['address'] = ""
        }

        if (gender[0].checked || gender[1].checked || gender[2].checked) {

            updateMessage['gender'] = ""
            if (gender[0].checked) {
                genderType = 'Male'
            }

            if (gender[1].checked) {
                genderType = 'Female'
            }

            if (gender[2].checked) {
                genderType = 'Others'
            }

        }
        else {

            updateMessage['gender'] = 'The gender field is required.'
            flag = false;
        }

        if (!terms) {

            updateMessage['terms'] = 'The terms and conditions field is required.'
            flag = false;
        }
        else {

            updateMessage['terms'] = ""
        }

        setMessage(updateMessage);
        if (flag) {

            const data = {
                name, phone_number: number, email, dob: date, address, city, post_code: zip, country, designation: qualification, college_name: institute, gender: genderType, amount: courseData.price, level: courseData.level, course_id: courseData.course_id, mode_of_study: courseData.mode_of_study
            }
            setLoading(true)
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/payment/create-order`, { method: 'POST', body: JSON.stringify(data) })
            const order = await response.json();
            setLoading(false);
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: order.order.amount,
                currency: "INR",
                name: "Draa.in",
                description: "Course Payment",
                order_id: order.order.id,
                handler: async (response) => {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/payment/verify`, {
                        method: "POST",
                        body: JSON.stringify({

                            ...response,
                            id: order.id
                        }),

                    });
                    // alert("Payment successful!");
                    const response1 = res.json();
                    if (response1.status) {
                        sessionStorage.removeItem('courseDetail');
                        sessionStorage.setItem('successMsg', 'Course Registered Successfully');
                        window.location.href = '/'
                    }


                },
                prefill: {
                    name,
                    email
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();

        }



    }

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
                                Course Title : <span>{courseData?.title}</span>
                            </li>
                            <li>
                                Course Price : <span>₹ {courseData?.price}</span>
                            </li>
                            <li>
                                Course Level : <span>Level-{courseData?.level}</span>
                            </li>
                        </ul>
                    </div>
                    <form className="customForm" onSubmit={submitFormData}>
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
                                                <input type="text" className="form-control" placeholder="Full name as on certificate" name="name" />
                                                <span style={{ color: 'red' }}>{message.name !== "" && message.name}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>
                                                    Email Address <span className="required">*</span>
                                                </label>
                                                <input type="email" className="form-control" placeholder="Email for notification" name="email" />
                                                <span style={{ color: 'red' }}>{message.email !== "" && message.email}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>
                                                    Phone <span className="required">*</span>
                                                </label>
                                                <input type="text" className="form-control" placeholder="Number with country code" name="number" onKeyDown={handleKeyDown} maxLength={10} />
                                                <span style={{ color: 'red' }}>{message.number !== "" && message.number}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label>
                                                    Address <span className="required">*</span>
                                                </label>
                                                <input type="text" className="form-control" name="address" />
                                                <span style={{ color: 'red' }}>{message.address !== "" && message.address}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>
                                                    Date of Birth <span className="required">*</span>
                                                </label>
                                                <input type="date" className="form-control" placeholder="DD-MM-YY" name="date" />
                                                <span style={{ color: 'red' }}>{message.date !== "" && message.date}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>
                                                    City <span className="required">*</span>
                                                </label>
                                                <input type="text" className="form-control" placeholder="City/District" name="city" />
                                                <span style={{ color: 'red' }}>{message.city !== "" && message.city}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>
                                                    Country <span className="required">*</span>
                                                </label>
                                                <CountrySelect />
                                                <span style={{ color: 'red' }}>{message.country !== "" && message.country}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>
                                                    Postcode / Zip <span className="required">*</span>
                                                </label>
                                                <input type="text" className="form-control" placeholder="Enter postcode" name="zip" />
                                                <span style={{ color: 'red' }}>{message.zip !== "" && message.zip}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Qualification</label>
                                                <input type="text" className="form-control" placeholder="Last qualification" name="qualification" />
                                                <span style={{ color: 'red' }}>{message.qualification !== "" && message.qualification}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Institution Name</label>
                                                <input type="text" className="form-control" placeholder="Last institution name" name="institute" />
                                                <span style={{ color: 'red' }}>{message.institute !== "" && message.institute}</span>
                                            </div>
                                        </div>

                                        <div className="col-12 order-details">
                                            <div className="payment-box">
                                                <label>Gender</label>
                                                <div className="payment-method">
                                                    <p>
                                                        <input type="radio" id="genderMale" name="radiogender" />
                                                        <label htmlFor="genderMale">Male</label>
                                                    </p>
                                                    <p>
                                                        <input type="radio" id="genderFemale" name="radiogender" />
                                                        <label htmlFor="genderFemale">Female</label>
                                                    </p>
                                                    <p>
                                                        <input type="radio" id="genderOthers" name="radiogender" />
                                                        <label htmlFor="genderOthers">Others</label>
                                                    </p>
                                                </div>
                                                <span style={{ color: 'red' }}>{message.gender !== "" && message.gender}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="create-an-account" name="terms" />
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
                                            <span style={{ color: 'red' }}>{message.terms !== "" && message.terms}</span>
                                        </div>

                                        <div className="col-12 courseBtn">
                                            <button type="submit" className="default-btn">
                                                {loading ? <div className="spinner-border text-white" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div> : <>Register  <FontAwesomeIcon icon={faAngleRight} />
                                                    <span /> </>}

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