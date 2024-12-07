import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetails = () => {
  const location = useLocation();
  const { brand, model, type } = location.state || {};

  // Detailed product data categorized by brand and model
  const productData = {
    Yamaha: {
      R15: {
        Front: [
          {
            name: 'SportMax Pro',
            price: '$60',
            description: 'High-performance sport tyre for Yamaha R15.',
            image: 'public/images tyre/1.jpeg',
            specifications: '120/70 ZR17, Tubeless',
            rating: 4.7,
          },
          {
            name: 'RoadMaster X1',
            price: '$65',
            description: 'Durable front tyre with excellent grip.',
            image: '/images/yamaha-r15-front-2.jpg',
            specifications: '120/70 R17, Tubeless',
            rating: 4.8,
          },
          {
            name: 'TrackRacer Pro',
            price: '$70',
            description: 'Ideal for track and high-speed performance.',
            image: '/images/yamaha-r15-front-3.jpg',
            specifications: '110/70 ZR17, Tubeless',
            rating: 4.9,
          },
          {
            name: 'CityCruise Elite',
            price: '$55',
            description: 'Perfect for city commuting with comfort.',
            image: '/images/yamaha-r15-front-4.jpg',
            specifications: '110/70 R17, Tubeless',
            rating: 4.6,
          },
          {
            name: 'GripMaster MX',
            price: '$62',
            description: 'Enhanced grip for wet and dry conditions.',
            image: '/images/yamaha-r15-front-5.jpg',
            specifications: '120/70 ZR17, Tubeless',
            rating: 4.8,
          },
          {
            name: 'SpeedGrip Evo',
            price: '$75',
            description: 'High-speed performance tyre with durability.',
            image: '/images/yamaha-r15-front-6.jpg',
            specifications: '120/60 ZR17, Tubeless',
            rating: 4.7,
          },
          {
            name: 'AllRounder Max',
            price: '$58',
            description: 'Balanced performance for all terrains.',
            image: '/images/yamaha-r15-front-7.jpg',
            specifications: '120/65 ZR17, Tubeless',
            rating: 4.5,
          },
        ],
        Rear: {
          name: 'RearMax Pro',
          price: '$80',
          description: 'Durable rear tyre with excellent grip for Yamaha R15.',
          image: '/images/yamaha-r15-rear.jpg',
          specifications: '180/55 ZR17, Tubeless',
          rating: 4.8,
        },
      },
      MT15: {
        Front: {
          name: 'MTFront Pro',
          price: '$55',
          description: 'Premium front tyre for Yamaha MT15.',
          image: '/images/yamaha-mt15-front.jpg',
          specifications: '110/70 R17, Tubeless',
          rating: 4.6,
        },
        Rear: {
          name: 'MTRear Max',
          price: '$75',
          description: 'Robust rear tyre designed for Yamaha MT15.',
          image: '/images/yamaha-mt15-rear.jpg',
          specifications: '140/70 R17, Tubeless',
          rating: 4.7,
        },
      },
    },
    // Add similar entries for other brands and models here...
  };

  // Retrieve the relevant tyre data based on brand, model, and type
  const tyreData = productData[brand]?.[model]?.[type];

  if (!tyreData) {
    return <div className="product-details">No details available for this selection.</div>;
  }

  return (
    <div className="product-details">
      <h2>{brand} {model} - {type} Tyres</h2>
      {Array.isArray(tyreData) ? (
        <div className="tyre-list">
          {tyreData.map((tyre, index) => (
            <div key={index} className="tyre-item">
              <img src={tyre.image} alt={`${tyre.name}`} className="tyre-image" />
              <h3>{tyre.name}</h3>
              <p className="description">{tyre.description}</p>
              <p className="specifications"><strong>Specifications:</strong> {tyre.specifications}</p>
              <h4 className="price">Price: {tyre.price}</h4>
              <p className="rating"><strong>Rating:</strong> {tyre.rating} / 5</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="tyre-item">
          <img src={tyreData.image} alt={`${brand} ${model} ${type} Tyre`} className="tyre-image" />
          <h3>{tyreData.name}</h3>
          <p className="description">{tyreData.description}</p>
          <p className="specifications"><strong>Specifications:</strong> {tyreData.specifications}</p>
          <h4 className="price">Price: {tyreData.price}</h4>
          <p className="rating"><strong>Rating:</strong> {tyreData.rating} / 5</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
