"use client"
import Image from "next/image";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCheckCircle, faPhone, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import CountrySelect from "@/component/CountrySelect";
import Breadcrumb from "@/component/Breadcrumb";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function BookCheckout() {

    const [BookData, setBookdata] = useState(typeof (window) !== 'undefined' && sessionStorage.getItem('BookDetail') && JSON.parse(sessionStorage.getItem('BookDetail')))
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    const [message, setMessage] = useState({ name: "", number: "", email: "", city: "", country: "", zip: "", address: "" })

    useEffect(() => {

        if (!sessionStorage.getItem('BookDetail')) {
            router.push('/books');
        }

    }, [])

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
        const city = e.target.city.value.trim();
        const country = e.target.country.value.trim();
        const zip = e.target.zip.value.trim();
        const address = e.target.address.value.trim();
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

        setMessage(updateMessage);
        if (flag) {

            const data = {
                name, phone_number: number, email, address, city, post_code: zip, country, amount: BookData.price, book_id: BookData.book_id,path:'/book-checkout'
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
                description: "Book Payment",
                order_id: order.order.id,
                handler: async (response) => {
                    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/payment/verify`, {
                        method: "POST",
                        body: JSON.stringify({

                            ...response,
                            id: order.id,
                            path:'/book-checkout'
                        }),

                    });

                    sessionStorage.removeItem('BookDetail');
                    sessionStorage.setItem('successMsg', 'Book Purchased Successfully');
                    router.push('/')


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
            <Breadcrumb title="Purchase Book" />

            {/* Start Checkout Area */}
            <div className="checkout-area ptb-100">
                <div className="container">
                    <div className="user-actions">
                        <ul className="list-unstyled courseOrderDetails">
                            <li>
                                Book Title : <span>{BookData?.title}</span>
                            </li>
                            <li>
                                Book Price : <span>₹ {BookData?.price}</span>
                            </li>
                            {/* <li>
                                Book Level : <span>Level-{BookData?.level}</span>
                            </li> */}
                        </ul>
                    </div>
                    <form className="customForm" onSubmit={submitFormData}>
                        <div className="row">
                            <div className="col-12">
                                <div className="billing-details">
                                    <h3 className="title">Purchase Book</h3>
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




                                        <div className="col-12 courseBtn">
                                            <button type="submit" className="default-btn">
                                                {loading ? <div className="spinner-border text-white" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div> : <>Submit  <FontAwesomeIcon icon={faAngleRight} />
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