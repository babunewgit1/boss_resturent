import React from "react";
import Bannar from "../Bannar/Bannar";
import BestFood from "../BestFood/BestFood";
import Boss from "../Boss/Boss";
import FoodMenu from "../FoodMenu/FoodMenu";
import Call from "../Call/Call";
import CRecom from "../CRecom/CRecom";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import Review from "../Review/Review";

const Home = () => {
  return (
    <>
      <Bannar></Bannar>
      <BestFood></BestFood>
      <Boss></Boss>
      <FoodMenu></FoodMenu>
      <Call></Call>
      <CRecom></CRecom>
      <FromOurMenu></FromOurMenu>
      <Review></Review>
    </>
  );
};

export default Home;
