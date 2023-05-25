import React from "react";

const Heading = ({ subHeading, heading }) => {
  return (
    <section id="heading">
      <div className="headingContainer max-w-[412px] mx-auto text-center">
        <p className="text-xl font-medium border-b-2 border-[#E8E8E8] pb-2 text-[#D99904]">
          <em>{subHeading}</em>
        </p>
        <h2 className="text-3xl font-medium border-b-2 border-[#E8E8E8] py-2">
          {heading}
        </h2>
      </div>
    </section>
  );
};

export default Heading;
