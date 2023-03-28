import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

//Components
import Hero from "../../Components/Hero/Hero";
import BenifitsCard from "../../Components/BenefitCard/BenefitCard";
// import { BrowserRouter as Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from "./homepage.module.scss";

//images
import freeConsult from "../../assets/icons/freeConsult.svg";
import shipping from "../../assets/icons/shipping.svg";
import hearBack from "../../assets/icons/hearBack.svg";
import icon from "../../assets/icons/Icon.svg";
import halfBottle1 from "../../assets/images/halfbottle.svg";
import drMen from "../../assets/images/drMen.svg";
import cialis from "../../assets/images/cialis.svg";
import Sildenafil from "../../assets/images/bottle-design-Tadalafil1.svg";
import Footer from "../../Components/Footer/Footer";
import MainNavbar from "../../Components/Navbar/MainNavbar";
// import Faqs from "../../components/Faqs/Faqs";

const HomePage = () => {
    return (
        <div className={styles.HomePagecontainer}>
            <div className={styles.hero_section}>
                <div className={styles.width_component + " container"}>
                    <MainNavbar navType="dark" updateSidebar={() => { }} />
                    <Hero />
                </div>
            </div>
            {/* Benifits Section */}
            <div className={styles.benifits_container + " " + styles.width_component + " container display-flex"}>
                <BenifitsCard
                    title="FREE Consulatation"
                    desc="Answer a few questions about your health history and symptoms."
                    img={freeConsult}
                />
                <BenifitsCard
                    title="Hear back in 24 hours"
                    desc="Our healthcare professionals will review your condition and get back to you."
                    img={hearBack}
                />
                <BenifitsCard
                    title="Fast and free shipping"
                    desc="You will receive your order in a discreet, unmarked package SHIPPED FREE."
                    img={shipping}
                />
            </div>
            {/* Get Treatment Section */}
            <div className={styles.get_treatment_container + " container" + styles.width_component}>
                <h1 className="text-center">Get the best treatment you need</h1>
                <p className={styles.lead + " text-center"}>
                    Five Corners Rx provides various treatment options suitable for your
                    finances and daily routine.
                </p>
                <div className={styles.treatment_offers_container}>
                    <div className={styles.treatment_offers_box}>
                        <p className={styles.offers_p1}>Sildenafil Citrate</p>
                        <h5>Generic Viagra</h5>
                        <p className={styles.offers_p2}>Begins at $3 per pill</p>
                        {/* <Link > */}
                        <Button className={styles.FreeConsultlink}>
                            Start Now
                            <img
                                className={styles.Free_Consult_rightArrow}
                                src={icon}
                                alt="arrow"
                            />
                        </Button>
                        {/* </Link> */}
                        <img src={halfBottle1} alt="" />
                    </div>
                    <div className={styles.treatment_offers_box}>
                        <p className={styles.offers_p1}>Sildenafil Citrate</p>
                        <h5>Generic Viagra</h5>
                        <p className={styles.offers_p2}>Begins at $3 per pill</p>
                        {/* <Link > */}
                        <Button className={styles.FreeConsultlink}>
                            Start Now{" "}
                            <img
                                className={styles.Free_Consult_rightArrow}
                                src={icon}
                                alt="arrow"
                            />{" "}
                        </Button>
                        {/* </Link> */}
                        <img src={halfBottle1} alt="" />
                    </div>
                </div>
            </div>
            {/* Treatment Option */}
            <div className={styles.treatment_option_container}>
                <div className={styles.treatment_option_container_flex + " " + styles.width_component + " container width_component d-flex"}>
                    <div className={styles.treatment_option_text_container}>
                        <h2>
                            Which Treatment Option
                            <br /> Suits You Best?
                        </h2>
                        <p className={styles.lead}>
                            Our top priority is giving you the best results. Simply select
                            your preferred treatment option, and our team of certified
                            American doctors will find the best approach for your needs.
                        </p>
                        {/* <Link > */}
                        <Button className={styles.FreeConsultlink}>
                            Start Now
                            <img
                                className={styles.Free_Consult_rightArrow}
                                src={icon}
                                alt="arrow"
                            />
                        </Button>
                        {/* </Link> */}
                    </div>
                    <div className={styles.treatment_option_img_container}>
                        <img src={drMen} alt="" />
                    </div>
                </div>
            </div>
            {/* FAQS */}
            {/* <Faqs /> */}
            {/* FAQS */}
            {/* Get Ready */}
            <div className={styles.getReady_container}>
                <div className={styles.getReady_section + " container" + styles.width_component}>
                    <div className={styles.getReady_img_container}>
                        <div className={styles.getReady_img_box}>
                            <img
                                src={Sildenafil}
                                className={styles.getReady_viagra}
                                alt="get ready"
                            />
                        </div>
                        <div className={styles.getReady_img_box}>
                            <img
                                src={cialis}
                                alt="get ready"
                                className={styles.getReady_cialis}
                                width="350px"
                                height="350px"
                            />
                        </div>
                    </div>
                    <div className={styles.getReady_txt_container}>
                        <h2>Ready to get started?</h2>
                        <h5>Try Five Corners Rx's ED pills for real satisfaction!</h5>
                        <p>
                            Say goodbye to ED with Five Corners Rx Don't let ED control your
                            life any longer. With safe, effective, and trusted ED pills, you
                            can regain your youthful drive and vigor in the bedroom. For more
                            than 20 years, men have trusted ED pills to extend their sexual
                            prime, and now it's your turn.
                        </p>
                        {/* <Link > */}
                        <Button className={styles.FreeConsultlink}>
                            Start Now
                            <img
                                className={styles.Free_Consult_rightArrow + " mx-2"}
                                src={icon}
                                alt="arrow"
                            />
                        </Button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default HomePage;
