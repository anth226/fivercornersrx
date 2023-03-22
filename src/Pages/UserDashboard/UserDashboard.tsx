import * as React from 'react';
import styles from "./userdashboard.module.scss";
import ProfileImage from "../../assets/images/profileuser.jpg"
import { ReactComponent as ProfileIcon } from '../../assets/icons/profileicon.svg';
import { ReactComponent as TreatementPlanIcon } from '../../assets/icons/treatementicon.svg';
import { ReactComponent as MyCaseIcon } from '../../assets/icons/caseicon.svg';
import { ReactComponent as OrderHistoryIcon } from '../../assets/icons/historyicon.svg';
import { ReactComponent as BillingDetailIcon } from '../../assets/icons/billingdetailicon.svg';
import { ReactComponent as SecurityIcon } from '../../assets/icons/securityicon.svg';
import UserAvatar from '../../Components/UserAvatar/UserAvatar';
import InputComponent from '../../Components/InputComponent/InputComponent';
import TreatmentPlan from '../../Components/TreatmentPlan/TreatmentPlan';
import EditProfile from '../../Components/EditProfile/EditProfile';
import MyCase from '../../Components/MyCase/MyCase';
import OrderHistory from '../../Components/OrderHistory/OrderHistory';
import BillingDetails from '../../Components/BillingDetails/BillingDetails';
import Security from '../../Components/Security/Security';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'


const UserDashboard: React.FC = () => {
    const location = useLocation();
    console.log(location.pathname);

    const checkPath = (path: string) => {
        return location.pathname == path ? true : false
    }

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
                    <Link style={{ textDecoration: "none" }} to="/">
                        <div className={checkPath("/") ? styles.sidebarItem + " " + styles.selectedSidebarItem : styles.sidebarItem}>
                            <ProfileIcon />
                            <p>Edit Profile</p>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/treatmentplan">
                        <div className={checkPath("/treatmentplan") ? styles.sidebarItem + " " + styles.selectedSidebarItem : styles.sidebarItem}>
                            <TreatementPlanIcon />
                            <p>Treatement Plan</p>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/mycase">
                        <div className={checkPath("/mycase") ? styles.sidebarItem + " " + styles.selectedSidebarItem : styles.sidebarItem}>
                            <MyCaseIcon />
                            <p>My Case</p>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/orderhistory">
                        <div className={checkPath("/orderhistory") ? styles.sidebarItem + " " + styles.selectedSidebarItem : styles.sidebarItem}>
                            <OrderHistoryIcon />
                            <p>Order History</p>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/billingdetails">
                        <div className={checkPath("/billingdetails") ? styles.sidebarItem + " " + styles.selectedSidebarItem : styles.sidebarItem}>
                            <BillingDetailIcon />
                            <p>Billing Detail</p>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/security">
                        <div className={checkPath("/security") ? styles.sidebarItem + " " + styles.selectedSidebarItem : styles.sidebarItem}>
                            <SecurityIcon />
                            <p>Security</p>
                        </div>
                    </Link>

                </div>
                <div className={styles.dashContent}>
                    <Routes>
                        <Route path="/" element={<EditProfile />} />
                        <Route path="/treatmentplan" element={<TreatmentPlan />} />
                        <Route path="/mycase" element={<MyCase />} />
                        <Route path="/orderhistory" element={<OrderHistory />} />
                        <Route path="/billingdetails" element={<BillingDetails />} />
                        <Route path="/security" element={<Security />} />
                    </Routes>
                </div>
            </div>
        </div>
    </div>);
}

export default UserDashboard;