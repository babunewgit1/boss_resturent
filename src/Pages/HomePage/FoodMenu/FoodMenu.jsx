import React, { useEffect, useState } from "react";
import Heading from "../../../components/Heading/Heading";
import FoodView from "../../../components/FoodView/FoodView";
import useMenu from "../../../hooks/UseMenu/useMenu";

const FoodMenu = () => {
  const [show, setShow] = useState(false);
  const [menu] = useMenu();
  const itemsDisplay = show ? menu : menu.slice(0, 6);

  return (
    <section id="foodMenu" className="py-20">
      <Heading
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></Heading>
      <div className="foodItems">
        <div className="mycontainer">
          <div className="foodItemsWrapper grid grid-cols-2 gap-x-9">
            {itemsDisplay.map((items) => {
              return <FoodView key={items._id} items={items}></FoodView>;
            })}
          </div>
          <div className="button text-center mt-9">
            {!show && (
              <button
                onClick={() => setShow(true)}
                className="bg-black text-white px-8 py-3 duration-300 hover:opacity-70"
              >
                View full Menu
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;
