import * as React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import InputComponent from '../InputComponent/InputComponent';
import styles from "./billingdetails.module.scss"
import MasterCardIcon from '../../assets/icons/MasterCardicon.svg'
import VisaIcon from '../../assets/icons/visaicon.svg'
import Spacer from '../Spacer/Spacer';
import { useMediaQuery } from 'react-responsive'

const BillingDetails = () => {

    const isSmallDevice = useMediaQuery({
        query: '(max-width: 600px)'
    })

    return (<div>
        <DashboardHeader heading='Billing Details' details='Manage your billing and payment information.' />
        <div className={styles.updateBillingsDetailSection}>

            <div className={styles.contentRow}>

                <InputComponent type="text" placeholder='Billing Adress' label="Billing Adress" />
                {
                    isSmallDevice ? <Spacer /> : null
                }
                <div className={styles.contentSeperator}></div>
                <InputComponent type="text" placeholder='Country' label="Country" />
            </div>
            {
                isSmallDevice ? null : <Spacer />
            }
            <div className={styles.contentRow}>
                {
                    isSmallDevice ? <Spacer /> : null
                }
                <InputComponent type="text" placeholder='State' label="State" />
                {
                    isSmallDevice ? <Spacer /> : null
                }
                <div className={styles.contentSeperator}></div>
                <InputComponent type="number" placeholder='ZIP Code' label="ZIP Code" />

            </div>
        </div>
        <div className={styles.paymentMethodsContainer}>
            <p className={styles.headText}>Payment Methods</p>
            <div className={styles.paymentMethod}>
                <div className={styles.leftSide}>
                    <img src={MasterCardIcon} alt='card_icon' />
                    <p className={styles.headText}>William Smith</p>
                    <p className={styles.primaryText}>**** **** *** 0096</p>
                </div>
                <div className={styles.rightSide}>
                    <button className={styles.btnSecondary}>Edit</button>
                    <button className={styles.btnDanger}> Remove</button>
                </div>
            </div>
            <div className={styles.paymentMethod}>
                <div className={styles.leftSide}>
                    <img src={VisaIcon} alt='card_icon' />
                    <p className={styles.headText}>William Smith</p>
                    <p className={styles.primaryText}>**** **** *** 0096</p>
                </div>
                <div className={styles.rightSide}>
                    <button className={styles.btnSecondary}>Edit</button>
                    <button className={styles.btnDanger}> Remove</button>
                </div>
            </div>
        </div>
    </div>);
}

export default BillingDetails;