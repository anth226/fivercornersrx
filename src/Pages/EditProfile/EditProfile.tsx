import * as React from 'react';
import styles from "./editprofile.module.scss";
import ProfileImage from "../../assets/images/profileuser.jpg"
import { ReactComponent as ProfileIcon } from '../../assets/icons/profileicon.svg';
import { ReactComponent as TreatementPlanIcon } from '../../assets/icons/treatementicon.svg';
import { ReactComponent as MyCaseIcon } from '../../assets/icons/caseicon.svg';
import { ReactComponent as OrderHistoryIcon } from '../../assets/icons/historyicon.svg';
import { ReactComponent as BillingDetailIcon } from '../../assets/icons/billingdetailicon.svg';
import { ReactComponent as SecurityIcon } from '../../assets/icons/securityicon.svg';

const EditProfile = () => {
    return (<div className={styles.pageContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.coverSection}>
                <div className={styles.coverImageContainer}>
                </div>
                <div className={styles.coverContentContainer}>
                    <img src={ProfileImage} alt="user_profile_image" />
                    <div className={styles.profileDetails}>
                        <p className={styles.userName}>William Smith</p>
                        <p className={styles.userEmail}>email@example.com</p>
                    </div>
                </div>
            </div>

            <div className={styles.dashboardContainer}>
                <div className={styles.sidebarContainer}>
                    <p className={styles.sidebarHead}>MANAGE PROFILE</p>
                    <div className={styles.sidebarItem + " " + styles.selectedSidebarItem}>
                        <ProfileIcon />
                        <p>Edit Profile</p>
                    </div>
                    <div className={styles.sidebarItem}>
                        <TreatementPlanIcon />
                        <p>Treatement Plan</p>
                    </div>
                    <div className={styles.sidebarItem}>
                        <MyCaseIcon />
                        <p>My Case</p>
                    </div>
                    <div className={styles.sidebarItem}>
                        <OrderHistoryIcon />
                        <p>Order History</p>
                    </div>
                    <div className={styles.sidebarItem}>
                        <BillingDetailIcon />
                        <p>Billing Detail</p>
                    </div>
                    <div className={styles.sidebarItem}>
                        <SecurityIcon />
                        <p>Security</p>
                    </div>
                </div>
                <div className={styles.dashContent}>

                </div>
            </div>
        </div>
    </div>);
}

export default EditProfile;