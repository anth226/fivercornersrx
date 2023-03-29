import React from "react";
import styles from "./tadalafilcitrate.module.scss";
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
import TadalafilBottle from "../../assets/images/genericCialis.svg";
import Accordion from "../../Components/Accordian/Accordian";
import ConnectorImage from "../../assets/images/connector.svg"
import { motion } from "framer-motion";

const TadalafilCitrate = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        >
            <div className={styles.HomePagecontainer}>
                <div className={styles.hero_sectionSildenafilCitrate}>
                    <div className={styles.width_component + " container"}>
                        {/* <NavbarLight /> */}
                        <MainNavbar navType="light" updateSidebar={() => { }} />
                        {/* <HeroLight name="Sildenafil Citrate" /> */}
                        <Hero type="light" primaryHead="Generic Cialis" secondaryHead="Tadalafil Generic" details="We offer Generic Cialis, the preferred ED medication of men who want long-lasting results. Our FDA-approved medication stays effective for up to 36 hours, perfect for spontaneous, uninterrupted performance." image={TadalafilBottle} />
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
                        <div className={"col-lg-4 d-flex justify-content-center align-items-center"}>
                            <img
                                className=""
                                width="30px"
                                height="30px"
                                src={tickVerified}
                                alt="Card"
                            />
                            <p className={styles.card_text}>100% Safe. Verified. FDA-Approved.</p>
                        </div>
                        <div className={"col-lg-4 d-flex justify-content-center align-items-center"}>
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
                    <div className={styles.mainWorkscontainer_box + " " + styles.width_component + "  d-flex"}>
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
                                    className={styles.Free_Consult_rightArrow + " mx-3"}
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
                                Our transparent and straightforward pricing policy ensures that you only pay for your medication. No hidden charges, no doctor's fees, screening fees, handling fees, insurance fees, or convenience fees. Every treatment plan clearly outlines the dosage, number of pills, and treatment duration, so you know exactly what you're getting.
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
                        <div className={styles.Affordable_right + " text-center bg-light col-3"}>
                            <h6>Starter Package</h6>
                            <div className="d-flex justify-content-center align-items-end text-center">
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
                    <div>
                        <h2 className="text-center">
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
                            <img className={styles.connectorImg} src={ConnectorImage} alt="connector" />
                            <div className={styles.OnlineServiceBox + " col-lg-3 d-flex flex-column justify-content-center align-items-center text-center"}>
                                <img src={online2} alt="" />
                                <p>Step 2</p>
                                <h6>Hear back in 24 hours</h6>
                                <p>
                                    Our healthcare professionals will review your condition and get
                                    back to you.
                                </p>
                            </div>
                            <img className={styles.connectorImg} src={ConnectorImage} alt="connector" />
                            <div className={styles.OnlineServiceBox + " " + " col-lg-3 d-flex flex-column justify-content-center align-items-center text-center"}>
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
                <div className={styles.accordion}>
                    <h1>Frequently Asked Questions</h1>
                    <p>
                        Do you have questions about our ED pills? We've got you covered! Check
                        out our FAQ page for answers on
                        <br /> our generic Viagra and Cialis, how effective and safe they are,
                        and how our process works.
                    </p>
                    <div className={styles.accordion_wrapper}>
                        <Accordion
                            title="Is Generic Viagra as effective as Viagra?"
                            content="Yes! Generic Viagra contains the same active ingredient as brand-name Viagra and is just as effective in treating ED. In fact, the only difference is the price. Five Corners Rx's U.S.-based pharmacy ensures that our generic Viagra meets the same quality, safety, and efficacy standards as the brand-name version."
                        />
                        <Accordion
                            title="Is Generic Cialis as effective as Cialis?"
                            content="Yes! Generic Viagra contains the same active ingredient as brand-name Viagra and is just as effective in treating ED. In fact, the only difference is the price. "
                        />
                        <Accordion
                            title="Do I need to be on a video call with a doctor?"
                            content="Yes! Generic Viagra contains the same active ingredient as brand-name Viagra and is just as effective in treating ED. In fact, the only difference is the price. "
                        />
                        <Accordion
                            title="How safe are ED pills?"
                            content="Yes! Generic Viagra contains the same active ingredient as brand-name Viagra and is just as effective in treating ED. In fact, the only difference is the price. "
                        />
                        <Accordion
                            title="Can I take more than the prescribed dosage?"
                            content="Yes! Generic Viagra contains the same active ingredient as brand-name Viagra and is just as effective in treating ED. In fact, the only difference is the price. "
                        />
                        <Accordion
                            title="How can I get a refill of my ED pills?"
                            content="Yes! Generic Viagra contains the same active ingredient as brand-name Viagra and is just as effective in treating ED. In fact, the only difference is the price. "
                        />
                    </div>
                </div>
                {/* <Faqs/> */}
                {/* FAQS */}
                {/* Footer */}
                <Footer />
                {/* Footer */}
            </div>
        </motion.main>

    );
};

export default TadalafilCitrate;
