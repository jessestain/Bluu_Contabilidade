import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <HowItWorks />
      <Plans />
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
