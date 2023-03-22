import React from 'react'
import styles from "./treatmentplan.module.scss"
import SidenafilMedicine from "../../assets/images/sidenafil.svg"
import DashboardHeader from '../DashboardHeader/DashboardHeader';

const TreatmentPlan = () => {
    return (
        <div>
            <DashboardHeader heading='Treatment Plan' details='You have full control to manage and change your treatment plan.' />
            <div className={styles.treatmentPlanContentContainer}>

                <div className={styles.medicineDetails}>
                    <img src={SidenafilMedicine} alt="medicine_image" />
                    <p className={styles.bigText}>Sildenafil</p>
                    <p className={styles.primaryText}>60mg Sildenafil</p>
                    <p className={styles.primaryText}>12 Doses</p>
                    <p className={styles.primaryText}>3x per week</p>
                    <button>Switch Plan</button>
                </div>
                <div className={styles.orderDetails}>
                    <div className={styles.orderDetailsHeader}>
                        <p className={styles.primaryText}>Status</p>
                        <button>Pending</button>
                    </div>
                    <div className={styles.orderDetailsContent}>
                        <div className={styles.contentRow}>
                            <p className={styles.primaryText}>Order Status:</p>
                            <p className={styles.primaryText + " " + styles.success_Text}>Confirmed</p>
                        </div>
                        <div className={styles.contentRow}>
                            <p className={styles.primaryText}>ID Verification:</p>
                            <p className={styles.primaryText + " " + styles.success_Text}>Verification Successfull</p>
                        </div>
                        <div className={styles.contentRow}>
                            <p className={styles.primaryText}>Medical Status:</p>
                            <p className={styles.primaryText}>Cancelled</p>
                        </div>
                        <div className={styles.contentRow}>
                            <p className={styles.primaryText}>Created</p>
                            <p className={styles.primaryText}>02/23/2023</p>
                        </div>
                        <div className={styles.contentRow}>
                            <p className={styles.primaryText}>Subscribtion Status:</p>
                            <p className={styles.primaryText}>Stopped</p>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    );
}

export default TreatmentPlan;