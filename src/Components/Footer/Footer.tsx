import React from "react";
// import { BrowserRouter as Link } from "react-router-dom";
import styles from "./footer.module.scss";
import logo from "../../assets/icons/logo.svg";
import phone from "../../assets/icons/phone-icon.svg";
import mail from "../../assets/icons/mail.svg";
import payment from "../../assets/icons/visa.jpeg";

const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles.footer_section + " " + styles.width_component + " container d-flex justify-content-between"}>
                    <div className={styles.footer_left}>
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
                    <div className={styles.footer_right + " d-flex justify-content-between"}>
                        <div className={styles.footer_right_inner}>
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
                        <div className={styles.footer_right_inner}>
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
                        <div className={styles.footer_right_inner}>
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
            <div className={styles.footer_lower}>
                <div className={styles.footer_section_lower + " " + styles.width_component + " container  d-flex justify-content-between align-items-center"}>
                    <div className={styles.footer_lower_left}>
                        <p>Copyright © UltraPharmRX 2023 . All Rights Reserved</p>
                    </div>
                    <div className={styles.footer_lower_right}>
                        <img src={payment} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
