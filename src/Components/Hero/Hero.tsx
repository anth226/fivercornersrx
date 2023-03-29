import React from "react";
// import { BrowserRouter as Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from "./hero.module.scss";
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
        <div className={styles.heroMain_container + " container"}>
            <div className={styles.heroflex + " row flex-direct display-flex justify-content-between align-items-center"}>
                <div className={styles.hero_img_container + " order-2  display-flex justify-content-center align-items-center"}>
                    {image && <img className={styles.hero_img} src={image} alt="medicine_image" />}
                </div>
                <div className={styles.txt + " order-1 display-flex justify-content-right align-items-end"}>
                    <div className={styles.heroDiv}>
                        {primaryHead && <h1 className={type == 'dark' ? styles.homeHero_h1Dark : styles.homeHero_h1Light}>
                            {primaryHead}
                        </h1>}
                        {secondaryHead && <h5>{secondaryHead}</h5>}
                        {details && <p className={type == 'dark' ? styles.leadDark : styles.leadLight}>
                            {details}
                        </p>}
                        {/* <Link > */}
                        <Button className={styles.Free_Consult_link}>
                            Start FREE Consultation
                            <img
                                className={styles.Free_Consult_rightArrow}
                                src={icon}
                                alt="arrow"
                            />{" "}
                        </Button>
                        {/* </Link> */}
                        {!secondaryHead && <p className={styles.safe_text_p}>100% Safe. Verified. FDA-Approved.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
