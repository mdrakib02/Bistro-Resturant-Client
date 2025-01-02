import React from "react";
import Banner from "../../Components/Home/Banner/Banner";
import ItemSlider from "../../Components/Home/Swiper/ItemSlider";
import PopularMenu from "../../Components/Home/PopularMenu/PopularMenu";
import ChefRecomands from "../../Components/Home/ChefRecomands/ChefRecomands";
import FromOurMenu from "../../Components/Home/FromOurMenu/FromOurMenu";
import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import menuImg from "../../assets/menu/pizza-bg.jpg";
import Testimonial from "../../Components/Home/Testimonial/Testimonial";
export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner></Banner>
      <ItemSlider></ItemSlider>
      <Cover
        img={menuImg}
        title={"Bistro Boss"}
        subtitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        }
      ></Cover>
      <PopularMenu></PopularMenu>
      <ChefRecomands></ChefRecomands>
      <FromOurMenu></FromOurMenu>
      <Testimonial></Testimonial>
    </div>
  );
}
