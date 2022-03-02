import React, { useState, useRef } from 'react';
import styles from './QuestionItem.module.css';
// icons
// icons
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

function QuestionItem({ question }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  const contentEl = useRef();
  const activeClass = `${styles.question} ${open ? styles.active : null}`;

  return (
    <div className={styles.questionContainer}>
      <div className={activeClass} onClick={toggleOpen}>
        {/* Plus/Minus Icons */}
        {open ? (
          <AiOutlineMinus className={styles.icon} />
        ) : (
          <AiOutlinePlus className={styles.icon} />
        )}

        {/* Actual Question */}
        <p>{question.question}</p>
      </div>
      {/* Answer */}
      <div
        ref={contentEl}
        className={styles.answer}
        style={
          open
            ? {
                height: contentEl.current.scrollHeight,
                transform: 'translateY(0)',
              }
            : { height: '0px', transform: 'translateY(-20px)' }
        }>
        <div className={styles.answerOpen}>{question.answer}</div>
      </div>
    </div>
  );
}

export default QuestionItem;
