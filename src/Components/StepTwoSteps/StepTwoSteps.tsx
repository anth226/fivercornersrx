import * as React from 'react';
import { questions } from '../../constants/questions';
import { BtnTypes } from '../../utils/util';
import ActionButton from '../ActionButton/ActionButton';
import InfoStep from '../Forms/StepTwoForms/InfoStep';
import StepsCounter from '../Forms/StepTwoForms/StepsCounter';
import StepTwo from '../Forms/StepTwoForms/StepTwo';
import DoctorVector from "../../assets/images/doctorvector.svg";

type Props = {
    setOuterStep: React.Dispatch<React.SetStateAction<number>>
    setHideFormHeader: React.Dispatch<React.SetStateAction<boolean>>
}

const StepTwoSteps: React.FC<Props> = ({ setOuterStep, setHideFormHeader }) => {
    const [step, setSteps] = React.useState(0);
    return (<React.Fragment>
        {
            step < 1 ? <InfoStep setHideFormHeader={setHideFormHeader} title=''
                description=""
                image={DoctorVector}
                step_no={step}
                setStep_no={setSteps} /> : <><StepsCounter step={String(step)} />
                <StepTwo setHideFormHeader={setHideFormHeader} content={questions[step]} />
                <div className='rowContent'>
                    <ActionButton action={() => step > 0 && setSteps(step - 1)} type={BtnTypes.Back} text="Privious Question" />
                    <ActionButton action={() => step < questions.length - 1 ? setSteps(step + 1) : setOuterStep(currStep => currStep + 1)} type={BtnTypes.Success} text="Next Question" />
                </div></>
        }
    </React.Fragment>);
}

export default StepTwoSteps;