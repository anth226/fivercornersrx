import React from 'react';
import FormHeader from '../FormHeader/FormHeader';
import InputComponent from '../InputComponent/InputComponent';
import Spacer from '../Spacer/Spacer';
import "./checkoutforms.scss"
import { Form } from "react-bootstrap";
import ActionButton from '../ActionButton/ActionButton';
import { BtnTypes } from '../../utils/util';

const ShippingForm = () => {
    return (<div className="form_container">
        <h1 className="formHead">Shipping Information</h1>
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
                placeholder="DD/MM/YYYY"
                label="Date of Birth"
                bigInput={true} />
            <div className="contentSeperator"></div>
            <InputComponent type="number"
                placeholder="Phone"
                label="Phone"
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
        <div className="contentRow">
            <InputComponent type="text"
                placeholder="Zip code"
                label="ZIP"
                bigInput={true} />
            <div className="emptySide"></div>
            <div className="contentSeperator"></div>
        </div>
        <div className="contentRow">
            <Form.Check className="radioBtn"
                label={"Billing same as shipping"}
                type="radio"
                name="question"
                checked={true}
            />
            <div className="btnContainer">
                <ActionButton type={BtnTypes.Success} text="Next" />
            </div>


        </div>
    </div>);
}

export default ShippingForm;