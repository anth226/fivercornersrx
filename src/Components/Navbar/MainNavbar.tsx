// import { BrowserRouter as Link } from 'react-router-dom';
import React, { Dispatch } from "react";
import styles from "./navbar.module.scss";
import logoLight from "../../assets/icons/logo.svg";
import logoDark from "../../assets/icons/logoDark.svg";
import phoneLight from "../../assets/icons/phoneN.svg";
import phoneDark from "../../assets/icons/phoneND.svg";
import user from "../../assets/icons/userN.svg";
import userDark from "../../assets/icons/userND.svg";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import UsernameAvatar from '../../Components/UsernameAvatar/UsernameAvatar';
import { Link, useHistory } from "react-router-dom";
import { PATH } from "../../constants/paths";
import ProfileMenuPopUp from "../ProfileMenuPopUp/ProfileMenuPopUp";
import { useMediaQuery } from "react-responsive";

type Props = {
  navType: string;
  updateSidebar: () => void
}


const MainNavbar: React.FC<Props> = ({ navType, updateSidebar }) => {

  const history = useHistory()

  const isSmallDevice = useMediaQuery({
    query: '(max-width: 991px)'
  })
  const isSidebarShow = useMediaQuery({
    query: '(max-width: 820px)'
  })
  console.log('TT', localStorage.getItem('user'))
  // const userData: User = JSON.parse(localStorage.getItem('user'));
  const [showProfilePopUp, setShowProfilePopUp] = React.useState<boolean>(false)

  return (
    <Navbar bg="" expand="lg" className={styles.navbar}>
      <Container fluid className={styles.navbar_container}>
        {
          localStorage.getItem('user') === "loggedIn" && isSmallDevice && <div style={{ position: 'relative' }}>
            <UsernameAvatar updateSidebar={history.location.pathname.includes('userdash') ? updateSidebar : () => {
              console.log("CLCIKED", history.location.pathname.includes('userdash'));
              setShowProfilePopUp(!showProfilePopUp)
            }} username="Wasiq Abdullah" />
            {showProfilePopUp && <ProfileMenuPopUp setShowProfilePopUp={setShowProfilePopUp} right={true} />}
          </div>
        }
        {/* {showProfilePopUp && <ProfileMenuPopUp />} */}

        <Navbar.Brand>
          <Link style={{ textDecoration: 'none' }} to="/">
            <img src={navType == "dark" ? logoLight : logoDark} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className={navType == "dark" ? styles.navToggleLight : styles.navToggleDark} />
        <Navbar.Collapse id="navbarScroll" className={navType == 'dark' ? styles.navbarScrollLight : styles.navbarScrollDark}>
          <Nav className={navType == "dark" ? styles.nav_conLight + " me-auto my-2 my-lg-0 " : styles.nav_conDark + " me-auto my-2 my-lg-0"}
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Nav.Link className={styles.nav_links}> */}
            <Link style={{ textDecoration: 'none' }} className={styles.nav_links} to={PATH.HowItWork}>
              How It Works
            </Link>
            {/* </Nav.Link> */}

            {/* <Nav.Link className={styles.nav_links}> */}
            <Link style={{ textDecoration: 'none' }} className={styles.nav_links} to={PATH.FaqsPage}>FAQs</Link>
            {/* </Nav.Link> */}

          </Nav>
          <Nav className={styles.right_menu + " d-flex"}>
            <Nav.Link className={navType == 'dark' ? styles.nav_linksLight + " " + styles.navPhone : styles.nav_linksDark + " " + styles.navPhone}><img src={navType == 'dark' ? phoneLight : phoneDark} alt="" />1-800-240-7624</Nav.Link>
            {
              localStorage.getItem('user') === "loggedIn" ? !isSmallDevice && <UsernameAvatar updateSidebar={() => setShowProfilePopUp(!showProfilePopUp)} username="Wasiq Abdullah" /> : <Link to={PATH.SignIn}>
                <Button variant="light" className={navType == 'dark' ? styles.loginBtnLight : styles.loginBtnDark}><img src={navType == 'dark' ? user : userDark} alt="" />Login</Button>
              </Link>
            }
            {showProfilePopUp && <ProfileMenuPopUp setShowProfilePopUp={setShowProfilePopUp} />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
