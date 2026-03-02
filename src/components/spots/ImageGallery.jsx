import React from "react";
import { Carousel } from "react-bootstrap";

const ImageGallery = ({ images }) => {
  return (
    <Carousel>
      {images.map((img, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={img} alt="spot" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageGallery;
