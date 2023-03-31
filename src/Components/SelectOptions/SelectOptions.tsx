import React from 'react';
import styles from "./selectoptions.module.scss"
import { Container, Form, InputGroup } from "react-bootstrap";

interface Props {
    options: string[];
}

const SelectOptions: React.FC<Props> = ({ options }) => {
    const [selectedOption, setSelectedOption] = React.useState<string | null>(options[0])
    console.log('options', options[0])

    React.useEffect(() => {
        setSelectedOption(options[0])
    }, [options])

    return (<div className={styles.optionsContainer}>
        {
            options.length > 0 && options.map(item => item && <div onClick={() => setSelectedOption(item)} className={selectedOption === item ? styles.option + " " + styles.selectedOption : styles.option}>
                <Form.Check className={styles.radioBtn}
                    label={item}
                    type="radio"
                    name="question"
                    checked={selectedOption === item}
                />
            </div>)
        }
    </div>);
}

export default SelectOptions;