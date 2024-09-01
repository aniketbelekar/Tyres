import React from 'react';
import '../Components/Contacts.css'; // Import the CSS file for styling

const ContactUs = () => {
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
      <button className="contact-button">Contact Us</button>
    </section>
  );
}

export default ContactUs;
