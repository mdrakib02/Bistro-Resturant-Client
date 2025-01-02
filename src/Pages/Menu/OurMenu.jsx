import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import menuImg from "../../assets/menu/pizza-bg.jpg";
export default function OurMenu() {
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
    </div>
  );
}
