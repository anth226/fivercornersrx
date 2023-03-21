import * as React from 'react';
import styles from "./inputcomponent.module.scss";

const InputComponent = () => {
    return (<div className={styles.inputContainer}>
        <p className={styles.primaryText}>First name</p>
        <input type="text" />
    </div>);
}

export default InputComponent;