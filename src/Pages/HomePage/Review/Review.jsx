import React, { useEffect, useState } from "react";
import Heading from "../../../components/Heading/Heading";
import Slider from "react-slick";
import ClientSays from "../../../components/ClientSays/ClientSays";

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

  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((reviews) => setReview(reviews));
  });

  return (
    <section id="review" className="review py-24">
      <Heading
        subHeading="---What Our Clients Say---"
        heading="TESTIMONIALS"
      ></Heading>
      <div className="mycontainer">
        <div className="reviewWrapper">
          <Slider {...settings}>
            {review.map((items) => {
              return <ClientSays key={items._id} items={items}></ClientSays>;
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Review;
