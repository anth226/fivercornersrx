import React from 'react'
import styles from "./billingquestionnaire.module.scss"
import FormHeader from '../../Components/FormHeader/FormHeader';
import QuestionnaireSteps from '../../Components/QuestionnaireSteps/QuestionnaireSteps';
import ProductDetails from '../../Components/ProductDetails/ProductDetails';
import { billingSteps } from '../../constants/quessionairesteps';
import ShippingForm from '../../Components/CheckoutForm/ShippingForm';
import BillingForm from '../../Components/CheckoutForm/BillingForm';
import PaymentInformation from '../../Components/CheckoutForm/PaymentInformation';
import MainNavbar from '../../Components/Navbar/MainNavbar';

const BillingQuestionnaire: React.FC = () => {
    const [step, setStep] = React.useState(0)

    const componentsArr = [
        <ShippingForm step={step} setStep={setStep} />,
        <BillingForm step={step} setStep={setStep} />,
        <PaymentInformation step={step} setStep={setStep} />
    ]

    return (<div className={styles.pageContainer}>
        <div className={styles.contentContainer}>
            <div>
                <div className="navBg">
                    <div className='container'>
                        <MainNavbar updateSidebar={() => { }} navType="dark" />
                    </div>
                </div>
                <QuestionnaireSteps steps={billingSteps} setStep={setStep} step_no={step + 1} />
                <div className={styles.formsContainer + " container"}>
                    <div className={styles.leftSide}>
                        <ProductDetails />
                    </div>
                    <div className={styles.rightSide}>
                        {
                            componentsArr[step]
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default BillingQuestionnaire;