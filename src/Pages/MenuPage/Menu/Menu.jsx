import React from "react";
import CoverSection from "../../../components/CoverSection/CoverSection";
import bgOne from "../../../assets/menu/banner3.jpg";
import bgTwo from "../../../assets/menu/dessert-bg.jpeg";
import bgThree from "../../../assets/menu/pizza-bg.jpg";
import bgFour from "../../../assets/menu/salad-bg.jpg";
import bgFive from "../../../assets/menu/soup-bg.jpg";
import Offerd from "../Offerd/Offerd";
import useMenu from "../../../hooks/UseMenu/useMenu";
import Heading from "../../../components/Heading/Heading";

const Menu = () => {
  const [menu] = useMenu();
  console.log("hello", menu);
  const offered = menu.filter((items) => items.category === "offered");
  const dessert = menu.filter((items) => items.category === "dessert");
  const pizza = menu.filter((items) => items.category === "pizza");
  const salada = menu.filter((items) => items.category === "salad");
  const soup = menu.filter((items) => items.category === "soup");

  return (
    <section id="menuPage">
      <CoverSection
        background={bgOne}
        cheading="OUR MENU"
        cSubheading="Would you like to try a dish?"
      ></CoverSection>
      <div className="heading pt-14">
        <Heading
          subHeading="---Don't miss---"
          heading="TODAY'S OFFER"
        ></Heading>
      </div>
      <Offerd title="offered" items={offered}></Offerd>
      <CoverSection
        background={bgTwo}
        cheading="DESSERTS"
        cSubheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></CoverSection>
      <Offerd title="dessert" items={dessert}></Offerd>
      <CoverSection
        background={bgThree}
        cheading="DESSERTS"
        cSubheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></CoverSection>
      <Offerd title="pizza" items={pizza}></Offerd>
      <CoverSection
        background={bgFour}
        cheading="SALADS"
        cSubheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></CoverSection>
      <Offerd title="salada" items={salada}></Offerd>
      <CoverSection
        background={bgFive}
        cheading="SOUPS"
        cSubheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></CoverSection>
      <Offerd title="soup" items={soup}></Offerd>
    </section>
  );
};

export default Menu;
