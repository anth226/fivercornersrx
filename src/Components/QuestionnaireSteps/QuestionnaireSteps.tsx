import React from 'react';
import styles from "./questionnairesteps.module.scss";

interface steps {
    step_no: Number;
    step_text: string;
    current_step: boolean
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

const QuestionnaireSteps: React.FC = () => {
    return (<div className={styles.stepsContainer}>
        {
            steps.map(step => {
                console.log(step);
                return <div className={step.current_step ? styles.step + " " + styles.stepSelected : styles.step}>
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