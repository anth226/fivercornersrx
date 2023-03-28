import React, { useState } from "react";
import styles from './accordian.module.scss';

type Props = {
    title: string;
    content: string;
}

const Accordion: React.FC<Props> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.accordion_section}>
            <div className={styles.accordion_header} onClick={handleClick}>
                <h2>{title}</h2>
                <span>{isOpen ? "-" : "+"}</span>
            </div>
            {isOpen && <div className={styles.accordion_content}>{content}</div>}
        </div>
    );
}

export default Accordion;
