import React from 'react'
import styles from "./questionnaire.module.scss"
import FormHeader from '../../Components/FormHeader/FormHeader';
import CompleteProfile from '../../Components/Forms/CompleteProfile';
import FormTemplate from '../../Components/FormTemplate/FormTemplate';
import QuestionnaireSteps from '../../Components/QuestionnaireSteps/QuestionnaireSteps';
import StepOne from '../../Components/Forms/StepTwoForms/StepOne';
import StepsCounter from '../../Components/Forms/StepTwoForms/StepsCounter';
import StepTwo from '../../Components/Forms/StepTwoForms/StepTwo';
import StepThree from '../../Components/Forms/StepTwoForms/StepThree';
import StepFour from '../../Components/Forms/StepTwoForms/StepFour';
import StepFive from '../../Components/Forms/StepTwoForms/StepFive';
import { questions } from '../../constants/questions';
import ActionButton from '../../Components/ActionButton/ActionButton';
import { BtnTypes } from '../../utils/util';

const Questionnaire: React.FC = () => {

    const [step, setSteps] = React.useState(0);
    console.log("step", step)
    return (<div className={styles.pageContainer}>
        <QuestionnaireSteps />
        <FormHeader primary="Complete your profile" secondary="The information helps your doctor determine if you're eligible for treatment." />
        <FormTemplate>
            <StepsCounter />
            <StepTwo content={questions[step]} />
            <div className='rowContent'>
                <ActionButton action={() => step > 0 && setSteps(step - 1)} type={BtnTypes.Back} text="Privious Question" />
                <ActionButton action={() => step < 17 && setSteps(step + 1)} type={BtnTypes.Success} text="Next Question" />
            </div>
        </FormTemplate>
    </div>);
}

export default Questionnaire;