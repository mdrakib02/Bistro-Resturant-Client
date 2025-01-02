import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import menuImg from "../../assets/menu/pizza-bg.jpg";
import useMenu from "../../Hooks/UseMEnu";
import SectionsTitle from "../../Components/SectionTitle/SectionsTitle";
import MenuCategory from "../../Components/MenuComponents/MenuCategory";
import desertImg from "../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
export default function OurMenu() {
  const [popularMenu] = useMenu();

  const dessert = popularMenu.filter((item) => item.category === "dessert");
  const salad = popularMenu.filter((item) => item.category === "salad");
  const pizza = popularMenu.filter((item) => item.category === "pizza");
  const soup = popularMenu.filter((item) => item.category === "soup");
  const offered = popularMenu.filter((item) => item.category === "offered");

  return (
    <div className="container mx-auto px-4">
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"Bistro Boss"}
        subtitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        }
      ></Cover>

      <SectionsTitle
        SubHeading={"------Don't Miss---------"}
        Heading={"Today's Offer"}
      ></SectionsTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={dessert}
        title={"Desert Menu"}
        coverimg={desertImg}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        title={"Salad Menu"}
        coverimg={saladImg}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        title={"soup Menu"}
        coverimg={soupImg}
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        title={"pizza Menu"}
        coverimg={pizzaImg}
      ></MenuCategory>
      <div></div>
    </div>
  );
}
