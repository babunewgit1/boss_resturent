import React, { useEffect, useState } from "react";
import Heading from "../../../components/Heading/Heading";

const FoodMenu = () => {
  const [food, setFood] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch("./menu.json")
      .then((res) => res.json())
      .then((foodMenus) => {
        const filtermenus = foodMenus.filter((items) => {
          return items.category == "salad";
        });
        setFood(filtermenus);
      });
  }, []);

  const itemsDisplay = show ? food : food.slice(0, 6);

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
              return (
                <div
                  className="foodItems grid grid-cols-12 gap-5 mt-10 items-center"
                  key={items?._id}
                >
                  <div className="foodItemsLeft col-span-4">
                    <img src={items?.image} alt="" />
                  </div>
                  <div className="foodItemsRight col-span-8">
                    <p className="flex items-center justify-between font-semibold mb-1">
                      {items?.name}.............{" "}
                      <span className="text-[#BB8506]">{items?.price}</span>
                    </p>
                    <div className="dis">
                      <p>{items?.recipe}</p>
                    </div>
                  </div>
                </div>
              );
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
