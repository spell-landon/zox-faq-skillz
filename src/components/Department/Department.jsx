import React, { useState } from 'react';
import styles from './Department.module.css';
import { questions } from '../../questions';
import Question from '../Question/Question';

function Department(props) {
  const [clicked, setClicked] = useState('0');
  const handleToggle = (index) => {
      if (clicked === index) {
          return setClicked('0')
      }
      setClicked(index)
  }
  return (
    <div className={styles.departmentContainer}>
      {/* Map through the .js list */}
      <ul>
        {questions.map((faq, index) => (
          <Question faq={faq} key={index} onToggle={() => handleToggle(index)} active={clicked === index}/>
        ))}
      </ul>
    </div>
  );
}

export default Department;
