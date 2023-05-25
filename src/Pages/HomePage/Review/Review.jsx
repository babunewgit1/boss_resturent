import React from "react";
import Heading from "../../../components/Heading/Heading";
import Slider from "react-slick";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import qoute from "../../../assets/xtra/qoute.svg";

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <section id="review" className="review py-24">
      <Heading
        subHeading="---What Our Clients Say---"
        heading="TESTIMONIALS"
      ></Heading>
      <div className="mycontainer">
        <div className="reviewWrapper">
          <Slider {...settings}>
            <div className="reviewSlide text-center mt-9">
              <div className="reviewValue">
                <Rating
                  className="mx-auto"
                  style={{ maxWidth: 200 }}
                  value={Math.round(3.4)}
                  readOnly
                />
              </div>
              <div className="qouteImg mt-6">
                <img
                  className="block mx-auto w-[80px]"
                  src={qoute}
                  alt="qoute images"
                />
              </div>
              <div className="sildertext mt-6 px-32">
                <p>
                  Various version have evolved over the years, sometimes by
                  accident, sometimes on purpose (injected humour and the like).
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <h3 className="text-3xl font-semibold text-[#CD9003]">
                  JANE DOE
                </h3>
              </div>
            </div>
            <div className="reviewSlide text-center mt-9">
              <div className="reviewValue">
                <Rating
                  className="mx-auto"
                  style={{ maxWidth: 200 }}
                  value={Math.round(3.4)}
                  readOnly
                />
              </div>
              <div className="qouteImg mt-6">
                <img
                  className="block mx-auto w-[80px]"
                  src={qoute}
                  alt="qoute images"
                />
              </div>
              <div className="sildertext mt-6 px-32">
                <p>
                  Various version have evolved over the years, sometimes by
                  accident, sometimes on purpose (injected humour and the like).
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <h3 className="text-3xl font-semibold text-[#CD9003]">
                  JANE DOE
                </h3>
              </div>
            </div>
            <div className="reviewSlide text-center mt-9">
              <div className="reviewValue">
                <Rating
                  className="mx-auto"
                  style={{ maxWidth: 200 }}
                  value={Math.round(3.4)}
                  readOnly
                />
              </div>
              <div className="qouteImg mt-6">
                <img
                  className="block mx-auto w-[80px]"
                  src={qoute}
                  alt="qoute images"
                />
              </div>
              <div className="sildertext mt-6 px-32">
                <p>
                  Various version have evolved over the years, sometimes by
                  accident, sometimes on purpose (injected humour and the like).
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <h3 className="text-3xl font-semibold text-[#CD9003]">
                  JANE DOE
                </h3>
              </div>
            </div>
            <div className="reviewSlide text-center mt-9">
              <div className="reviewValue">
                <Rating
                  className="mx-auto"
                  style={{ maxWidth: 200 }}
                  value={Math.round(3.4)}
                  readOnly
                />
              </div>
              <div className="qouteImg mt-6">
                <img
                  className="block mx-auto w-[80px]"
                  src={qoute}
                  alt="qoute images"
                />
              </div>
              <div className="sildertext mt-6 px-32">
                <p>
                  Various version have evolved over the years, sometimes by
                  accident, sometimes on purpose (injected humour and the like).
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <h3 className="text-3xl font-semibold text-[#CD9003]">
                  JANE DOE
                </h3>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Review;
