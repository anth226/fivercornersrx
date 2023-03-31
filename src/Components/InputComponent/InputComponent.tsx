import * as React from 'react';
import styles from "./inputcomponent.module.scss";

type Props = {
    type: string;
    placeholder: string;
    label: string;
    bigInput?: boolean;
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
}

const InputComponent: React.FC<Props> = ({ bigInput = false, type, placeholder, label, value, setValue }) => {
    return (<div className={styles.inputContainer}>
        <p className={styles.primaryText}>{label}</p>
        <input value={value} onChange={(e) => setValue && setValue(e.target.value)} className={bigInput ? styles.bigInput : ""} type={type} placeholder={placeholder} />
    </div>);
}

export default InputComponent;