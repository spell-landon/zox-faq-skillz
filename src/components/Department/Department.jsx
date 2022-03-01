import React, { useState } from 'react';
import styles from './Department.module.css';
import { questions } from '../../questions';
// icons
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

function Department(props) {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.departmentContainer}>
      {questions.map((question) => (
        <div>
          <h2>{question.department}</h2>
          {question.faq.map((questionAnswer) => (
            <div className={styles.individualQuestion}>
              <div
                className={styles.question}
                onClick={() => {
                  setActive(!active);
                }}>
                {active ? (
                  <AiOutlineMinus className={styles.icon} />
                ) : (
                  <AiOutlinePlus className={styles.icon} />
                )}

                <p>{questionAnswer.question}</p>
              </div>
              {active ? (
                <p className={styles.answer}>{questionAnswer.answer}</p>
              ) : (
                ''
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Department;
