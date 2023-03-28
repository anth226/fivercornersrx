import React, { useState } from "react";
import styles from './accordiansmall.module.scss';

type Props = {
  title: string;
  content: string;
}

const AccordionSmall: React.FC<Props> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.accordion_section_small}>
      <div className={styles.accordion_header_small} onClick={handleClick}>
        <h4>{title}</h4>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <div className={styles.accordion_content}>{content}</div>}
    </div>
  );
}

export default AccordionSmall;
