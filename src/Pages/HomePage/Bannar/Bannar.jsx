import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

const Bannar = () => {
  return (
    <section id="bannar">
      <Carousel autoPlay={true} infiniteLoop={true} showStatus={false}>
        <div>
          <img
            className="block w-full h-[450px] lg:h-[800px] object-cover object-bottom"
            src={img1}
            alt="slider Images"
          />
        </div>
        <div>
          <img
            className="block w-full h-[450px] lg:h-[800px] object-cover object-bottom"
            src={img2}
            alt="slider Images"
          />
        </div>
        <div>
          <img
            className="block w-full h-[450px] lg:h-[800px] object-cover object-bottom"
            src={img3}
            alt="slider Images"
          />
        </div>
        <div>
          <img
            className="block w-full h-[450px] lg:h-[800px] object-cover object-bottom"
            src={img4}
            alt="slider Images"
          />
        </div>
        <div>
          <img
            className="block w-full h-[450px] lg:h-[800px] object-cover object-bottom"
            src={img5}
            alt="slider Images"
          />
        </div>
        <div>
          <img
            className="block w-full h-[450px] lg:h-[800px] object-cover object-bottom"
            src={img6}
            alt="slider Images"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Bannar;
