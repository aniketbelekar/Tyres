import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Direct import for styles
import 'slick-carousel/slick/slick-theme.css'; // Direct import for theme styles
import './Home.css'; // Your custom styles

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-container">
      <div className="home-slider">
        <Slider {...settings}>
          <div className="slider-item">
            <img src="public/Banner-3.png" alt="Slide 1" />
          </div>
          <div className="slider-item">
            <img src="public/banner5.jpg" alt="Slide 2" />
          </div>
          <div className="slider-item">
            <img src="public/Contiban.jpg" alt="Slide 3" />
          </div>
          <div className="slider-item">
            <img src="public/Untitled-1.jpg" alt="Slide 4" />
          </div>
        </Slider>
      </div>
      <div className="home-content">
        <h1>Welcome to Anil Tyres</h1>
        <p>Your trusted partner for quality cycle tyres.</p>
      </div>
    </div>
  );
}

export default Home;
