import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import qoute from "../../assets/xtra/qoute.svg";

const ClientSays = ({ items }) => {
  const { name, details, rating } = items || {};
  return (
    <div className="reviewSlide text-center mt-9">
      <div className="reviewValue">
        <Rating
          className="mx-auto"
          style={{ maxWidth: 200 }}
          value={Math.round(rating)}
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
        <p>{details}</p>
        <h3 className="text-3xl font-semibold text-[#CD9003]">{name}</h3>
      </div>
    </div>
  );
};

export default ClientSays;
