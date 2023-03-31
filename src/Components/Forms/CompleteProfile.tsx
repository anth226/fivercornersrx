import * as React from 'react';
import { BtnTypes, is18YearsOld } from '../../utils/util';
import ActionButton from '../ActionButton/ActionButton';
import DatePickerComponent from '../DatePickerComponent/DatePickerComponent';
import InputComponent from '../InputComponent/InputComponent';

type Props = {
    step_no: number
    setStep_no: React.Dispatch<React.SetStateAction<number>>
}
const CompleteProfile: React.FC<Props> = ({ step_no, setStep_no }) => {
    const [formValidated, setFormValidated] = React.useState<boolean>(false);
    const [firstName, setFirstName] = React.useState<string>("");
    const [lastName, setLastName] = React.useState<string>("");
    const [dob, setDOB] = React.useState<Date | null>(new Date());

    React.useEffect(() => {
        if (firstName.length >= 3 && lastName.length >= 3 && (dob && is18YearsOld(dob))) {
            setFormValidated(true)
        } else {
            setFormValidated(false)
        }
    }, [firstName, lastName, dob])

    console.log('dob', is18YearsOld(dob))

    return (<div>
        <InputComponent value={firstName} setValue={setFirstName} type="text" placeholder="Enter first name" label="Patient First Name" bigInput={true} />
        <br />
        <InputComponent value={lastName} setValue={setLastName} type="text" placeholder="Enter last name" label="Patient Last Name" bigInput={true} />
        <br />
        {/* <InputComponent type="text" placeholder="DD/MM/YYYY" label="Date of Birth" bigInput={true} /> */}
        <DatePickerComponent bigInput={true} label="Date of Birth" setDate={setDOB} date={dob} />
        <br />
        <br />
        <ActionButton disabled={!formValidated} action={() => step_no < 3 && setStep_no(step_no + 1)} type={BtnTypes.Success} text="Next" />
    </div>);
}

export default CompleteProfile;