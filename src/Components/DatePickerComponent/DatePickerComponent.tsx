import * as React from 'react';
import ReactDatePicker from 'react-datepicker';
import styles from "./datepicker.module.scss";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
    setDate: React.Dispatch<React.SetStateAction<Date | null>>;
    date: Date | null;
    label: string;
    bigInput?: boolean;
}

const DatePickerComponent: React.FC<Props> = ({ bigInput = false, label, setDate, date }) => {
    return (<div className={styles.inputContainer}>
        <p className={styles.primaryText}>{label}</p>
        <ReactDatePicker selected={date} onChange={(date) => setDate(date)} />
    </div>);
}

export default DatePickerComponent;