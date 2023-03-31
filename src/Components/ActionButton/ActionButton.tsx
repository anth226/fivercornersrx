import React, { ReactElement } from 'react';
import styles from "./actionbutton.module.scss"

type Props = {
    type: string;
    text: string;
    img?: string;
    action?: () => void
    disabled?: boolean
}

const ActionButton: React.FC<Props> = ({ type, text, img, action, disabled }) => {
    return (<button disabled={disabled} onClick={action} className={styles[type]}>{img && <img src={img} />}{text}</button>);
}

export default ActionButton;