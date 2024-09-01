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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} /> {/* Use the Product component here */}
      </Routes>
      <Services />
      <Brands />
      <ExperienceAndClients />
      <Testimonials />
      <ContactUs />
      <Footer />
    </Router>
  );
}

export default App;
