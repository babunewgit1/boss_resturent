import React, { useEffect, useState } from "react";
import Heading from "../../../components/Heading/Heading";

const CRecom = () => {
  const [food, setFood] = useState([]);
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

  return (
    <section id="chefrecom" className="py-20">
      <Heading
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></Heading>
      <div className="chefrecomWrapper">
        <div className="mycontainer">
          <div className="chefremItems grid grid-cols-3 gap-4">
            {food.slice(0, 3).map((items) => {
              return (
                <div
                  key={items._id}
                  className="fooditems bg-[#F3F3F3] mt-10 text-center"
                >
                  <div className="foodItemsImg">
                    <img
                      className="block w-full"
                      src={items?.image}
                      alt="food img"
                    />
                  </div>
                  <div className="foodItemsname p-6 space-y-4">
                    <h3 className="text-2xl font-semibold">{items?.name}</h3>
                    <p>{items?.recipe}</p>
                    <button className="bg-black text-white px-8 py-3 duration-300 hover:opacity-70">
                      add to cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRecom;
