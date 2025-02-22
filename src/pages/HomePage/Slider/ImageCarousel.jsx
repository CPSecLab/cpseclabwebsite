import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageCarousel.css";

const ImageCarousel = ({ images }) => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    dots: true,
    arrows: false,
    centerMode: true, // Ensures center slide is in focus
    centerPadding: "0px", // Avoids unnecessary spacing
    appendDots: (dots) => (
      <div className="slider-navigation">
        <div
          className="custom-arrow prev"
          onClick={() => sliderRef.current.slickPrev()}
        > 
          &#10094;
        </div>
        <div className="dots-container">{dots}</div>
        <div
          className="custom-arrow next"
          onClick={() => sliderRef.current.slickNext()}
        >
          &#10095;
        </div>
      </div>
    ),
  };

  return (
    <div className="slider-wrapper">
      <Slider ref={sliderRef} {...settings}>
        {images.map((src, index) => (
          <div key={index} className="slide">
            <img src={src} alt={`Slide ${index}`} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
