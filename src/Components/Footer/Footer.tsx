import React from "react";
// import { BrowserRouter as Link } from "react-router-dom";
import styles from "./footer.module.scss";
import logo from "../../assets/icons/logo.svg";
import phone from "../../assets/icons/phone-icon.svg";
import mail from "../../assets/icons/mail.svg";
import payment from "../../assets/icons/visa.jpeg";
import { Link, useHistory } from "react-router-dom";
import { PATH } from "../../constants/paths";
import { CONSTANTS } from "../../constants/shared";

const Footer = () => {

    const history = useHistory()

    return (
        <div>
            <footer className={styles.footer}>
                <p className={styles.footerDetails}>
                    <h3>Disclaimer</h3>
                    <br />In order to obtain treatments for erectile dysfunction, an online consultation with a healthcare provider is required, and a prescription must be obtained. The cost of each dose is dependent on the specific product and subscription plan that is chosen. FiveCornersRx is not affiliated with any of the manufacturers of the Prescription Medications mentioned, and the trademarks and logos belong to their respective owners. FiveCornersRx does not offer advice, endorsements, or recommendations for any particular prescription drug, pharmacy, or other information. It is recommended to seek medical advice prior to making any changes to medication or prescription. FiveCornersRx is not an insurance provider or Medicaid/Medicare prescription drug plan. At checkout, users are responsible for paying the displayed price.
                </p>
                <div className={styles.footer_section + " " + styles.width_component + " container d-flex justify-content-between"}>
                    <div className={styles.footer_left}>
                        <img src={logo} alt="logo" />
                        <ul className="d-block ">
                            <li>
                                <img src={phone} alt="" />
                                {CONSTANTS.PHONE_NUMBER}
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
                                <li onClick={() => history.push(PATH.HowItWork)}>How it works</li>
                                {/* <Link> */}
                                <li onClick={() => history.push(PATH.FaqsPage)}>FAQs</li>
                                {/* </Link> */}
                            </ul>
                        </div>
                        <div className={styles.footer_right_inner}>
                            <h5>Popular Treatments</h5>
                            <ul className="d-block">
                                {/* <Link> */}
                                <li onClick={() => history.push(PATH.SildenafilCitrate)}>Sildenafil Citrate</li>
                                {/* </Link> */}
                                {/* <Link> */}
                                <li onClick={() => history.push(PATH.TadalafilCitrate)}>Tadalafil Generic</li>
                                {/* </Link> */}
                            </ul>
                        </div>
                        <div className={styles.footer_right_inner}>
                            <h5>Legal</h5>
                            <ul className="d-block">
                                {/* <Link> */}
                                <li onClick={() => history.push(PATH.PrivacyPolicy)}>Privacy Policy</li>
                                {/* </Link> */}
                                {/* <Link> */}
                                <li onClick={() => history.push(PATH.TermsAndConditions)}>Terms & Conditions</li>
                                {/* </Link> */}
                                <li onClick={() => history.push(PATH.ConsentToTeleHealth)}>Consent To Telehealth</li>
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
