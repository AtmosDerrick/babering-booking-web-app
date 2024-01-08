import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((imageUrl, index) => (
        <div key={index}>
          <img
            src={imageUrl}
            alt={`Slide ${index + 1}`}
            className="w-full h-[30vh] rounded-lg"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
