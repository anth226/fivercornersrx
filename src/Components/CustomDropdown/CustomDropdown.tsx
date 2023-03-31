import * as React from 'react';
import styles from "./customdropdown.module.scss";

type Props = {
    label: string;
    bigInput?: boolean;
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
    options: string[],
    placeholder?: string
}

const CustomDropdown: React.FC<Props> = ({ bigInput = false, label, value, setValue, options, placeholder }) => {
    return (
        <div className={styles.inputContainer}>
            <p className={styles.primaryText}>{label}</p>
            <select placeholder={placeholder} className={bigInput ? styles.bigInput : ""}>
                {
                    options.map(item => <option onClick={() => setValue && setValue(item)} value={item}>{item}</option>)
                }
                {/* <option value="February">February</option> */}
                {/* <option value="March">March</option> */}
            </select>
        </div>
    );
}



export default CustomDropdown;