import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleFooterClick = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
    }, 100); // Small delay to ensure navigation has occurred
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <Link to="/">Anil-Tyre</Link>
        </div>
        <div className="navbar-contact">
          <span>Email: info@anilcycletyre.com</span>
          <span> | </span>
          <span>Contact: +123 456 7890</span>
        </div>
      </div>
      <div className="navbar-bottom">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><a href="/" onClick={handleFooterClick}>Scroll to Footer</a></li>
          <li><Link to="/contact">Contact</Link></li> {/* Updated path */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
