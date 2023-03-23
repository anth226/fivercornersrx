import * as React from 'react';
import styles from "./formheader.module.scss"

type Props = {
    primary: string;
    secondary: string;
}

const FormHeader: React.FC<Props> = ({ primary, secondary }) => {
    return (<React.Fragment>
        <p className={styles.pageHead}>{primary}</p>
        <p className={styles.primaryText + " " + styles.secondaryPageText}>{secondary}</p>
    </React.Fragment>);
}

export default FormHeader;