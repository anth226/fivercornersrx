import * as React from 'react';
import { BtnTypes } from '../../utils/util';
import ActionButton from '../ActionButton/ActionButton';
import InputComponent from '../InputComponent/InputComponent';
type Props = {
    step_no: number
    setStep_no: React.Dispatch<React.SetStateAction<number>>
}
const CompleteProfile: React.FC<Props> = ({ step_no, setStep_no }) => {
    return (<div>
        <InputComponent type="text" placeholder="Enter first name" label="Patient First Name" bigInput={true} />
        <br />
        <InputComponent type="text" placeholder="Enter last name" label="Patient Last Name" bigInput={true} />
        <br />
        <InputComponent type="text" placeholder="DD/MM/YYYY" label="Date of Birth" bigInput={true} />
        <br />
        <br />
        <ActionButton action={() => step_no < 3 && setStep_no(step_no + 1)} type={BtnTypes.Success} text="Next" />
    </div>);
}

export default CompleteProfile;