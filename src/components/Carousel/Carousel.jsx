import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

export default function MyCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            src="src\assets\images\body_img.jpg"
            className="carasel"
            alt="banner"
          ></img>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="src\assets\images\slide5.jpg"
            className="carasel"
            alt="banner"
          ></img>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="src\assets\images\slide2.jpg"
            className="carasel"
            alt="banner"
          ></img>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
