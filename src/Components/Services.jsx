import React from 'react';
import './Services.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCog, faTrafficLight, faSyncAlt, faTools } from '@fortawesome/free-solid-svg-icons';

const services = [
  { id: 1, title: 'Tyre Replacement', description: 'Get your worn-out tyres replaced with new ones for a smooth and safe ride.', icon: faCar },
  { id: 2, title: 'Alignment & Balancing', description: 'Ensure your tyres are aligned and balanced for better handling and even wear.', icon: faCog },
  { id: 3, title: 'Brake Inspection', description: 'Check your brake system to ensure safety and performance.', icon: faTrafficLight },
  { id: 4, title: 'Wheel Rotation', description: 'Rotate your wheels to extend tyre life and improve performance.', icon: faSyncAlt },
  { id: 5, title: 'Flat Tyre Repair', description: 'Quick and reliable repair for flat or punctured tyres.', icon: faTools },
  // Add more services as needed
];

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">
              <FontAwesomeIcon icon={service.icon} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
