import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/Footer.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faWrench, faCogs, faPhotoVideo } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-about">
          <h2>About Us</h2>
          <p>Darshan Tyres, a trustworthy tradition since 1990, has been a reputed name in the sale of tyres. With our H.O. on J M Road, we cater across Pune.</p>
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
            <img src="public/tvs tyre.jpeg" />
            <img src="public/machine.jpeg" />
            <img src="public/air machine.jpeg" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2024 - Anil Tyres. All Rights Reserved | Crafted & Cared by Awrange.</p>
      </div>
    </footer>
  );
}

export default Footer;
