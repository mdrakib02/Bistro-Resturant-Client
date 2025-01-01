import React from "react";
import Banner from "../../Components/Banner/Banner";
import ItemSlider from "../../Components/Swiper/ItemSlider";
import SectionsTitle from "../../Components/SectionTitle/SectionsTitle";
import PopularMenu from "../../Components/PopularMenu/PopularMenu";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ItemSlider></ItemSlider>
      <PopularMenu></PopularMenu>
    </div>
  );
}
