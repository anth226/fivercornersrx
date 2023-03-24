import React from 'react'
import { BtnTypes } from '../../../utils/util';
import ActionButton from '../../ActionButton/ActionButton';
import SelectOptions from '../../SelectOptions/SelectOptions';
import Spacer from '../../Spacer/Spacer';
import TextArea from '../../TextArea/TextArea';
import "./steptwoforms.scss";

const StepFive = () => {
    return (<div>
        <p className="question">What is your blood pressure on an average day (even when taking medication)?</p>
        <p className="primaryText">Disclaimer: It is very important that you list the name of each medication so your physician can make sure there will not be any drug interactions).</p>
        <Spacer />
        <TextArea placeholder="Start typing here" />
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

export default StepFive;