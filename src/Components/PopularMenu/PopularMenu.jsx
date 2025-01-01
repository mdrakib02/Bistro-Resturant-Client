import React, { useEffect, useState } from "react";
import SectionsTitle from "../SectionTitle/SectionsTitle";

export default function PopularMenu() {
  const [popularMenu, setPopularMenu] = useState([]);
  console.log(popularMenu);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setPopularMenu(popularItem);
      });
  }, []);
  return (
    <section className="container mx-auto my-6 md:my-8 lg:my-24 ">
      <div>
        <SectionsTitle
          SubHeading={"---Check it out---"}
          Heading={"FROM OUR MENU"}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-6 md:my-8 lg:my-12">
        {popularMenu.map((menu) => (
          <div className="flex gap-6 items-center">
            <img
              className="w-12 h-12 mb-2 rounded-r-2xl rounded-b-2xl bg-slate-500"
              src={menu.image}
              alt=""
            />
            <div>
              <h4 className="text-xl font-medium">{menu.name}</h4>
              <p className="text-base text-yellow-600">{menu.recipe}</p>
            </div>
            <p className="text-yellow-500">${menu.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
