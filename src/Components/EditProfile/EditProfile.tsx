import React from 'react'
import InputComponent from '../InputComponent/InputComponent';
import UserAvatar from '../UserAvatar/UserAvatar';
import styles from "./editprofile.module.scss"
import ProfileImage from "../../assets/images/profileuser.jpg"
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import { motion } from "framer-motion";

const EditProfile = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        ><div>
                <DashboardHeader heading='Profile Details' details='You have full control to manage your own account setting.' />
                <div className={styles.updateProfilePictureSection}>
                    <div className={styles.leftSide}>
                        <UserAvatar primaryText="Your avatar" secondaryText="PNG or JPG no bigger than 800px wide and tall." image={ProfileImage} width="6.5rem" height="6.5rem" />
                    </div>
                    <div className={styles.rightSide}>
                        <button className={styles.btnSecondary}>Change Image</button>
                        <button className={styles.btnDanger}> Remove</button>
                    </div>
                </div>
                <div className={styles.updatePersonalDetailSection}>
                    <p className={styles.headText}>Personal Details</p>
                    <p className={styles.primaryText}>Edit your personal information and address.</p>
                    <div className={styles.contentRow}>
                        <InputComponent type="text" placeholder='First Name' label="First Name" />
                        <div className={styles.contentSeperator}></div>
                        <InputComponent type="text" placeholder='Last Name' label="Last Name" />
                    </div>
                    <div className={styles.contentRow}>
                        <InputComponent type="number" placeholder='Phone No.' label="Phone No." />
                        <div className={styles.contentSeperator}></div>
                        <InputComponent type="text" placeholder='Date of Birth' label="Date of Birth" />
                    </div>
                </div>
                <button className={styles.actionBtn}> Remove</button></div>
        </motion.main>);
}

export default EditProfile;