import * as React from 'react';
import { BtnTypes } from '../../../utils/util';
import ActionButton from '../../ActionButton/ActionButton';
import DoctorVector from "../../../assets/images/doctorvector.svg"

const StepOne = () => {
    return (<div >
        <center><img src={DoctorVector} alt="" /></center>
        <ActionButton type={BtnTypes.Success} text="Next" />
    </div>);
}

export default StepOne;