import React from "react";

const CoverSection = ({ background, cheading, cSubheading }) => {
  console.log(background);
  return (
    <section
      id="cover"
      style={{ backgroundImage: `url(${background})` }}
      className="py-40 bg-cover bg-fixed"
    >
      <div className="mycontainer">
        <div className="coverInner text-center bg-black bg-opacity-60 text-white py-24">
          <h2 className="text-6xl font-bold">{cheading}</h2>
          <p className="text-xl font-medium mt-3 max-w-4xl mx-auto">
            {cSubheading}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoverSection;
