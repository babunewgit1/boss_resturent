import React from "react";
import Heading from "../../../components/Heading/Heading";
import FoodCart from "../../../components/FoodCart/FoodCart";
import useMenu from "../../../hooks/UseMenu/useMenu";

const CRecom = () => {
  const [food] = useMenu();

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
              return <FoodCart items={items} key={items._id}></FoodCart>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRecom;
