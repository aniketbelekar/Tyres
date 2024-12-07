import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../Components/Contacts.css'; // Import the CSS file for styling

const ContactUs = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleButtonClick = () => {
    // Redirect to WhatsApp with the desired phone number
    window.location.href = 'https://wa.me/9823678248'; // Replace with your actual WhatsApp number
  };

  return (
    <section className="contact-us-section">
      <h2>BEST-IN-CLASS Products & Services</h2>
      <p>Contact us for the best deals and top-notch services in cycle tyres.</p>
      <div className="contact-info">
        <div className="contact-detail">
          <i className="fas fa-envelope contact-icon"></i>
          <a href="mailto:info@anilcycletire.com">info@anilcycletire.com</a>
        </div>
        <div className="contact-detail">
          <i className="fas fa-phone contact-icon"></i>
          <a href="tel:+1234567890">+1 234 567 890</a>
        </div>
      </div>
      <button className="contact-button" onClick={handleButtonClick}>
        Contact Us on WhatsApp
      </button>
    </section>
  );
};

export default ContactUs;
