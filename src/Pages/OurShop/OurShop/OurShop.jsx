import React from "react";
import CoverSection from "../../../components/CoverSection/CoverSection";
import shopbg from "../../../assets/shop/banner2.jpg";
import FoodTab from "../FoodTab/FoodTab";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const title = useParams().title;
  console.log(title);
  return (
    <section id="shop">
      <CoverSection
        background={shopbg}
        cheading="OUR SHOP"
        cSubheading="Would you like to try a dish?"
      ></CoverSection>
      <FoodTab title={title}></FoodTab>
    </section>
  );
};

export default OurShop;
