import React from "react";
import FoodView from "../../../components/FoodView/FoodView";
import { Link } from "react-router-dom";

const Offerd = ({ items, title }) => {
  return (
    <section id="offered" className="py-20">
      <div className="mycontainer">
        <div className="foodItemsWrapper grid grid-cols-2 gap-x-9">
          {items.map((items) => {
            return <FoodView key={items._id} items={items}></FoodView>;
          })}
        </div>
        <div className="button text-center mt-10">
          <Link to={`/food/${title}`}>
            <button className="bg-black text-white px-8 py-3 duration-300 hover:opacity-70">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Offerd;
