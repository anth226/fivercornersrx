import * as React from 'react';
import { BtnTypes } from '../../utils/util';
import ActionButton from '../ActionButton/ActionButton';
import InputComponent from '../InputComponent/InputComponent';

const CompleteProfile = () => {
    return (<div>
        <InputComponent type="text" placeholder="Enter first name" label="Patient First Name" bigInput={true} />
        <br />
        <InputComponent type="text" placeholder="Enter last name" label="Patient Last Name" bigInput={true} />
        <br />
        <InputComponent type="text" placeholder="DD/MM/YYYY" label="Date of Birth" bigInput={true} />
        <br />
        <br />
        <ActionButton type={BtnTypes.Success} text="Next" />
    </div>);
}

export default CompleteProfile;