import React from 'react'
import Svg from "./Svg/Svg";
import {FiFacebook} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai";
import {FiTwitter} from "react-icons/fi";
import {FaWhatsapp} from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
    return (
        <footer>
            <Svg />
            <div className="container text-white">
                <div className="d-flex justify-content-between gap-5">
                    <div className="d-flex align-items-start flex-column gap-4">
                        <h6>TALK TO US!</h6>
                        <div>
                            <p>Whatsapp: +92 344 4451203</p>
                            <p>Phone: 04232308888</p>
                            <p>Email: help@kayseria.com</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-start flex-column gap-4">
                        <h6>ACCOUNT</h6>
                        <div>
                            <p>Track your order</p>
                            <p>Contact Us</p>
                            <p>Returns & Exchange Policy</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-start flex-column gap-4">
                        <h6>SHOPPING GUIDE</h6>
                        <div>
                            <p>FAQ's</p>

                            <p>Privacy Policy</p>
                            <p>Order Process</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-start flex-column gap-4">
                        <h6>ABOUT THE BRAND</h6>
                        <div>
                            <p>Store Locator</p>
                            <p>History</p>
                            <p>Gallery</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-start gap-4 flex-column">
                        <h6>STAY CONNECTED</h6>
                        <div className="d-flex align-items-center gap-2 social-icons">
                            <button className="facebook"><FiFacebook/></button>
                            <button className="insta"><AiOutlineInstagram/></button>
                            <button className="twitter"><FiTwitter/></button>
                            <button className="whatsapp"><FaWhatsapp/></button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
