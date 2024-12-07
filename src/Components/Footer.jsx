import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/Footer.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faWrench, faCogs } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer id="footer" className="footer-section">
      <div className="footer-content">
        <div className="footer-about">
          <h2>About Us</h2>
          <p>Anil Tyres, a trustworthy tradition since 2000, has been a reputed name in the sale of tyres. we are in wani </p>
          <Link to="/about" className="footer-link">Read More</Link>
        </div>
        <div className="footer-services">
          <h2>Services</h2>
          <ul>
            <li>
              <Link to="/services/wheel-alignment" className="footer-link">
                <FontAwesomeIcon icon={faCar} className="icon" /> Wheel Alignment
              </Link>
            </li>
            <li>
              <Link to="/services/wheel-balancing" className="footer-link">
                <FontAwesomeIcon icon={faWrench} className="icon" /> Wheel Balancing
              </Link>
            </li>
            <li>
              <Link to="/services/puncture-repair" className="footer-link">
                <FontAwesomeIcon icon={faCogs} className="icon" /> Puncture Repair
              </Link>
            </li>
            <li>
              <Link to="/services/tyre-rotation" className="footer-link">
                <FontAwesomeIcon icon={faCar} className="icon" /> Tyre Rotation
              </Link>
            </li>
            <li>
              <Link to="/services/tyre-fitting" className="footer-link">
                <FontAwesomeIcon icon={faWrench} className="icon" /> Tyre Fitting
              </Link>
            </li>
            <li>
              <Link to="/services/nitrogen-inflation" className="footer-link">
                <FontAwesomeIcon icon={faCogs} className="icon" /> Nitrogen Inflation
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-products">
          <h2>Products</h2>
          <ul>
            <li>
              <Link to="/products/alloy-wheels" className="footer-link">
                <FontAwesomeIcon icon={faCogs} className="icon" /> Alloy Wheels
              </Link>
            </li>
            <li>
              <Link to="/products/batteries" className="footer-link">
                <FontAwesomeIcon icon={faCogs} className="icon" /> Batteries
              </Link>
            </li>
            <li>
              <Link to="/products/tyres" className="footer-link">
                <FontAwesomeIcon icon={faCogs} className="icon" /> Tyres
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-gallery">
          <h2>Gallery</h2>
          <div className="gallery-images">
            <img src="src/tyre refurbishing.jpeg" alt="TVS Tyre" />
            <img src="/machine.jpeg" alt="Machine" />
            <img src="src/alloywheel.jpeg"  alt='alloywheel'/>
            <img src="src/sf battery.jpg" alt="Air Machine" />
            <img src="src/bike alloy.jpeg" alt="Air Machine" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2024 - Anil Tyres. All Rights Reserved | Crafted & Cared by Aniket.</p>
      </div>
    </footer>
  );
};

export default Footer;
