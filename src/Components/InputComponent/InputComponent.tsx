import * as React from 'react';
import styles from "./inputcomponent.module.scss";

type Props = {
    type: string;
    placeholder: string;
    label: string;
    bigInput?: boolean;
}

const InputComponent: React.FC<Props> = ({ bigInput = false, type, placeholder, label }) => {
    return (<div className={styles.inputContainer}>
        <p className={styles.primaryText}>{label}</p>
        <input className={bigInput ? styles.bigInput : ""} type={type} placeholder={placeholder} />
    </div>);
}

export default InputComponent;