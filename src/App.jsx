import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import Brands from './Components/Brand';
import ExperienceAndClients from './Components/Experience';
import Testimonials from './Components/Testimonials';
import ContactUs from './Components/Contactsus';
import Footer from './Components/Footer';
import Product from './Components/Products'; // Import the Product component
import AboutUs from './Components/Aboutus'; // Import the AboutUs component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/contact" element={<ContactUs />} /> 
      </Routes>
      <Services />
      <Brands />
      <ExperienceAndClients />
      <Testimonials />
      <Footer />
    </Router>
  );
}

export default App;
