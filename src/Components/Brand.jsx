import React from 'react';
import './Brand.css'; // Import the CSS file for styling
import brands from './BrandData'; // Import the brands data

const Brands = () => {
  return (
    <section className="brands-section">
      <h2>Our Brands</h2>
      <div className="brands-container">
        {brands.map(brand => (
          <div key={brand.id} className="brand-card">
            <img src={brand.image} alt={brand.name} className="brand-image" />
            <div className="brand-info">
              <h3 className="brand-name">{brand.name}</h3>
              <p className="brand-label">{brand.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;
