import React from "react";
import Banner from "../../Components/Home/Banner/Banner";
import ItemSlider from "../../Components/Home/Swiper/ItemSlider";
import PopularMenu from "../../Components/Home/PopularMenu/PopularMenu";
import ChefRecomands from "../../Components/Home/ChefRecomands/ChefRecomands";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ItemSlider></ItemSlider>
      <PopularMenu></PopularMenu>
      <ChefRecomands></ChefRecomands>
    </div>
  );
}
