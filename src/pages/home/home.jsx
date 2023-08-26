import React, { useState } from "react";
import "./home.css"; // Make sure to create this CSS file for styling

const Home = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <button className="prev-button" onClick={goToPrevSlide}>
        &lt;
      </button>
      <button className="next-button" onClick={goToNextSlide}>
        &gt;
      </button>
      <div className="dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
