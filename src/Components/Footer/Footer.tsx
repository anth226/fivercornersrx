import React from "react";
// import { BrowserRouter as Link } from "react-router-dom";
import "./footer.scss";
import logo from "../../assets/icons/logo.svg";
import phone from "../../assets/icons/phone-icon.svg";
import mail from "../../assets/icons/mail.svg";
import payment from "../../assets/icons/visa.jpeg";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-section container width-component d-flex justify-content-between">
                    <div className="footer-left">
                        <img src={logo} alt="logo" />
                        <ul className="d-block ">
                            <li>
                                <img src={phone} alt="" />
                                1-800-240-7624
                            </li>

                            <li>
                                <img src={mail} alt="" />
                                support@fivecornersrx.com
                            </li>
                        </ul>
                    </div>
                    <div className="footer-right d-flex justify-content-between">
                        <div className="footer-right-inner">
                            <h5>Useful Links</h5>
                            <ul className="d-block">
                                {/* <Link> */}
                                <li>About us</li>
                                {/* </Link> */}
                                {/* <Link> */}
                                <li>How it works</li>
                                {/* </Link> */}
                                {/* <Link> */}
                                <li>FAQs</li>
                                {/* </Link> */}
                            </ul>
                        </div>
                        <div className="footer-right-inner">
                            <h5>Popular Treatments</h5>
                            <ul className="d-block">
                                {/* <Link> */}
                                <li>Sildenafil Citrate</li>
                                {/* </Link> */}
                                {/* <Link> */}
                                <li>Tadalafil Generic</li>
                                {/* </Link> */}
                            </ul>
                        </div>
                        <div className="footer-right-inner">
                            <h5>Legal</h5>
                            <ul className="d-block">
                                {/* <Link> */}
                                <li>Privacy Policy</li>
                                {/* </Link> */}
                                {/* <Link> */}
                                <li>Terms & Conditions</li>
                                {/* </Link> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-lower">
                <div className="footer-section-lower container width-component d-flex justify-content-between align-items-center">
                    <div className="footer-lower-left ">
                        <p>Copyright © UltraPharmRX 2023 . All Rights Reserved</p>
                    </div>
                    <div className="footer-lower-right">
                        <img src={payment} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
