import React from "react";

const FoodView = ({ items }) => {
  return (
    <div
      className="foodItems grid grid-cols-12 gap-5 mt-10 items-center"
      key={items?._id}
    >
      <div className="foodItemsLeft col-span-4">
        <img
          className="block w-[200px] h-[200px] object-cover"
          src={items?.image}
          alt=""
        />
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
};

export default FoodView;
