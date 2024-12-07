import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu open/close state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu on link click (useful for mobile view)
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>Anil-Tyre</Link>
      </div>

      {/* Contact Details Section */}
      <div className="navbar-contact">
        <span>Email: info@anilcycletyre.com</span> | 
        <span> Contact: 9823678248</span>
      </div>

      {/* Hamburger Toggle Button */}
      <button
        className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <div className="navbar-toggle-bar"></div>
        <div className="navbar-toggle-bar"></div>
        <div className="navbar-toggle-bar"></div>
      </button>

      {/* Navigation Links */}
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        <li>
          <Link
            to="/booking"
            className="booking-button"
            onClick={closeMenu}
          >
            Book Appointment
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
