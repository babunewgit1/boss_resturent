import React from "react";
import Heading from "../../../components/Heading/Heading";
import fea from "../../../assets/home/featured.jpg";

const FromOurMenu = () => {
  return (
    <section id="FourMenu" className="FourMenu py-24">
      <Heading
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></Heading>
      <div className="mycontainer">
        <div className="fourMenuWrapper grid grid-cols-2 gap-10 items-center mt-10">
          <div className="fourLeft">
            <img className="w-full block" src={fea} alt="featured images" />
          </div>
          <div className="fourRight text-white space-y-3">
            <h3>March 20, 2023</h3>
            <h2>WHERE CAN I GET SOME?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="bg-black text-white px-8 py-3 duration-300 hover:opacity-70">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FromOurMenu;
