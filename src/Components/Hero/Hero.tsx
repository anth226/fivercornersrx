import React from "react";
// import { BrowserRouter as Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./hero.scss";
import icon from "../../assets/icons/Icon.svg";
import bottleDesign from "../../assets/images/bottle-design.svg";

const Hero = () => {
    return (
        <div className="container heroMain-container">
            <div className="row heroflex flex-direct display-flex justify-content-between align-items-center">
                <div className="order-2 hero-img-container display-flex justify-content-center align-items-center">
                    <img className="hero-img" src={bottleDesign} alt="Hero" />
                </div>
                <div className="order-1 txt display-flex justify-content-right align-items-end">
                    <div className="heroDiv ">
                        <h1 className="homeHero-h1">
                            Regain Control of
                            <br />
                            Erectile Dysfunction
                        </h1>
                        <p className="lead">
                            Obtain AUTHENTIC FDA-approved medication for ED in under 5
                            minutes.
                            No face-to-face medical consultations, no medical bills,
                            and no
                            insurance necessary.
                        </p>
                        {/* <Link > */}
                        <Button className="Free-Consult-link">
                            Start FREE Consultation
                            <img
                                className="Free-Consult-rightArrow"
                                src={icon}
                                alt="arrow"
                            />{" "}
                        </Button>
                        {/* </Link> */}
                        <p className="safe-text-p">100% Safe. Verified. FDA-Approved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
