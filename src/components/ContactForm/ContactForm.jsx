// dependencies
import React from 'react';
// stylesheet
import styles from './ContactForm.module.css';

function ContactForm(props) {
  return (
    <div className={styles.contactFormContainer}>
      <div className={styles.contactBox}>
        <h5>Contact Form</h5>
        <p>
          Please make sure to include all information that is relevant to the
          issue within this message so that we are able to help as efficiently
          as possible.
        </p>
        <form>
          <label htmlFor='help'>
            What can we help with today? <span>*</span>
          </label>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
