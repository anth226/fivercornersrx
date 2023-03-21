import * as React from 'react';
import styles from "./inputcomponent.module.scss";

type Props = {
    type: string;
    placeholder: string;
    label: string;
}

const InputComponent: React.FC<Props> = ({ type, placeholder, label }) => {
    return (<div className={styles.inputContainer}>
        <p className={styles.primaryText}>{label}</p>
        <input type={type} placeholder={placeholder} />
    </div>);
}

export default InputComponent;