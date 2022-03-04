// dependencies
import React from 'react';
// components
import FAQ from './components/FAQ/FAQ';
import HeroImage from './components/HeroImage/HeroImage';
import ContactForm from './components/ContactForm/ContactForm';
import Banner from './components/Banner/Banner';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Banner />
      <Navigation />
      <HeroImage />
      <ContactForm />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
