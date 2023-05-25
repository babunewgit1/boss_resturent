import React from "react";
import Heading from "../../../components/Heading/Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const BestFood = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    margin: 20,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div id="bestFood" className="pt-16">
      <Heading
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></Heading>
      <div className="foodSlider pt-16">
        <div className="mycontainer">
          <div className="foodSliderWrapper">
            <div>
              <Slider {...settings}>
                <div className="relative">
                  <img
                    className="block w-full"
                    src={slide1}
                    alt="slide images"
                  />
                  <div className="slideText">
                    <p>Salads</p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    className="block w-full"
                    src={slide2}
                    alt="slide images"
                  />
                  <div className="slideText">
                    <p>Salads</p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    className="block w-full"
                    src={slide3}
                    alt="slide images"
                  />
                  <div className="slideText">
                    <p>Salads</p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    className="block w-full"
                    src={slide4}
                    alt="slide images"
                  />
                  <div className="slideText">
                    <p>Salads</p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    className="block w-full"
                    src={slide5}
                    alt="slide images"
                  />
                  <div className="slideText">
                    <p>Salads</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestFood;
