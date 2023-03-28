import React from 'react';
import FormHeader from '../FormHeader/FormHeader';
import InputComponent from '../InputComponent/InputComponent';
import Spacer from '../Spacer/Spacer';
import "./checkoutforms.scss"
import { Form } from "react-bootstrap";
import ActionButton from '../ActionButton/ActionButton';
import { BtnTypes } from '../../utils/util';
import { useHistory } from 'react-router-dom';
type Props = {
    step: number,
    setStep: React.Dispatch<React.SetStateAction<number>>,
}
const PaymentInformation: React.FC<Props> = ({ step, setStep }) => {

    const history = useHistory();

    return (<div className="form_container">
        <h1 className="formHead">Payment Information</h1>
        <Spacer />
        <Spacer />
        <div className="contentRow">
            <InputComponent type="text"
                placeholder="Name on card"
                label="Name on card"
                bigInput={true} />
        </div>
        <Spacer />
        <div className="contentRow">
            <InputComponent type="text"
                placeholder="0000-0000-0000-0000"
                label="Card Number"
                bigInput={true} />
            <div className="contentSeperator"></div>
            <InputComponent type="text"
                placeholder="CVV"
                label="CVV Number"
                bigInput={true} />
        </div>
        <Spacer />
        <div className="contentRow">
            <InputComponent type="text"
                placeholder="Select month"
                label="Expiry Month"
                bigInput={true} />
            <div className="contentSeperator"></div>
            <InputComponent type="text"
                placeholder="Select year"
                label="Expiry Year"
                bigInput={true} />
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
                <ActionButton action={() => { }} type={BtnTypes.Success} text="Next" />
            </div>
        </div>
    </div>);
}

export default PaymentInformation;