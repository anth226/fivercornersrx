import React from 'react'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import InputComponent from '../InputComponent/InputComponent';
import styles from "./security.module.scss"
import { motion } from "framer-motion";

const Security = () => {
    return (<motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
    ><div>
            <DashboardHeader heading='Security' details='Edit your account settings and change your password here.' />
            <div className={styles.emailUpdateContainer}>
                <p className={styles.headText}>
                    Email Address
                </p>
                <p className={styles.primaryText}>Your current email address is stellaflores@gmail.com</p>
                <div className={styles.inputsContainer}>
                    <InputComponent type="text" placeholder="Enter new email" label="New email address" />
                    <div></div>
                </div>
                <button className={styles.actionBtn}> Update Email</button>
            </div>
            <div className={styles.passwordUpdateContainer}>
                <p className={styles.headText}>
                    Change Password
                </p>
                <p className={styles.primaryText}>We will email you a confirmation when changing your password, so please expect that email after submitting.</p>
                <div className={styles.inputsContainer}>
                    <InputComponent type="email" placeholder="Current password" label="Current password" />
                    <div></div>
                </div>
                <div className={styles.inputsContainer}>
                    <InputComponent type="text" placeholder="New password" label="New password" />
                    <div></div>
                </div>
                <div className={styles.inputsContainer}>
                    <InputComponent type="text" placeholder="Confirm New Password" label="Confirm New Password" />
                    <div></div>
                </div>
                <button className={styles.actionBtn}>Change Password</button>
                <br />
                <br />
                <p className={styles.primaryText}>Can't remember your current password? Reset your password via email</p>
            </div>
        </div>
    </motion.main>);
}

export default Security;