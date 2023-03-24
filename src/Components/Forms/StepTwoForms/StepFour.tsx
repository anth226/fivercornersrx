import React from 'react'
import { BtnTypes } from '../../../utils/util';
import ActionButton from '../../ActionButton/ActionButton';
import SelectOptions from '../../SelectOptions/SelectOptions';
import Spacer from '../../Spacer/Spacer';
import "./steptwoforms.scss";

const StepFour = () => {
    return (<div>
        <p className="question">What is your blood pressure on an average day (even when taking medication)?</p>
        <SelectOptions options={["Normal ( less than 120 systolic and less than 80 diastolic)", "Elevated ( 120 to 129 systolic and less than 80 diastolic", "High (130-160 systolic and between 80-100 diastolic)", "Uncontrolled (above 160 systolic OR higher than 100 diastolic", "Controlled with medicine"]} />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <div className='rowContent'>
            <ActionButton type={BtnTypes.Back} text="Privious Question" />
            <ActionButton type={BtnTypes.Success} text="Next Question" />
        </div>
    </div>);
}

export default StepFour;