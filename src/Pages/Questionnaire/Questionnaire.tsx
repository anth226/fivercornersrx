import React from 'react'
import styles from "./questionnaire.module.scss"
import FormHeader from '../../Components/FormHeader/FormHeader';
import QuestionnaireSteps from '../../Components/QuestionnaireSteps/QuestionnaireSteps';
import StepTwoSteps from '../../Components/StepTwoSteps/StepTwoSteps';
import CompleteProfile from '../../Components/Forms/CompleteProfile';
import FormTemplate from '../../Components/FormTemplate/FormTemplate';
import ActionButton from '../../Components/ActionButton/ActionButton';
import { BtnTypes } from '../../utils/util';
import InfoStep from '../../Components/Forms/StepTwoForms/InfoStep';
import SildenafilImage from "../../assets/images/bottle-design-Sildenafil.svg"
import { completeAccountSteps } from '../../constants/quessionairesteps';
import MainNavbar from '../../Components/Navbar/MainNavbar';
import { useHistory } from 'react-router-dom';
import { PATH } from '../../constants/paths';
import { motion } from "framer-motion";

const Questionnaire: React.FC = () => {
    const history = useHistory()

    const [step, setStep] = React.useState(0)

    const [hideFormHeader, setHideFormHeader] = React.useState<boolean>(false);

    const componentsArr = [
        {
            primary: "Complete your profile",
            secondary: "The information helps your doctor determine if you're eligible for treatment.",
            component: <CompleteProfile step_no={step} setStep_no={setStep} />
        },
        {
            primary: "Complete health Questionnaire",
            secondary: "Answer a personalized health quiz about your symptoms and medical history. The online visit takes 10-15 minutes to complete.",
            component: <StepTwoSteps setHideFormHeader={setHideFormHeader} setOuterStep={setStep} />,
        },
        {
            primary: "Recommended Pill for ED Treatment",
            secondary: "A starting dosage of 60mg is the most common for men who are new to ED medication. Based on the information you provided, a physician will determine if this dosage is right for you, or recommend a more appropriate dosage.",
            component: <InfoStep setHideFormHeader={setHideFormHeader} clickAction={() => history.push(PATH.BillingQuestionnaire)} title="Sildenafil Citrate" description='Generic Viagra' step_no={step} setStep_no={setStep} image={SildenafilImage} />
        }
    ]

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        ><div className={styles.pageContainer}>
                <div className={styles.contentContainer}>
                    <div className="navBg ">
                        <div className='container'>
                            <MainNavbar updateSidebar={() => { }} navType="dark" />
                        </div>
                    </div>
                    <QuestionnaireSteps steps={completeAccountSteps} setStep={setStep} step_no={step + 1} />
                    {!hideFormHeader && <FormHeader primary={componentsArr[step].primary} secondary={componentsArr[step].secondary} />}
                    <FormTemplate>
                        {componentsArr[step].component}
                    </FormTemplate>
                </div>
            </div></motion.main>);
}

export default Questionnaire;