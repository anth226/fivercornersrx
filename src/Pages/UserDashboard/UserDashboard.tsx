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

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import DashboardRoutes from '../../routes/DashboardRoutes';
import MainNavbar from '../../Components/Navbar/MainNavbar';
import CloseIcon from "../../assets/icons/close.png"
import { useMediaQuery } from 'react-responsive'
import { PATH } from '../../constants/paths';


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
        return location.pathname == path ? true : false
    }

    return (<div className={styles.pageContainer}>
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
                            <ProfileIcon />
                            <p>Edit Profile</p>
                        </div>
                    </Link>
                    <Link onClick={() => setShowSidebar(false)} style={{ textDecoration: "none" }} to={PATH.TreatmentPlan}>
                        <div className={checkPath(PATH.TreatmentPlan) ? styles.sidebarItem + " " + styles.selectedSidebarItem : styles.sidebarItem}>
                            <TreatementPlanIcon />
                            <p>Treatement Plan</p>
                        </div>
                    </Link>
                    <Link onClick={() => setShowSidebar(false)} style={{ textDecoration: "none" }} to={PATH.MyCase}>
                        <div className={checkPath(PATH.MyCase) ? styles.sidebarItem + " " + styles.selectedSidebarItem : styles.sidebarItem}>
                            <MyCaseIcon />
                            <p>My Case</p>
                        </div>
                    </Link>
                    <Link onClick={() => setShowSidebar(false)} style={{ textDecoration: "none" }} to={PATH.OrderHistory}>
                        <div className={checkPath(PATH.OrderHistory) ? styles.sidebarItem + " " + styles.selectedSidebarItem : styles.sidebarItem}>
                            <OrderHistoryIcon />
                            <p>Order History</p>
                        </div>
                    </Link>
                    <Link onClick={() => setShowSidebar(false)} style={{ textDecoration: "none" }} to={PATH.BillingDetails}>
                        <div className={checkPath(PATH.BillingDetails) ? styles.sidebarItem + " " + styles.selectedSidebarItem : styles.sidebarItem}>
                            <BillingDetailIcon />
                            <p>Billing Detail</p>
                        </div>
                    </Link>
                    <Link onClick={() => setShowSidebar(false)} style={{ textDecoration: "none" }} to={PATH.Security}>
                        <div className={checkPath(PATH.Security) ? styles.sidebarItem + " " + styles.selectedSidebarItem : styles.sidebarItem}>
                            <SecurityIcon />
                            <p>Security</p>
                        </div>
                    </Link>

                </div>
                <div className={styles.dashContent}>
                    <DashboardRoutes />
                </div>
            </div>
        </div>
    </div>);
}

export default UserDashboard;