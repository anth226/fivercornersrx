import React from 'react'
import styles from "./questionnaire.module.scss"
import FormHeader from '../../Components/FormHeader/FormHeader';
import CompleteProfile from '../../Components/Forms/CompleteProfile';
import FormTemplate from '../../Components/FormTemplate/FormTemplate';
import QuestionnaireSteps from '../../Components/QuestionnaireSteps/QuestionnaireSteps';
import StepOne from '../../Components/Forms/StepTwoForms/StepOne';

const Questionnaire: React.FC = () => {
    return (<div className={styles.pageContainer}>
        <QuestionnaireSteps />
        <FormHeader primary="Complete your profile" secondary="The information helps your doctor determine if you're eligible for treatment." />
        <FormTemplate>
            <StepOne />
        </FormTemplate>
    </div>);
}

export default Questionnaire;