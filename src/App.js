import './App.css';
// components
import Title from './components/Title/Title';
import Department from './components/Department/Department';
import QuestionItem from './components/QuestionItem/QuestionItem';
// data (questions)
import { ordering } from './data/ordering';
import { shipping } from './data/shipping';
import { account } from './data/account';
import { loyaltyProgram } from './data/loyaltyProgram';
import { zoxpass } from './data/zoxpass';
import { productInformation } from './data/productInformation';

function App() {
  return (
    <div className='faq-container'>
      <Title />
      {/* <Department /> */}
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
    </div>
  );
}

export default App;
