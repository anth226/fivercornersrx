import React, { ReactElement } from 'react';
import styles from "./actionbutton.module.scss"

type Props = {
    type: string;
    text: string;
    img?: string;
    action?: () => void
}

const ActionButton: React.FC<Props> = ({ type, text, img, action }) => {
    return (<button onClick={action} className={styles[type]}>{img && <img src={img} />}{text}</button>);
}

export default ActionButton;