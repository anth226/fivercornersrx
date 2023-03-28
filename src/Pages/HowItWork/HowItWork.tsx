import React from "react";
import { Button } from "react-bootstrap";
import styles from "./howitwork.module.scss";

//image
import icon from "../../assets/icons/Icon.svg";
import bg from "../../assets/images/BG.svg";
import bg1 from "../../assets/images/BG-1.svg";
import bg2 from "../../assets/images/BG-2.svg";
import wave from "../../assets/images/wave.svg";
import MainNavbar from "../../Components/Navbar/MainNavbar";
import Footer from "../../Components/Footer/Footer";

const HowItsWork = () => {
  return (
    <div className={styles.HowItsWOrkcontainer}>
      <div className={styles.hero_sectionHowItsWork}>
        <div className={styles.mainHOWITSWORK + " container width_component mainHOWITSWORK"}>
          {/* <Navbar /> */}
          <MainNavbar navType="dark" updateSidebar={() => { }} />
          <div className={styles.howitswork_container}>
            <h1>How it works</h1>
            <p>
              Welcome to Five Corners Rx, where getting ED medication online is
              now easier than ever before. Our optimized services have been
              designed to save you time and provide you with the simplest,
              fastest, and most affordable way to get your ED medication. Our
              process is straightforward - select your treatment plan, complete
              the checkout process, and answer a quick health survey to place
              your order. With an average order time of 5 minutes or less, you
              can start overcoming ED in no time!
            </p>
          </div>
        </div>
      </div>
      {/* Proper Work Telling section */}
      <div className={styles.mainWorkscontainer}>
        <div className={styles.mainWorkscontainer_box + " " + styles.width_component + " d-flex"}>
          <div className={styles.freeHealthImg}>
            <img src={bg} alt="" />
          </div>
          <div className={styles.freeHealthtxt}>
            <h2>Free Health Evaluation</h2>
            <p>
              To ensure your safety and satisfaction, we provide a free online
              health evaluation through our partner US-licensed physicians for
              every new customer. Our quick health survey will help our
              physicians effectively evaluate your health and preferred
              treatment plan. If approved, your order will be cleared and
              shipped to your doorstep. So why wait? Start your journey towards
              overcoming ED by completing our health survey now!
            </p>
            <Button className={styles.Free_Consult_link}>
              Start Now Consultation
              <img
                className={styles.Free_Consult_rightArrow + " mx-3"}
                src={icon}
                alt="arrow"
              />
            </Button>
          </div>
        </div>
        <div className={styles.longterm_section}>
          <div className={styles.mainWorkscontainer_box + " " + styles.mainWorkscontainer_reverse + " " + styles.width_component + " d-flex"}>
            <div className={styles.freeHealthImg}>
              <img src={bg1} alt="" />
            </div>
            <div className={styles.freeHealthtxt}>
              <h2>Free Health Evaluation</h2>
              <p>
                To ensure your safety and satisfaction, we provide a free online
                health evaluation through our partner US-licensed physicians for
                every new customer. Our quick health survey will help our
                physicians effectively evaluate your health and preferred
                treatment plan. If approved, your order will be cleared and
                shipped to your doorstep. So why wait? Start your journey
                towards overcoming ED by completing our health survey now!
              </p>
              {/* <Link href="#"> */}
              <Button className={styles.Free_Consult_link}>
                Start Now Consultation
                <img
                  className={styles.Free_Consult_rightArrow + " mx-3"}
                  src={icon}
                  alt="arrow"
                />
              </Button>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <div className={styles.mainWorkscontainer_box + " " + styles.mainWorkscontainer_save + " " + styles.width_component + " d-flex"}>
          <div className={styles.freeHealthImg}>
            <img src={bg2} alt="" />
          </div>
          <div className={styles.freeHealthtxt}>
            <h2>SAFE and SECURE</h2>
            <p>
              Your privacy and security are our top priorities at Five Corners
              Rx. We exercise discretion on every level to protect your privacy
              and maintain compliance with existing regulations. All orders are
              shipped in plain, unbranded packages, and your bank statements
              will not disclose the specifics of your purchase. With our safe
              and secure service, you can order with confidence. Don't let ED
              hold you back any longer. Start your journey towards overcoming ED
              now with us.
            </p>
            <Button className={styles.Free_Consult_link}>
              Start Now Consultation
              <img
                className={styles.Free_Consult_rightArrow + " mx-3"}
                src={icon}
                alt="arrow"
              />
            </Button>
          </div>
        </div>
      </div>
      {/* Proper Work Telling section */}
      {/* Chat with us */}
      <div className={styles.chatWithUs_conatiner}>
        <div className={styles.chatWithUs_section}>
          <div className={"d-flex justify-content-center align-items-center text-center"}>
            <img src={wave} alt="" />
            <h2>Chat with us!</h2>
          </div>
          <p>
            If you have more questions, you may send us an email at{" "}
            <strong>support@fivecornersrx.com</strong>
          </p>
          <p>
            You may also reach us through our toll-free hotline{" "}
            <strong>1-800-240-7624,</strong>
            <br />
            Monday- Sunday, 9 AM to 6 PM EST.
          </p>
          <p>
            You may also visit our Frequently Asked Questions page
            for more information.
          </p>
        </div>
      </div>
      {/* Chat with us */}
      <Footer />
    </div >
  );
};

export default HowItsWork;
