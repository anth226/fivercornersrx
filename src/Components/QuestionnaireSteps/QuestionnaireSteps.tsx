import React, { Dispatch, SetStateAction } from 'react';
import styles from "./questionnairesteps.module.scss";

interface steps {
    step_no: number;
    step_text: string;
    current_step: boolean
}

type Props = {
    step_no: number
    setStep: Dispatch<SetStateAction<number>>
}

const steps: steps[] = [{
    step_no: 1,
    step_text: 'Complete your profile',
    current_step: true
},
{
    step_no: 2,
    step_text: 'Complete Health Questionnaire',
    current_step: false
},
{
    step_no: 3,
    step_text: 'Treatment',
    current_step: false
}
]

const QuestionnaireSteps: React.FC<Props> = ({ step_no, setStep }) => {
    return (<div className={styles.stepsContainer}>
        {
            steps.map(step => {
                console.log('step_no', step_no);
                console.log('step.step_no', step.step_no);
                return <div onClick={() => step.step_no < step_no && setStep(step.step_no - 1)} className={step.step_no === step_no ? styles.step + " " + styles.stepSelected : styles.step}>
                    <div className={styles.stepNoContainer}>
                        <p className={styles.stepNoContainer}>{String(step.step_no)}</p>
                    </div>
                    <p>{step.step_text}</p>
                </div>
            })
        }

    </div>);
}

export default QuestionnaireSteps;