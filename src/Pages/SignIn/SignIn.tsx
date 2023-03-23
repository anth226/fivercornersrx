import React from 'react';
import InputComponent from '../../Components/InputComponent/InputComponent';
import styles from "./signin.module.scss";
import { Container, Form } from "react-bootstrap";
import GoogleIcon from "../../assets/icons/google.svg"
import FormHeader from '../../Components/FormHeader/FormHeader';

const SignIn: React.FC = () => {
    return (<div className={styles.screenContainer}>
        <div className={styles.contentContainer}>
            <FormHeader primary="Sign in to your account" secondary="No waiting rooms. No expensive doctors visits. Sign in to access your account." />
            <div className={styles.formContainer}>
                <InputComponent bigInput={true} type="text" placeholder="Enter your email" label="Email Address" />
                <br />
                <InputComponent bigInput={true} type="password" placeholder="Enter your password" label="Password" />
                <div className={styles.rowContent}>
                    <div className={styles.remebermeCheckboxContainer}>
                        <Form.Check.Input className={styles.rememberMecheckbox}
                            checked={true}
                            onChange={() => { }}
                        />
                        <p className={styles.primaryText}>Remember me</p>
                    </div>
                    <p className={styles.primaryText + " " + styles.forgotPassText}>Forgot password?</p>
                </div>
                <button className={styles.formBtn + " " + styles.dangerBtn}>Sign In</button>
                <button className={styles.formBtn + " " + styles.secondaryBtn}><img src={GoogleIcon} />Continue with Google</button>
                <p style={{ textAlign: "center" }} className={styles.primaryText}>Don't have an account? <span>Sign up</span></p>
            </div>
        </div>
    </div>);
}

export default SignIn;