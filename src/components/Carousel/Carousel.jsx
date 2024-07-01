import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

export default function MyCarousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // <div className="my-carousel">
    //   <Carousel>
    //     {images.map((image, index) => (
    //       <Carousel.Item key={index}>
    //         <img
    //           src={image.src}
    //           className="carousel"
    //           alt={image.alt || `Slide ${index + 1}`}
    //         />
    //       </Carousel.Item>
    //     ))}
    //   </Carousel>
    // </div>
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image.src}
            alt={image.alt || `Slide ${index + 1}`}
            className="sliderImg"
          />
        </div>
      ))}
    </Slider>
  );
}
