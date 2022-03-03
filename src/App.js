// dependencies
import React from 'react';
// components
import FAQ from './components/FAQ/FAQ';
import HeroImage from './components/HeroImage/HeroImage';
import ContactForm from './components/ContactForm/ContactForm';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <>
      <Banner />
      <HeroImage />
      <ContactForm />
      <FAQ />
    </>
  );
}

export default App;
