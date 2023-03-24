import React from 'react'
import { BtnTypes } from '../../../utils/util';
import ActionButton from '../../ActionButton/ActionButton';
import SelectOptions from '../../SelectOptions/SelectOptions';
import Spacer from '../../Spacer/Spacer';
import "./steptwoforms.scss";

const StepThree = () => {
    return (<div>
        <p className="question">Have you had your vitals tested by a medical practitioner in the past 3 years? This includes weight, blood pressure, and heart rate.</p>
        <SelectOptions options={["Yes", "No"]} />
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

export default StepThree;