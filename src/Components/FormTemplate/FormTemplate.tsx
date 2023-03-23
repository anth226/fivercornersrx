import React from 'react'
import { ReactNode } from 'react';
import styles from "./formtemplate.module.scss"
import ActionButton from '../ActionButton/ActionButton';


type Props = {
    children: ReactNode;
};


const FormTemplate: React.FC<Props> = ({ children }) => {

    return (<div className={styles.formContainer}>
        {children}
    </div>);
}

export default FormTemplate;