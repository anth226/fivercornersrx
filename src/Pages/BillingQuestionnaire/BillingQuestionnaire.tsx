import React from 'react'
import styles from "./billingquestionnaire.module.scss"
import FormHeader from '../../Components/FormHeader/FormHeader';
import QuestionnaireSteps from '../../Components/QuestionnaireSteps/QuestionnaireSteps';
import StepTwoSteps from '../../Components/StepTwoSteps/StepTwoSteps';
import CompleteProfile from '../../Components/Forms/CompleteProfile';
import FormTemplate from '../../Components/FormTemplate/FormTemplate';
import ActionButton from '../../Components/ActionButton/ActionButton';
import { BtnTypes } from '../../utils/util';
import InfoStep from '../../Components/Forms/StepTwoForms/InfoStep';
import SildenafilImage from "../../assets/images/bottle-design-Sildenafil.svg"
import ProductDetails from '../../Components/ProductDetails/ProductDetails';
import ShippingForm from '../../Components/CheckoutForm/ShippingForm';

const BillingQuestionnaire: React.FC = () => {

    const [step, setStep] = React.useState(0)

    return (<div className={styles.pageContainer}>
        <div className={styles.contentContainer}>
            <QuestionnaireSteps setStep={setStep} step_no={step + 1} />
            <div className={styles.formsContainer}>
                <div className={styles.leftSide}>
                    <ProductDetails />
                </div>
                <div className={styles.rightSide}>
                    <ShippingForm />
                </div>
            </div>
        </div>
    </div>);
}

export default BillingQuestionnaire;