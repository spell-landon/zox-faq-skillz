import React, { useState, useEffect, useRef } from 'react';
import './Question.css';
// icons
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

function Question({ faq, index, onToggle, active }) {
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState('0');
  const contentRef = useRef(null);
  const toggleOpen = () => {
    setOpen(!open);
  };
  const activeClicked = (index) => {
    if (clicked === index) {
      return setClicked('0');
    }
    setClicked(index);
  };

  useEffect(() => {
    contentRef.current.style.maxHeight = open
      ? `${contentRef.current.scrollHeight}px`
      : '0px';
  }, [contentRef, open]);

  return (
    <div className='questionContainer'>
      <h2>{faq.department}</h2>

      {/* Each Individual Question */}
      {faq.faq.map((individual, index) => (
        <div className='individualQuestions' key={index}>
          <div
            className='question'
            onClick={() => {
              toggleOpen();
              activeClicked(index);
            }}
            active={clicked === index}>
            {/* Plus/Minus Icons */}
            {open ? (
              <AiOutlineMinus className='icon' />
            ) : (
              <AiOutlinePlus className='icon' />
            )}

            {/* Actual Question */}
            <p>{individual.question}</p>
          </div>

          <div ref={contentRef} className='answer'>
            {open && <p>{individual.answer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Question;
