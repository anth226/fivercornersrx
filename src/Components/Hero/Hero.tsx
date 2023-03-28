import React from "react";
// import { BrowserRouter as Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./hero.scss";
import icon from "../../assets/icons/Icon.svg";
import bottleDesign from "../../assets/images/bottle-design.svg";

type Props = {
    type: string;
    primaryHead: string;
    secondaryHead: string;
    details: string
    image: string;
}

const Hero: React.FC<Props> = ({ type, primaryHead, secondaryHead, details, image }) => {
    return (
        <div className="container heroMain-container">
            <div className="row heroflex flex-direct display-flex justify-content-between align-items-center">
                <div className="order-2 hero-img-container display-flex justify-content-center align-items-center">
                    {image && <img className="hero-img" src={image} alt="medicine_image" />}
                </div>
                <div className="order-1 txt display-flex justify-content-right align-items-end">
                    <div className="heroDiv ">
                        {primaryHead && <h1 className={type == 'dark' ? "homeHero-h1Dark" : "homeHero-h1Light"}>
                            {primaryHead}
                        </h1>}
                        {secondaryHead && <h5>{secondaryHead}</h5>}
                        {details && <p className={type == 'dark' ? "leadDark" : "leadLight"}>
                            {details}
                        </p>}
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
