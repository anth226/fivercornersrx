import React from 'react'
import styles from "./productdetails.module.scss"
import MedicineImage from "../../assets/images/genericviagra.svg"
import VerifiedIcon from "../../assets/icons/verifiedicon.svg"
import Spacer from '../Spacer/Spacer'

const ProductDetails = () => {
    return (<div className={styles.productDetailsContainer}>
        <p className={styles.primaryText + " " + styles.dullText}>Sildenafil Citrate</p>
        <p className={styles.headText}>Generic Viagra</p>
        <p className={styles.medicine_detail}>60mg Sildenafil 3x per week</p>
        <img className={styles.medicine_image} src={MedicineImage} alt="medicine_image" />
        <div className={styles.pricingDetailsRow}>
            <p className={styles.primaryText + " " + styles.dullText}>Price</p>
            <p className={styles.primaryText}>$72.00</p>
        </div>
        <div className={styles.pricingDetailsRow}>
            <p className={styles.primaryText + " " + styles.dullText}>Shipping</p>
            <p className={styles.primaryText}>$0.00</p>
        </div>
        <div className={styles.pricingDetailsRow}>
            <p className={styles.primaryText + " " + styles.dullText}>Service charges + Tax</p>
            <p className={styles.primaryText}>$0.00</p>
        </div>
        <div className={styles.pricingDetailsRow}>
            <p className={styles.primaryText + " " + styles.dullText}>Total</p>
            <p className={styles.primaryText}><strong>$72.00</strong></p>
        </div>
        <Spacer />
        <Spacer />
        <div className={styles.extraDetailsRow}>
            <img src={VerifiedIcon} alt="medicine_image" />
            <p className={styles.lightText}>12 doses - 1 month supply</p>
        </div>
        <Spacer />
        <Spacer />
        <div className={styles.extraDetailsRow}>
            <img src={VerifiedIcon} alt="medicine_image" />
            <p className={styles.lightText}>Discreet shipping to your house</p>
        </div>
        <Spacer />
        <Spacer />
        <div className={styles.extraDetailsRow}>
            <img src={VerifiedIcon} alt="medicine_image" />
            <p className={styles.lightText}>FREE online physician consultation.</p>
        </div>
        <Spacer />
        <Spacer />
        <div className={styles.extraDetailsRow}>
            <img src={VerifiedIcon} alt="medicine_image" />
            <p className={styles.lightText}>Automatic refills every 30 days.</p>
        </div>
    </div>);
}

export default ProductDetails;