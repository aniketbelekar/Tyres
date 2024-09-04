import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleFooterClick = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
    }, 100); // Small delay to ensure navigation has occurred
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <Link to="/" onClick={closeNavbar}>Anil-Tyre</Link>
        </div>
        <div className="navbar-contact">
          <span>Email: info@anilcycletyre.com</span>
          <span> | </span>
          <span>Contact: +123 456 7890</span>
        </div>
        <button className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <div className="navbar-toggle-bar"></div>
          <div className="navbar-toggle-bar"></div>
          <div className="navbar-toggle-bar"></div>
        </button>
      </div>
      <div className={`navbar-bottom ${isOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          <li><Link to="/" onClick={closeNavbar}>Home</Link></li>
          <li><Link to="/products" onClick={closeNavbar}>Products</Link></li>
          <li><Link to="/about" onClick={closeNavbar}>About Us</Link></li>
          <li><a href="/" onClick={(e) => { e.preventDefault(); handleFooterClick(); closeNavbar(); }}>Scroll to Footer</a></li>
          <li><Link to="/contact" onClick={closeNavbar}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
