import React from 'react';
import "./benefitcard.scss";
// import { BrowserRouter as Link } from "react-router-dom";
type Props = {
    title: string;
    desc: string;
    img: string;
}
const BenefitCard: React.FC<Props> = ({ title, desc, img }) => {
    return (
        <>
            <div className="col-lg-4 benifitsCard">
                <img className="" width="50px" height="50px" src={img} alt="Card" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {desc}
                    </p>
                </div>
            </div>
        </>
    )
}

export default BenefitCard;
