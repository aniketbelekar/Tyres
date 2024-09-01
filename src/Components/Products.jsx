import React, { useState } from "react";
import { products } from "../Components/ProductData";
import '../Components/Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Product = () => {
  const [category, setCategory] = useState('all');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);

  const handleButtonClick = (selectedCategory) => {
    setCategory(selectedCategory);
    const message = `Displaying ${selectedCategory === 'all' ? 'all products' : selectedCategory + ' tyres'}`;
    setPopupMessage(message);
    setShowPopup(true);

    // Hide the popup after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="product-container">
      <div className="filter-buttons">
        <button 
          className={`filter-button ${category === 'all' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('all')}
        >
          All
        </button>
        <button 
          className={`filter-button ${category === 'bike' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('bike')}
        >
          Bike Tyres
        </button>
        <button 
          className={`filter-button ${category === 'scotty' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('scotty')}
        >
          Scotty Tyres
        </button>
        <button 
          className={`filter-button ${category === 'car' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('car')}
        >
          Car Tyres
        </button>
      </div>

      {showPopup && (
        <div className="popup-message">
          <FontAwesomeIcon icon={faCheckCircle} className="popup-icon" />
          {popupMessage}
        </div>
      )}

      <section className="product-section">
        <h2 className="section-title">
          {category === 'all' 
            ? 'All Products' 
            : category.charAt(0).toUpperCase() + category.slice(1) + ' Tyres'}
        </h2>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.tyreName} className="product-image" />
              <h3 className="product-name">{product.tyreName}</h3>
              <p className="product-bike">Bike: {product.bikeName}</p>
              <p className="product-size">Size: {product.size}</p>
              <p className="product-price">Price: {product.price}</p>
              <p className="product-description">{product.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
