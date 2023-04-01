import React from 'react';
import InputComponent from '../../Components/InputComponent/InputComponent';
import styles from "./signup.module.scss";
import { Container, Form } from "react-bootstrap";
import GoogleIcon from "../../assets/icons/google.svg"
import FormHeader from '../../Components/FormHeader/FormHeader';
import MainNavbar from '../../Components/Navbar/MainNavbar';
import { useHistory } from 'react-router-dom';
import { PATH } from '../../constants/paths';
import { motion } from "framer-motion";
import { validateEmail } from '../../utils/util';

const SignUp: React.FC = () => {
    const history = useHistory()
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [confirmPassword, setConfirmPassword] = React.useState<string>("");

    const [formValidated, setFormValidated] = React.useState<boolean>(false);
    const [emailValidation, setEmailValidation] = React.useState<boolean>(false);
    const [passwordValidation, setPasswordValidation] = React.useState<boolean>(false);

    const [agreedTerms, setAgreedTerms] = React.useState<boolean>(false);


    React.useEffect(() => {
        setEmailValidation(validateEmail(email))
        setPasswordValidation(password.length >= 5)

        if (passwordValidation && emailValidation && password === confirmPassword) {
            setFormValidated(true)
        } else {
            setFormValidated(false)
        }
    }, [email, password, confirmPassword])

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        ><div className={styles.screenContainer}>
                <div className={styles.contentContainer}>
                    <div className="navBgLight">
                        <div className='container'>
                            <MainNavbar updateSidebar={() => { }} navType="light" />
                        </div>
                    </div>
                    <FormHeader primary="WELCOME TO FiveCornerRx!" secondary="No waiting rooms. No expensive doctors visits. Prescription treatments sent to your door, discreetly. This is the future of tele-medicine." />
                    <div className={styles.formContainer}>
                        <InputComponent value={email} setValue={setEmail} bigInput={true} type="text" placeholder="Enter your email" label="Email Address" />
                        {email.length > 0 && !emailValidation && <p className='errorMessage'>Please Enter Valid Email Address</p>}
                        <br />
                        <InputComponent value={password} setValue={setPassword} bigInput={true} type="password" placeholder="Enter your password" label="Create Password" />
                        {password.length > 0 && !passwordValidation && <p className='errorMessage'>Password must contain min 5 characters</p>}
                        <br />
                        <InputComponent value={confirmPassword} setValue={setConfirmPassword} bigInput={true} type="password" placeholder="Re-type your password" label="Confirm Password" />
                        {confirmPassword.length > 0 && password !== confirmPassword && <p className='errorMessage'>Confirm Password must match Password</p>}
                        <div className={styles.rowContent}>
                            <div className={styles.remebermeCheckboxContainer}>
                                <Form.Check.Input className={styles.rememberMecheckbox}
                                    checked={agreedTerms}
                                    onChange={() => { setAgreedTerms(!agreedTerms) }}
                                />
                                <p className={styles.primaryText}>I agree to the <span>Terms of Conditions</span> and <span>Privacy Policy.</span></p>
                            </div>
                        </div>
                        <button disabled={!formValidated} className={styles.formBtn + " " + styles.dangerBtn}>Sign Up</button>
                        <button className={styles.formBtn + " " + styles.secondaryBtn}><img src={GoogleIcon} />Continue with Google</button>
                        <p style={{ textAlign: "center" }} className={styles.primaryText}>Already have an account?  <span onClick={() => history.push(PATH.SignIn)}>Sign in</span></p>
                    </div>
                </div>
            </div></motion.main>);
}

export default SignUp;