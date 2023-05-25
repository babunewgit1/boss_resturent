import moment from "moment/moment";
import React from "react";

const CopyRight = () => {
  return (
    <section id="copyright" className="bg-[#151515] py-4">
      <div className="mycontainer">
        <p className="text-center text-white">
          Copyright <span>{moment().format("yyyy")}</span> © CulinaryCloud. All
          rights reserved.
        </p>
      </div>
    </section>
  );
};

export default CopyRight;
