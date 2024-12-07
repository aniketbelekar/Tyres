import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/TyreSelector.css';

const TyreSelector = () => {
  const [selectedBrand, setSelectedBrand] = useState(''); // Selected vehicle brand
  const [selectedModel, setSelectedModel] = useState(''); // Selected vehicle model
  const [selectedTyreBrand, setSelectedTyreBrand] = useState(''); // Selected tyre brand
  const [selectedType, setSelectedType] = useState(''); // Front or Rear type (initially empty)
  const navigate = useNavigate();

  // Vehicle brands and models mapping
  const vehicleBrands = ['Bajaj', 'Honda', 'TVS', 'Yamaha'];
  const models = {
    Bajaj: ['Pulsar 150', 'CT 100'],
    Honda: ['Activa', 'CB Shine'],
    TVS: ['Jupiter', 'NTorq'],
    Yamaha: ['R15', 'FZ'],
  };

  // Tyre brands mapping for each vehicle model
  const tyreBrands = {
    'Pulsar 150': ['MRF', 'Ceat', 'TVS'],
    'CT 100': ['MRF', 'Ceat'],
    'Activa': ['MRF', 'Ceat', 'Apollo'],
    'CB Shine': ['MRF', 'Ceat'],
    'Jupiter': ['MRF', 'Ceat', 'TVS'],
    'NTorq': ['MRF', 'Ceat', 'TVS'],
    'R15': ['MRF', 'Ceat', 'Apollo'],
    'FZ': ['MRF', 'Ceat', 'TVS'],
  };

  // Navigate to product details page
  const handleNavigate = (type) => {
    if (!selectedBrand || !selectedModel || !selectedTyreBrand || !type) {
      alert('Please select a vehicle brand, model, tyre brand, and tyre type.');
      return;
    }
    navigate('/product-details', {
      state: {
        brand: selectedBrand,
        model: selectedModel,
        tyreBrand: selectedTyreBrand,
        type: type, // Front or Rear type
      },
    });
  };

  return (
    <div className="tyre-selector">
      <h2>SELECT A TYRE FOR YOUR VEHICLE</h2>

      <div className="dropdown-container">
        {/* Vehicle Brand Dropdown */}
        <select
          value={selectedBrand}
          onChange={(e) => {
            setSelectedBrand(e.target.value);
            setSelectedModel(''); // Reset model and tyre brand when brand changes
            setSelectedTyreBrand('');
          }}
        >
          <option value="">Select Vehicle Brand</option>
          {vehicleBrands.map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>

        {/* Vehicle Model Dropdown */}
        <select
          value={selectedModel}
          onChange={(e) => {
            setSelectedModel(e.target.value);
            setSelectedTyreBrand(''); // Reset tyre brand when model changes
          }}
          disabled={!selectedBrand} // Enable only after selecting vehicle brand
        >
          <option value="">Select Model</option>
          {selectedBrand && models[selectedBrand]?.map((model) => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>

        {/* Tyre Brand Dropdown */}
        <select
          value={selectedTyreBrand}
          onChange={(e) => setSelectedTyreBrand(e.target.value)}
          disabled={!selectedModel} // Enable only after selecting vehicle model
        >
          <option value="">Select Tyre Brand</option>
          {selectedModel && tyreBrands[selectedModel]?.map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>

      {/* Button Container for Front and Rear */}
      <div className="button-container">
        <button
          className={selectedType === 'Front' ? 'active' : ''}
          onClick={() => {
            setSelectedType('Front');
            handleNavigate('Front'); // Navigate when Front is selected
          }}
        >
          Front
        </button>
        <button
          className={selectedType === 'Rear' ? 'active' : ''}
          onClick={() => {
            setSelectedType('Rear');
            handleNavigate('Rear'); // Navigate when Rear is selected
          }}
        >
          Rear
        </button>
      </div>

      {/* Info Text */}
      <p className="info-text">
        Manufacturer recommended tyres are the best for your vehicle, ensuring optimal performance and fuel efficiency.
      </p>
    </div>
  );
};

export default TyreSelector;
