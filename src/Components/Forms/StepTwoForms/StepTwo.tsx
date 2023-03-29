import * as React from 'react';
import { questionType, QuestionTypes } from '../../../constants/questions';
import { BtnTypes } from '../../../utils/util';
import ActionButton from '../../ActionButton/ActionButton';
import SelectOptions from '../../SelectOptions/SelectOptions';
import Spacer from '../../Spacer/Spacer';
import TextArea from '../../TextArea/TextArea';
import "./steptwoforms.scss";

type Props = {
    content: questionType;
    setHideFormHeader: React.Dispatch<React.SetStateAction<boolean>>
}

const DisplayQuestions = (content: questionType) => {
    switch (content.type) {
        case "CHECKS":
            return content.options.length > 0 && <SelectOptions options={content.options} />
        case "TEXTBOX":
            return <TextArea placeholder="Start typing here" />
        case "CHECKSANDTEXTBOX":
            return <React.Fragment>{
                content.options.length > 0 && <SelectOptions options={content.options} />
            }
                <TextArea placeholder="Start typing here" />
            </React.Fragment>
        default:
            break;
    }
}

const StepTwo: React.FC<Props> = ({ content, setHideFormHeader }) => {
    console.log('content', content)

    React.useEffect(() => {
        setHideFormHeader(true)
    }, [])

    return (content && <div>
        <p className="question">{content.question}</p>
        <p className="primaryText">{content.description}</p>
        {
            DisplayQuestions(content)
        }
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />

    </div>);
}

export default StepTwo;