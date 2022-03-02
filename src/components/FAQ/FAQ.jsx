import React from 'react';
// stylesheet
import styles from './FAQ.module.css';
// components
import Title from '../Title/Title';
import QuestionItem from '../QuestionItem/QuestionItem';
// data (questions)
import { ordering } from '../../data/ordering';
import { shipping } from '../../data/shipping';
import { account } from '../../data/account';
import { loyaltyProgram } from '../../data/loyaltyProgram';
import { zoxpass } from '../../data/zoxpass';
import { productInformation } from '../../data/productInformation';
import { monthlySubscription } from '../../data/monthlySubscriptions';
import { returnExchange } from '../../data/returnExchange';
import { rewards } from '../../data/rewards';

function FAQ(props) {
  return (
    <div className={styles.faqContainer}>
      <Title />
      <h2>Ordering</h2>
      {ordering.map((question, index) => (
        <QuestionItem question={question} key={index} />
      ))}
      <h2>Shipping</h2>
      {shipping.map((question, index) => (
        <QuestionItem question={question} key={index} />
      ))}
      <h2>Account</h2>
      {account.map((question, index) => (
        <QuestionItem question={question} key={index} />
      ))}
      <h2>Loyalty Program</h2>
      {loyaltyProgram.map((question, index) => (
        <QuestionItem question={question} key={index} />
      ))}
      <h2>ZOXPASS</h2>
      {zoxpass.map((question, index) => (
        <QuestionItem question={question} key={index} />
      ))}
      <h2>Product Information</h2>
      {productInformation.map((question, index) => (
        <QuestionItem question={question} key={index} />
      ))}
      <h2>Monthly Subscriptions</h2>
      {monthlySubscription.map((question, index) => (
        <QuestionItem question={question} key={index} />
      ))}
      <h2>Returns & Exchanges</h2>
      {returnExchange.map((question, index) => (
        <QuestionItem question={question} key={index} />
      ))}
      <h2>Rewards</h2>
      {rewards.map((question, index) => (
        <QuestionItem question={question} key={index} />
      ))}
    </div>
  );
}

export default FAQ;
