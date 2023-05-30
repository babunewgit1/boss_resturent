import React, { useState } from "react";
import useMenu from "../../../hooks/UseMenu/useMenu";
import FoodCart from "../../../components/FoodCart/FoodCart";

const FoodTab = ({ title }) => {
  const [tab, setTab] = useState(`${title ? title : "salad"}`);
  const [menu] = useMenu();
  const menuTabItems = menu.filter((items) => items.category === tab);

  return (
    <section id="foodtab" className="py-20">
      <div className="mycontainer">
        <div className="foodWrapper">
          <div className="foodTabItems">
            <ul className="flex items-center justify-center gap-9 uppercase text-xl font-semibold">
              <li
                className={`${tab === "salad" ? "active" : ""} cursor-pointer`}
                onClick={() => setTab("salad")}
              >
                Salad
              </li>
              <li
                className={`${tab === "pizza" ? "active" : ""} cursor-pointer`}
                onClick={() => setTab("pizza")}
              >
                pizza
              </li>
              <li
                className={`${tab === "soup" ? "active" : ""} cursor-pointer`}
                onClick={() => setTab("soup")}
              >
                soups
              </li>
              <li
                className={`${
                  tab === "dessert" ? "active" : ""
                } cursor-pointer`}
                onClick={() => setTab("dessert")}
              >
                desserts
              </li>
              <li
                className={`${tab === "drinks" ? "active" : ""} cursor-pointer`}
                onClick={() => setTab("drinks")}
              >
                drinks
              </li>
              <li
                className={`${
                  tab === "offered" ? "active" : ""
                } cursor-pointer`}
                onClick={() => setTab("offered")}
              >
                offered
              </li>
            </ul>
          </div>
          <div className="foodItemsWrapper grid grid-cols-3 gap-4">
            {menuTabItems.map((items) => (
              <FoodCart key={items._id} element={true} items={items}></FoodCart>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodTab;
