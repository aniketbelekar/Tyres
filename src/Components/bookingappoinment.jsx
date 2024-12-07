import React, { useState } from 'react';
import './bookingappoinment.css';

const BookingAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing data from localStorage
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];

    // Add the new appointment to the existing data
    const updatedAppointments = [...storedAppointments, formData];

    // Save the updated data to localStorage
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));

    // Display a confirmation alert
    alert('Appointment booked successfully!');

    // Clear the form (optional)
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      comments: '',
    });

    // Refresh the page
    window.location.reload();
  };

  return (
    <div className="booking-container">
      <h2>Book a Tire Replacement Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Comments:</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookingAppointment;
