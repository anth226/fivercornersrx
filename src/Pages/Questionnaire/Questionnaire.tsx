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


const Questionnaire: React.FC = () => {

    const [step, setStep] = React.useState(0)

    const componentsArr = [
        {
            primary: "Complete your profile",
            secondary: "The information helps your doctor determine if you're eligible for treatment.",
            component: <CompleteProfile step_no={step} setStep_no={setStep} />
        },
        {
            primary: "Complete health Questionnaire",
            secondary: "Answer a personalized health quiz about your symptoms and medical history. The online visit takes 10-15 minutes to complete.",
            component: <StepTwoSteps setOuterStep={setStep} />,
        },
        {
            primary: "Recommended Pill for ED Treatment",
            secondary: "A starting dosage of 60mg is the most common for men who are new to ED medication. Based on the information you provided, a physician will determine if this dosage is right for you, or recommend a more appropriate dosage.",
            component: <InfoStep title="Sildenafil Citrate" description='Generic Viagra' step_no={step} setStep_no={setStep} image={SildenafilImage} />
        }
    ]

    return (<div className={styles.pageContainer}>
        <div className={styles.contentContainer}>
            <QuestionnaireSteps setStep={setStep} step_no={step + 1} />
            <FormHeader primary={componentsArr[step].primary} secondary={componentsArr[step].secondary} />
            <FormTemplate>
                {componentsArr[step].component}
            </FormTemplate>
        </div>
    </div>);
}

export default Questionnaire;