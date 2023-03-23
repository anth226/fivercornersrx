import React from 'react';
import InputComponent from '../../Components/InputComponent/InputComponent';
import styles from "./signup.module.scss";
import { Container, Form } from "react-bootstrap";
import GoogleIcon from "../../assets/icons/google.svg"
import FormHeader from '../../Components/FormHeader/FormHeader';

const SignUp: React.FC = () => {
    return (<div className={styles.screenContainer}>
        <div className={styles.contentContainer}>
            <FormHeader primary="WELCOME TO FiveCornerRx!" secondary="No waiting rooms. No expensive doctors visits. Prescription treatments sent to your door, discreetly. This is the future of tele-medicine." />
            <div className={styles.formContainer}>
                <InputComponent bigInput={true} type="text" placeholder="Enter your email" label="Email Address" />
                <br />
                <InputComponent bigInput={true} type="password" placeholder="Enter your password" label="Create Password" />
                <br />
                <InputComponent bigInput={true} type="password" placeholder="Re-type your password" label="Confirm Password" />
                <div className={styles.rowContent}>
                    <div className={styles.remebermeCheckboxContainer}>
                        <Form.Check.Input className={styles.rememberMecheckbox}
                            checked={true}
                            onChange={() => { }}
                        />
                        <p className={styles.primaryText}>I agree to the <span>Terms of Conditions</span> and <span>Privacy Policy.</span></p>
                    </div>
                </div>
                <button className={styles.formBtn + " " + styles.dangerBtn}>Sign Up</button>
                <button className={styles.formBtn + " " + styles.secondaryBtn}><img src={GoogleIcon} />Continue with Google</button>
                <p style={{ textAlign: "center" }} className={styles.primaryText}>Already have an account?  <span>Sign in</span></p>
            </div>
        </div>
    </div>);
}

export default SignUp;