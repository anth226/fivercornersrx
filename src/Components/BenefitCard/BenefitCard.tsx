import React from 'react';
import styles from "./benefitcard.module.scss";
// import { BrowserRouter as Link } from "react-router-dom";
type Props = {
    title: string;
    desc: string;
    img: string;
}
const BenefitCard: React.FC<Props> = ({ title, desc, img }) => {
    return (
        <>
            <div className={styles.benifitsCard + " col-lg-4"}>
                <img className="" width="50px" height="50px" src={img} alt="Card" />
                <div className={styles.card_body}>
                    <h5 className={styles.card_title}>{title}</h5>
                    <p className={styles.card_text}>
                        {desc}
                    </p>
                </div>
            </div>
        </>
    )
}

export default BenefitCard;
