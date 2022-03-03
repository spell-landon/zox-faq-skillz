// dependencies
import React, { useState } from 'react';
// stylesheet
import styles from './ContactForm.module.css';

function ContactForm(props) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className={styles.contactFormContainer}>
      <div className={styles.contactBox}>
        <h5>Contact Form</h5>
        <p>
          Please make sure to include all information that is relevant to the
          issue within this message so that we are able to help as efficiently
          as possible.
        </p>
        <form onSubmit={submitForm}>
          {/* Help Dropdown Selection */}
          <label htmlFor='help'>
            What can we help with today? <span>*</span>
          </label>
          <select name='help' id='help' required>
            <option value=''>Please select an option</option>
            <option value='editOrder'>Edit Order</option>
            <option value='cancelOrder'>Cancel Order</option>
            <option value='missingOrder'>Missing Order</option>
            <option value='incorrectOrder'>Incorrect Order</option>
            <option value='updateAddressIssue'>Update Address Issue</option>
            <option value='discountCodeIssue'>Discount Code Issue</option>
            <option value='subscriptionIssue'>Subscription Issue</option>
            <option value='otherIssue'>Other Issue</option>
          </select>
          <div className={styles.smallerGroup}>
            <div>
              {/* First Name */}
              <label htmlFor='firstName'>
                First Name <span>*</span>
              </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                autoComplete='off'
                required
              />
            </div>
            <div>
              {/* Last Name */}
              <label htmlFor='lastName'>
                Last Name <span>*</span>
              </label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                autoComplete='off'
                required
              />
            </div>
            <div>
              {/* Order Number */}
              <label htmlFor='orderNumber'>
                Order Number <span>*</span>
              </label>
              <input
                type='text'
                id='orderNumber'
                name='orderNumber'
                autoComplete='off'
                required
              />
            </div>
            <div>
              {/* Email */}
              <label htmlFor='email'>
                Email <span>*</span>
              </label>
              <input
                type='text'
                id='email'
                name='email'
                autoComplete='off'
                required
              />
            </div>
          </div>
          {/* Message */}
          <label htmlFor='message'>
            Message <span>*</span>
          </label>
          <textarea
            type='text'
            id='message'
            name='message'
            required
            placeholder='*max 500 words'
            cols='10'
            rows='3'
          />
          {/* File Upload */}
          <label htmlFor='fileUpload'>File Upload (if needed)</label>
          <input
            type='file'
            id='fileUpload'
            name='fileUpload'
            accept='image/*'
          />
          <button type='submit'>Submit</button>
          {formSubmitted ? <p>Your inquiry has been sent!</p> : null}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
