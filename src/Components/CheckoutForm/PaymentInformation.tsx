import React from 'react';
import FormHeader from '../FormHeader/FormHeader';
import InputComponent from '../InputComponent/InputComponent';
import Spacer from '../Spacer/Spacer';
import "./checkoutforms.scss"
import { Form } from "react-bootstrap";
import ActionButton from '../ActionButton/ActionButton';
import { BtnTypes } from '../../utils/util';
import { useHistory } from 'react-router-dom';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import { CONSTANTS } from '../../constants/shared';
import { useMediaQuery } from 'react-responsive';
type Props = {
    step: number,
    setStep: React.Dispatch<React.SetStateAction<number>>,
}
const PaymentInformation: React.FC<Props> = ({ step, setStep }) => {
    const history = useHistory();

    const [cardName, setCardName] = React.useState<string>("");
    const [cardNumber, setCardNumber] = React.useState<string>("");
    const [cvv, setCvv] = React.useState<string>("");
    const [month, setMonth] = React.useState<string>("");
    const [year, setYear] = React.useState<string>("");


    const [formValidated, setFormValidated] = React.useState<boolean>(false);

    const paymentValidation = () => {
        if (cardName.length > 3 && cardNumber.length === 16 && cvv.length == 3) {
            setFormValidated(true)
        } else {
            setFormValidated(false)
        }
    }

    React.useEffect(() => { paymentValidation() }, [cardName, cardNumber, cvv, month, year])

    const isSmallScreen = useMediaQuery({
        query: '(max-width: 575px)'
    })

    function handleInputChange(value: string) {
        const alphanumericRegex = /^[a-zA-Z0-9]+$/;
        if (alphanumericRegex.test(value)) {
            setCardNumber(value)
        }
    }
    React.useEffect(() => {
        // handleInputChange(cardNumber.replace(/^[0-9]+$/, ''))
        console.log('cardNumber', cardNumber.replace(/^[0-9]+$/, ''))
    }, [cardNumber])

    return (<div className="form_container">
        <h1 className="formHead">Payment Information</h1>
        <Spacer />
        <Spacer />

        <div className="contentRow">
            <InputComponent type="text"
                value={cardName}
                setValue={setCardName}
                placeholder="Name on card"
                label="Name on card"
                bigInput={true} />
        </div>
        <div className="contentRow">
            {cardName && cardName.length < 3 ? <p className='errorMessage'>Please Enter Card Name</p> : <div className="emptySide"></div>}
            <div className="contentSeperator"></div>
        </div>
        <Spacer />
        <div className="contentRow">
            <InputComponent type="text"
                value={cardNumber.replace(/\D/g, '')}
                setValue={setCardNumber}
                placeholder="0000-0000-0000-0000"
                label="Card Number"
                bigInput={true} />
            {isSmallScreen && cardNumber && cardNumber.length !== 16 && <p className='errorMessage'>Card Number must be of 16 digits</p>}
            <div className="contentSeperator"></div>
            <InputComponent value={cvv.replace(/\D/g, '')}
                setValue={setCvv} type="text"
                placeholder="CVV"
                label="CVV Number"
                bigInput={true} />
            {isSmallScreen && cvv && cvv.length !== 3 && <p className='errorMessage'>CVV must be of 3 digits</p>}
        </div>
        {!isSmallScreen && <div className="contentRow">
            {cardNumber && cardNumber.length !== 16 ? <p className='errorMessage'>Card Number must be of 16 digits</p> : <div className="emptySide"></div>}
            <div className="contentSeperator"></div>
            {cvv && cvv.length !== 3 && <p className='errorMessage'>CVV must be of 3 digits</p>}
        </div>}
        <Spacer />
        <div className="contentRow">
            <CustomDropdown value={month} setValue={setMonth} options={CONSTANTS.MONTH_NAMES} bigInput={true} label="Expiry Month" placeholder="Select month" />
            <div className="contentSeperator"></div>
            <CustomDropdown value={year} setValue={setYear} options={CONSTANTS.EXPIRY_YEARS} bigInput={true} label="Expiry Year" placeholder="Select year" />
        </div>
        {/* <CustomDropdown bigInput={true} label="OPTIONS" /> */}
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
                <ActionButton disabled={!formValidated} action={() => { }} type={BtnTypes.Success} text="Next" />
            </div>
        </div>
    </div>);
}

export default PaymentInformation;