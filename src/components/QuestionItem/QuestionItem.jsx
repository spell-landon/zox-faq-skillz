import React, { useState } from 'react';
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

  return (
    <div>
      <div className='individualQuestions'>
        <div className='question' onClick={toggleOpen}>
          {/* Plus/Minus Icons */}
          {open ? (
            <AiOutlineMinus className='icon' />
          ) : (
            <AiOutlinePlus className='icon' />
          )}

          {/* Actual Question */}
          <p>{question.question}</p>
        </div>

        <div className='answer'>{open ? <>{JSON.stringify(question.answer).replaceAll('"', '')}</> : ''}</div>
      </div>
    </div>
  );
}

export default QuestionItem;
