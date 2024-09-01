import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    text: 'Anil Cycle Tyre provided excellent service and quality tyres. Highly recommended!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'Great experience! The staff is friendly, and the tyre replacement was quick.',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    text: 'I always get my tyres from Anil Cycle Tyre. They never disappoint!',
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) => 
        (prevIndex + 1) % testimonialsData.length
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-card">
        <p className="testimonial-text">
          "{testimonialsData[currentTestimonial].text}"
        </p>
        <h4 className="testimonial-name">
          - {testimonialsData[currentTestimonial].name}
        </h4>
      </div>
    </section>
  );
}

export default Testimonials;
