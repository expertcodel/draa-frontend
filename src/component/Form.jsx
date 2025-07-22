"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
export default function Form() {

    const [validation, setValidation] = useState({ name: "-1", number: "-1", email: "-1", inquiries: "-1", address: "-1" });
    const [data, setData] = useState({ name: "", number: "", email: "", inquiries: "", address: "" });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        const { name, value } = e.target;
        const updatedData = { ...data };
        updatedData[name] = value;
        const updateValidation = { ...validation };
        if (name === 'email') {

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

        }
        else if (name === 'number') {

            if (value === "") {

                updateValidation['number'] = "This field can't be blank";

            }
            else {

                if (!phoneValidator(value)) {

                    updateValidation['number'] = "Number must be of 10 digit";

                }
                else {

                    updateValidation['number'] = "";
                }

            }

        }
        else if (name === 'name') {

            if (value === "") {

                updateValidation['name'] = 'The name field is required.'

            }
            else {

                updateValidation['name'] = ""
            }

        }
        else if (name === 'address') {

            if (value === "") {

                updateValidation['address'] = 'The address field is required.'

            }
            else {

                updateValidation['address'] = ""
            }

        }
        else {

            if (value === "") {

                updateValidation['inquiries'] = 'The query field is required.'

            }
            else {

                updateValidation['inquiries'] = ""
            }


        }

        setValidation(updateValidation);
        setData(updatedData);
    }

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

    const submitForm = async (e) => {

        e.preventDefault();
        let flag = true;
        let updateValidation = { ...validation }


        if (validation['name'] === "-1") {
            flag = false;
            updateValidation['name'] = 'The name field is required.'
        }
        else if (validation['name'] !== "") {

            flag = false;
        }




        if (validation['email'] === "-1") {
            flag = false;
            updateValidation['email'] = 'The email field is required.'
        }
        else if (validation['email'] !== "") {

            flag = false;
        }



        if (validation['number'] === "-1") {
            flag = false;
            updateValidation['number'] = 'The number field is required.'
        }
        else if (validation['number'] !== "") {

            flag = false;
        }



        if (validation['inquiries'] === "-1") {
            flag = false;
            updateValidation['inquiries'] = 'The query field is required.'
        }
        else if (validation['inquiries'] !== "") {

            flag = false;
        }


        if (validation['address'] === "-1") {
            flag = false;
            updateValidation['address'] = 'The address field is required.'
        }
        else if (validation['address'] !== "") {

            flag = false;
        }

    

        setValidation(updateValidation)


        if (flag) {


            const option = {
                method: "POST",
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/sendMail`,
                data: {
                    name: data.name, email: data.email, contact_number: data.number, details: data.inquiries, address: data.address
                }
            }

            setLoading(true);
            const response = await axios.request(option);
            setLoading(false);
            setMessage(response.data.message);
            if (response.data.status) {
                setData({ name: "", number: "", email: "", inquiries: "", address: "" });
            }
            setTimeout(() => {
                setMessage("");
            }, 3000);


        }



    }

    return (
        <form id="contactForm" onSubmit={submitForm}>
            <div className="row">
                <div className="col-lg-12 col-md-6">
                    <div className="form-group mb-3">
                        <input type="text" name="name" id="name" required="" data-error="Please enter your name" placeholder="Your name" onChange={(e) => handleChange(e)} value={data.name} />
                        {/* <div className="help-block with-errors" /> */}
                        <span>{validation.name !== "" && validation.name !== "-1" && validation.name}</span>
                    </div>
                </div>
                <div className="col-lg-12 col-md-6">
                    <div className="form-group mb-3">
                        <input type="email" name="email" id="email" required="" data-error="Please enter your email" placeholder="Your email address" onChange={(e) => handleChange(e)} value={data.email} />
                        {/* <div className="help-block with-errors" /> */}
                        <span>{validation.email !== "" && validation.email !== "-1" && validation.email}</span>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="form-group mb-3">
                        <input type="text" name="number" id="phone_number" required="" data-error="Please enter your phone number" placeholder="Your phone number" onChange={(e) => handleChange(e)} value={data.number} />
                        {/* <div className="help-block with-errors" /> */}
                        <span>{validation.number !== "" && validation.number !== "-1" && validation.number}</span>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="form-group mb-3">
                        <textarea name="address" id="address" cols={30} rows={3} required="" data-error="Please enter your address" placeholder="Enter your address..." defaultValue={""} onChange={(e) => handleChange(e)} value={data.address} />
                        {/* <div className="help-block with-errors" /> */}
                        <span>{validation.address !== "" && validation.address !== "-1" && validation.address}</span>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="form-group mb-3">
                        <textarea name="inquiries" id="message" cols={30} rows={5} required="" data-error="Please enter your message" placeholder="Write your message..." defaultValue={""} onChange={(e) => handleChange(e)} value={data.inquiries} />
                        {/* <div className="help-block with-errors" /> */}
                        <span>{validation.inquiries !== "" && validation.inquiries !== "-1" && validation.inquiries}</span>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <button type="submit" className="default-btn">
                        {loading ? <div className="spinner-border text-white" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> : <>Register
                            <span /> </>}


                    </button>
                    <div style={{ color: message === 'successfully sent!' && 'green' }}>{message !== "" && message}</div>
                    <div id="msgSubmit" className="h3 text-center hidden" />
                    <div className="clearfix" />
                </div>
            </div>
        </form>
    )
}
