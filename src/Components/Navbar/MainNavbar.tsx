// import { BrowserRouter as Link } from 'react-router-dom';
import React, { Dispatch } from "react";
import "./navbar.scss";
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

type Props = {
  navType: string;
  updateSidebar: () => void
}

const MainNavbar: React.FC<Props> = ({ navType, updateSidebar }) => {
  return (
    <Navbar bg="" expand="lg" className="navbar">
      <Container fluid className="navbar-container">
        <UsernameAvatar updateSidebar={updateSidebar} username="Wasiq Abdullah" />
        <Navbar.Brand href="#" >

          <img src={navType == "dark" ? logoLight : logoDark} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className={navType == "dark" ? "navToggleLight" : "navToggleDark"} />
        <Navbar.Collapse id="navbarScroll" className={navType == 'dark' ? "navbarScrollLight" : "navbarScrollDark"}>
          <Nav
            className={navType == "dark" ? "me-auto my-2 my-lg-0 nav-conLight" : "me-auto my-2 my-lg-0 nav-conDark"}
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="nav-links">How It Works</Nav.Link>
            <Nav.Link href="#action2" className="nav-links">FAQs</Nav.Link>
          </Nav>
          <Nav className="d-flex right-menu">
            <Nav.Link href="#action1" className={navType == 'dark' ? "nav-linksLight navPhone" : "nav-linksDark navPhone"}><img src={navType == 'dark' ? phoneLight : phoneDark} alt="" />1-800-240-7624</Nav.Link>
            <Button variant="light" className={navType == 'dark' ? "loginBtnLight" : "loginBtnDark"}><img src={navType == 'dark' ? user : userDark} alt="" />Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
