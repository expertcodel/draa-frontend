import Breadcrumb from "@/component/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faClock, faMapLocation, faPhone } from "@fortawesome/free-solid-svg-icons";

export default  function Login() {
    return (
        <>
            {/*Breadcrumb*/}
            <Breadcrumb title="Login" />

            {/* Start Profile Authentication Area */}
            <div className="profile-authentication-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-12">
                            <div className="login-form">
                                <h2>Login</h2>
                                <form>
                                    <div className="form-group">
                                        <label>Username or email</label>
                                        <input type="text" className="form-control" placeholder="Username or email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <button type="submit" className="default-btn">
                                        Log In
                                        <span />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Start Profile Authentication Area */}
        </>
    )
}