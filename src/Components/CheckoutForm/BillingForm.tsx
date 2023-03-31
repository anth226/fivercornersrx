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
    const [firstName, setFirstName] = React.useState<string>("");
    const [lastName, setLastName] = React.useState<string>("");
    const [address, setAddress] = React.useState<string>("");
    const [state, setState] = React.useState<string>("");
    const [city, setCity] = React.useState<string>("");
    const [zip, setZip] = React.useState<string>("");
    const [formValidated, setFormValidated] = React.useState<boolean>(false);

    const shippingValidation = () => {
        if (firstName.length > 3 && lastName.length > 3 && address.length > 5 && state.length > 3 && city.length > 3 && zip.length > 3) {
            setFormValidated(true)
        } else {
            setFormValidated(false)
        }
    }

    React.useEffect(() => { shippingValidation() }, [firstName, lastName, address, state, city, zip])

    return (<div className="form_container">
        <h1 className="formHead">Billing Information</h1>
        <Spacer />
        <Spacer />
        <div className="contentRow">
            <InputComponent value={firstName}
                setValue={setFirstName} type="text"
                placeholder="Enter first name"
                label="First Name"
                bigInput={true} />
            <div className="contentSeperator"></div>
            <InputComponent value={lastName}
                setValue={setLastName} type="text"
                placeholder="Enter first name"
                label="First Name"
                bigInput={true} />
        </div>
        <Spacer />
        <div className="contentRow">
            <InputComponent value={address}
                setValue={setAddress} type="text"
                placeholder="Address"
                label="Address"
                bigInput={true} />
        </div>
        <Spacer />
        <div className="contentRow">
            <InputComponent value={state}
                setValue={setState} type="text"
                placeholder="State"
                label="Select state"
                bigInput={true} />
            <div className="contentSeperator"></div>
            <InputComponent value={city}
                setValue={setCity} type="text"
                placeholder="Select city"
                label="City"
                bigInput={true} />
        </div>
        <Spacer />
        <div className="contentRow">
            <InputComponent value={zip}
                setValue={setZip} type="text"
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
                <ActionButton disabled={!formValidated} action={() => step < 2 && setStep(step + 1)} type={BtnTypes.Success} text="Next" />
            </div>
        </div>
    </div>);
}

export default BillingForm;