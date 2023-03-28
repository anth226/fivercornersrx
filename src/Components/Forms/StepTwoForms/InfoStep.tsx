import * as React from 'react';
import { BtnTypes } from '../../../utils/util';
import ActionButton from '../../ActionButton/ActionButton';
import DoctorVector from "../../../assets/images/doctorvector.svg"
import Spacer from '../../Spacer/Spacer';
import "./steptwoforms.scss"

type Props = {
    title?: string,
    description?: string,
    step_no: number
    setStep_no: React.Dispatch<React.SetStateAction<number>>
    image?: string,
    clickAction?: () => void
}

const InfoStep: React.FC<Props> = ({ clickAction, step_no, setStep_no, title, description, image }) => {
    return (<div>
        <center>
            {title && <p style={{ margin: '3px 0' }} className='primaryText'>{title}</p>}
            {description && <p style={{ fontSize: "2rem" }} className='headText'>{description}</p>}</center>
        <p></p>
        <Spacer />
        <center><img src={image} alt="" /></center>
        <Spacer />
        <Spacer />
        <ActionButton action={clickAction ? clickAction : () => step_no < 2 && setStep_no(step_no + 1)} type={BtnTypes.Success} text="Next" />
    </div>);
}

export default InfoStep;