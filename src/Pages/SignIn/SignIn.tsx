import React from 'react';
import InputComponent from '../../Components/InputComponent/InputComponent';
import styles from "./signin.module.scss";
import { Container, Form } from "react-bootstrap";
import GoogleIcon from "../../assets/icons/google.svg"
import FormHeader from '../../Components/FormHeader/FormHeader';
import MainNavbar from '../../Components/Navbar/MainNavbar';
import { useHistory } from 'react-router-dom';
import { PATH } from '../../constants/paths';
import { motion } from "framer-motion";

const SignIn: React.FC = () => {
    const [formValidated, setFormValidated] = React.useState<boolean>(false);
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [rememberMe, setRememberMe] = React.useState<boolean>(false);
    const history = useHistory()

    console.log('email', email)
    console.log('password', password)
    console.log('rememberMe', rememberMe)

    React.useEffect(() => {
        if (email.length > 5 && password.length > 5) {
            setFormValidated(true)
        } else {
            setFormValidated(false)
        }
    }, [email, password])

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        >
            <div className={styles.screenContainer}>
                <div className={styles.contentContainer}>
                    <div className="navBgLight">
                        <div className='container'>
                            <MainNavbar updateSidebar={() => { }} navType="light" />
                        </div>
                    </div>
                    <FormHeader primary="Sign in to your account" secondary="No waiting rooms. No expensive doctors visits. Sign in to access your account." />
                    <div className={styles.formContainer}>
                        <InputComponent value={email} setValue={setEmail} bigInput={true} type="email" placeholder="Enter your email" label="Email Address" />
                        <br />
                        <InputComponent value={password} setValue={setPassword} bigInput={true} type="password" placeholder="Enter your password" label="Password" />
                        <div className={styles.rowContent}>
                            <div className={styles.remebermeCheckboxContainer}>
                                <Form.Check.Input className={styles.rememberMecheckbox}
                                    checked={rememberMe}
                                    onChange={() => { setRememberMe(!rememberMe) }}
                                />


                                <p className={styles.primaryText}>Remember me</p>
                            </div>
                            <p className={styles.primaryText + " " + styles.forgotPassText}>Forgot password?</p>
                        </div>
                        <button disabled={!formValidated} onClick={() => {
                            localStorage.setItem("user", "loggedIn")
                            history.push(PATH.Quessionaire)
                        }} className={styles.formBtn + " " + styles.dangerBtn}>Sign In</button>
                        <button className={styles.formBtn + " " + styles.secondaryBtn}><img src={GoogleIcon} />Continue with Google</button>
                        <p style={{ textAlign: "center" }} className={styles.primaryText}>Don't have an account? <span onClick={() => history.push(PATH.SignUp)}>Sign up</span></p>
                    </div>
                </div>
            </div >
        </motion.main>);
}

export default SignIn;