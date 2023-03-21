import * as React from 'react';
import styles from "./editprofile.module.scss";
import ProfileImage from "../../assets/images/profileuser.jpg"
import { ReactComponent as ProfileIcon } from '../../assets/icons/profileicon.svg';
import { ReactComponent as TreatementPlanIcon } from '../../assets/icons/treatementicon.svg';
import { ReactComponent as MyCaseIcon } from '../../assets/icons/caseicon.svg';
import { ReactComponent as OrderHistoryIcon } from '../../assets/icons/historyicon.svg';
import { ReactComponent as BillingDetailIcon } from '../../assets/icons/billingdetailicon.svg';
import { ReactComponent as SecurityIcon } from '../../assets/icons/securityicon.svg';
import UserAvatar from '../../Components/UserAvatar/UserAvatar';
import InputComponent from '../../Components/InputComponent/InputComponent';

const EditProfile: React.FC = () => {
    return (<div className={styles.pageContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.coverSection}>
                <div className={styles.coverImageContainer}>
                </div>
                <div className={styles.coverContentContainer}>
                    <UserAvatar image={ProfileImage} width="6.5rem" height="6.5rem" />
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
                    <div className={styles.dashboardHeader}>
                        <p className={styles.headText}>Profile Details</p>
                        <p className={styles.primaryText}>You have full control to manage your own account setting.</p>
                    </div>
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
                            <InputComponent />
                            <InputComponent />
                        </div>
                        <div className={styles.contentRow}>
                            <InputComponent />
                            <InputComponent />
                        </div>
                    </div>
                    <button className={styles.actionBtn}> Remove</button>
                </div>
            </div>
        </div>
    </div>);
}

export default EditProfile;