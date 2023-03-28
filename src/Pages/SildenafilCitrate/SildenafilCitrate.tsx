import React from "react";
import styles from "./sildenafilcitrate.module.scss";
import tickVerified from "../../assets/icons/tick-circle.svg";
import icon from "../../assets/icons/Icon.svg";
import bg4 from "../../assets/images/bg4.svg";
import online1 from "../../assets/icons/Icon (1).svg";
import online2 from "../../assets/icons/Icon (2).svg";
import online3 from "../../assets/icons/Icon (3).svg";
import Footer from "../../Components/Footer/Footer";
import Button from "react-bootstrap/Button";
import Hero from "../../Components/Hero/Hero";
import MainNavbar from "../../Components/Navbar/MainNavbar";
import SildenafilCitrateBottle from "../../assets/images/bottle-design-Sildenafil.svg";

const SildenafilCitrate = () => {
    return (
        <div className={styles.HomePagecontainer}>
            <div className={styles.hero_sectionSildenafilCitrate}>
                <div className={styles.width_component + " container"}>
                    {/* <NavbarLight /> */}
                    <MainNavbar navType="light" updateSidebar={() => { }} />
                    {/* <HeroLight name="Sildenafil Citrate" /> */}
                    <Hero type="light" primaryHead="Generic Viagra" secondaryHead="Sildenafil Citrate" details="Get the Same Powerful Benefits at a Fraction of the Cost with Generic Viagra. Our FDA-approved medication contains the same active ingredient as Viagra, but is available at a fraction of the cost." image={SildenafilCitrateBottle} />
                </div>
            </div>
            {/* Verified Things */}
            <div className={styles.benifitsBG}>
                <div className={styles.benifits_container + " " + styles.width_component + " container display-flex py-5"}>
                    <div className={"col-lg-4 d-flex justify-content-center align-items-center"}>
                        <img
                            className=""
                            width="30px"
                            height="30px"
                            src={tickVerified}
                            alt="Card"
                        />
                        <p className={styles.card_text}>Free, discreet 2-day shipping</p>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center align-items-center">
                        <img
                            className=""
                            width="30px"
                            height="30px"
                            src={tickVerified}
                            alt="Card"
                        />
                        <p className={styles.card_text}>100% Safe. Verified. FDA-Approved.</p>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center align-items-center">
                        <img
                            className=""
                            width="30px"
                            height="30px"
                            src={tickVerified}
                            alt="Card"
                        />
                        <p className={styles.card_text}>Prescribed by US medical experts</p>
                    </div>
                </div>
            </div>
            {/* Verified Things */}
            {/* Proper Work Telling section */}
            <div className={styles.mainWorkscontainer}>
                <div className={styles.mainWorkscontainer_box + " " + styles.width_component + " d-flex"}>
                    <div className={styles.freeHealthImg}>
                        <img src={bg4} alt="" />
                    </div>
                    <div className={styles.freeHealthtxt}>
                        <h2>Convenient. Secure. Affordable</h2>
                        <p>
                            At Five Corners Rx, we understand the hassle and expense of
                            traditional doctor visits and pharmacy trips. That's why we've
                            made it easy to order your medication completely online. Our quick
                            and secure checkout process and health survey takes just minutes
                            to complete, so you can get back to enjoying your life with
                            confidence and peace of mind.
                        </p>
                        {/* <Link href="#"> */}
                        <Button className={styles.Free_Consult_link}>
                            Start FREE Consultation
                            <img
                                className={styles.Free_Consult_rightArrow + "  mx-3"}
                                src={icon}
                                alt="arrow"
                            />
                        </Button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
            {/* Proper Work Telling section */}
            {/* Affordable plan */}
            <div className={styles.Affordable_container}>
                <div className={styles.Affordable_section + " " + styles.width_component + " d-flex justigy-content-between align-items-center py-5"}>
                    <div className={styles.Affordable_left + " col-8"}>
                        <h2>Transparent & Affordable Pricing for Plan</h2>
                        <p>
                            With Five Corners Rx, you only pay for what you need. Our
                            straightforward pricing policy ensures there are no hidden fees or
                            charges, so you can focus on what matters most. Choose your
                            preferred treatment plan based on your individual needs and
                            budget.
                        </p>
                        {/* <Link href="#"> */}
                        <Button className={styles.Free_Consult_link}>
                            Start FREE Consultation
                            <img
                                className={styles.Free_Consult_rightArrow + " mx-3"}
                                src={icon}
                                alt="arrow"
                            />
                        </Button>
                        {/* </Link> */}
                    </div>
                    <div className={styles.Affordable_right + "  text-center bg-light col-3"}>
                        <h6>Starter Package</h6>
                        <div className={"d-flex justify-content-center align-items-end text-center"}>
                            <h1>$2</h1>
                            <p>/Per Pill</p>
                        </div>
                        <h5>Available Varities</h5>
                        <p>20mg to 100mg</p>
                        <p>4, 8, 12 and 16 tablets</p>
                    </div>
                </div>
            </div>
            {/* Affordable plan */}
            {/* Online Services */}
            <div className={styles.OnlineServiceContainer}>
                <div className={styles.width_component}>
                    <h2 className={"text-center"}>
                        Easy Online Medicine For Men
                        <br /> In 3 Quick Steps
                    </h2>
                    <div className={styles.OnlineServiceBox_div + " d-flex"}>
                        <div className={styles.OnlineServiceBox + " col-lg-3 d-flex flex-column justify-content-center align-items-center text-center"}>
                            <img src={online1} alt="" />
                            <p>Step 1</p>
                            <h6>Start online visit</h6>
                            <p>
                                Answer a few questions about your health history and symptoms.
                            </p>
                        </div>
                        <div className={styles.OnlineServiceBox + " col-lg-3 d-flex flex-column justify-content-center align-items-center text-center"}>
                            <img src={online2} alt="" />
                            <p>Step 2</p>
                            <h6>Hear back in 24 hours</h6>
                            <p>
                                Our healthcare professionals will review your condition and get
                                back to you.
                            </p>
                        </div>
                        <div className={styles.OnlineServiceBox + " col-lg-3 d-flex flex-column justify-content-center align-items-center text-center"}>
                            <img src={online3} alt="" />
                            <p>Step 3</p>
                            <h6>Fast and free shipping</h6>
                            <p>
                                You will receive your order in a discreet, unmarked package
                                SHIPPED FREE.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Online Services */}
            {/* FAQS */}
            {/* <Faqs/> */}
            {/* FAQS */}
            {/* Footer */}
            <Footer />
            {/* Footer */}
        </div>
    );
};

export default SildenafilCitrate;
