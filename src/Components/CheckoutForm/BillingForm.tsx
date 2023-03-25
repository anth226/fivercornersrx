import React from 'react';
import FormHeader from '../FormHeader/FormHeader';
import InputComponent from '../InputComponent/InputComponent';
import Spacer from '../Spacer/Spacer';
import "./checkoutforms.scss"
import { Form } from "react-bootstrap";
import ActionButton from '../ActionButton/ActionButton';
import { BtnTypes } from '../../utils/util';

type Props = {
    step: number,
    setStep: React.Dispatch<React.SetStateAction<number>>
}

const BillingForm: React.FC<Props> = ({ step, setStep }) => {
    return (<div className="form_container">
        <h1 className="formHead">Billing Information</h1>
        <Spacer />
        <Spacer />
        <div className="contentRow">
            <InputComponent type="text"
                placeholder="Enter first name"
                label="First Name"
                bigInput={true} />
            <div className="contentSeperator"></div>
            <InputComponent type="text"
                placeholder="Enter first name"
                label="First Name"
                bigInput={true} />
        </div>
        <Spacer />
        <div className="contentRow">
            <InputComponent type="text"
                placeholder="Address"
                label="Address"
                bigInput={true} />
        </div>
        <Spacer />
        <div className="contentRow">
            <InputComponent type="text"
                placeholder="State"
                label="Select state"
                bigInput={true} />
            <div className="contentSeperator"></div>
            <InputComponent type="text"
                placeholder="Select city"
                label="City"
                bigInput={true} />
        </div>
        <Spacer />
        <div className="contentRow">
            <InputComponent type="text"
                placeholder="Zip code"
                label="ZIP"
                bigInput={true} />
            <div className="emptySide"></div>
            <div className="contentSeperator"></div>
        </div>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <div className="contentRow">
            <div className="emptySide"></div>
            <div className="btnContainer">
                <ActionButton action={() => setStep(step + 1)} type={BtnTypes.Success} text="Next" />
            </div>
        </div>
    </div>);
}

export default BillingForm;