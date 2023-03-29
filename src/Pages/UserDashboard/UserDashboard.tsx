import * as React from 'react';
import styles from "./userdashboard.module.scss";
import ProfileImage from "../../assets/images/profileuser.jpg"
import { ReactComponent as ProfileIcon } from '../../assets/icons/profileicon.svg';
import { ReactComponent as ProfileIconSelected } from '../../assets/icons/profileiconselected.svg';
import { ReactComponent as TreatementPlanIcon } from '../../assets/icons/treatementicon.svg';
import { ReactComponent as TreatementPlanIconSelected } from '../../assets/icons/treatementiconselected.svg';
import { ReactComponent as MyCaseIcon } from '../../assets/icons/caseicon.svg';
import { ReactComponent as MyCaseIconSelected } from '../../assets/icons/caseiconselected.svg';
import { ReactComponent as OrderHistoryIcon } from '../../assets/icons/historyicon.svg';
import { ReactComponent as OrderHistoryIconSelected } from '../../assets/icons/historyiconselected.svg';
import { ReactComponent as BillingDetailIcon } from '../../assets/icons/billingdetailicon.svg';
import { ReactComponent as BillingDetailIconSelected } from '../../assets/icons/billingdetailiconselected.svg';
import { ReactComponent as SecurityIcon } from '../../assets/icons/securityicon.svg';
import { ReactComponent as SecurityIconSelected } from '../../assets/icons/securityiconselected.svg';
import UserAvatar from '../../Components/UserAvatar/UserAvatar';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import DashboardRoutes from '../../routes/DashboardRoutes';
import MainNavbar from '../../Components/Navbar/MainNavbar';
import CloseIcon from "../../assets/icons/close.png"
import { useMediaQuery } from 'react-responsive'
import { PATH } from '../../constants/paths';
import { motion } from "framer-motion";

const UserDashboard: React.FC = () => {

    const [showSidebar, setShowSidebar] = React.useState<boolean>(false)

    React.useEffect(() => {
        if (showSidebar) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [showSidebar])

    const location = useLocation();
    console.log(location.pathname);

    const isSmallDevice = useMediaQuery({
        query: '(max-width: 820px)'
    })

    const checkPath = (path: string) => {
        console.log('location.pathname', location.pathname)
        console.log('path', path)
        return location.pathname === path ? true : false
    }

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        ><div className={styles.pageContainer}>
                <div className={styles.contentContainer}>
                    <div className="navBg">
                        <MainNavbar updateSidebar={() => setShowSidebar(true)} navType="dark" />
                    </div>

                    <div className={styles.coverSection}>
                        <div className={styles.coverImageContainer}>
                        </div>
                        <div className={styles.coverContentContainer}>
                            <UserAvatar image={ProfileImage} width="6.5rem" height="6.5rem" />
                        </div>
                    </div>

                    <div className={styles.dashboardContainer}>
                        <div className={isSmallDevice ? !showSidebar ? styles.sidebarContainerMobile : styles.sidebarContainerMobileOpened : styles.sidebarContainer}>
                            {
                                isSmallDevice ? <img onClick={(prevState) => setShowSidebar(false)} className={styles.closeicon} src={CloseIcon} alt='close_icon' /> : null
                            }

                            <p className={styles.sidebarHead}>MANAGE PROFILE</p>
                            <Link onClick={() => setShowSidebar(false)} style={{ textDecoration: "none" }} to={PATH.EditProfile}>
                                <div className={checkPath(PATH.EditProfile) ? styles.sidebarItem + " " + styles.selectedSidebarItem : styles.sidebarItem}>
                                    {checkPath(PATH.EditProfile) ? <ProfileIconSelected /> : <ProfileIcon />}
                                    <p>Edit Profile</p>
                                </div>
                            </Link>
                            <Link onClick={() => setShowSidebar(false)} style={{ textDecoration: "none" }} to={PATH.TreatmentPlan}>
                                <div className={checkPath(PATH.TreatmentPlan) ? styles.sidebarItem + " " + styles.selectedSidebarItem : styles.sidebarItem}>
                                    {checkPath(PATH.TreatmentPlan) ? <TreatementPlanIconSelected /> : <TreatementPlanIcon />}
                                    <p>Treatement Plan</p>
                                </div>
                            </Link>
                            <Link onClick={() => setShowSidebar(false)} style={{ textDecoration: "none" }} to={PATH.MyCase}>
                                <div className={checkPath(PATH.MyCase) ? styles.sidebarItem + " " + styles.selectedSidebarItem : styles.sidebarItem}>
                                    {checkPath(PATH.MyCase) ? <MyCaseIconSelected /> : <MyCaseIcon />}
                                    <p>My Case</p>
                                </div>
                            </Link>
                            <Link onClick={() => setShowSidebar(false)} style={{ textDecoration: "none" }} to={PATH.OrderHistory}>
                                <div className={checkPath(PATH.OrderHistory) ? styles.sidebarItem + " " + styles.selectedSidebarItem : styles.sidebarItem}>
                                    {checkPath(PATH.OrderHistory) ? <OrderHistoryIconSelected /> : <OrderHistoryIcon />}
                                    <p>Order History</p>
                                </div>
                            </Link>
                            <Link onClick={() => setShowSidebar(false)} style={{ textDecoration: "none" }} to={PATH.BillingDetails}>
                                <div className={checkPath(PATH.BillingDetails) ? styles.sidebarItem + " " + styles.selectedSidebarItem : styles.sidebarItem}>
                                    {checkPath(PATH.BillingDetails) ? <BillingDetailIconSelected /> : <BillingDetailIcon />}
                                    <p>Billing Detail</p>
                                </div>
                            </Link>
                            <Link onClick={() => setShowSidebar(false)} style={{ textDecoration: "none" }} to={PATH.Security}>
                                <div className={checkPath(PATH.Security) ? styles.sidebarItem + " " + styles.selectedSidebarItem : styles.sidebarItem}>
                                    {checkPath(PATH.Security) ? <SecurityIconSelected /> : <SecurityIcon />}
                                    <p>Security</p>
                                </div>
                            </Link>

                        </div>
                        <div className={styles.dashContent}>
                            <DashboardRoutes />
                        </div>
                    </div>
                </div>
            </div>
        </motion.main>);
}

export default UserDashboard;