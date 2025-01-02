import React, { useState } from "react";
import Cover from "../../Components/Cover/Cover";
import OrderImg from "../../assets/menu/banner3.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/UseMEnu";
import OrderTab from "../../Components/OrderComponents/OrderTab";
export default function OrderFood() {
  const [popularMenu] = useMenu();

  const dessert = popularMenu.filter((item) => item.category === "dessert");
  const salad = popularMenu.filter((item) => item.category === "salad");
  const pizza = popularMenu.filter((item) => item.category === "pizza");
  const soup = popularMenu.filter((item) => item.category === "soup");
  const offered = popularMenu.filter((item) => item.category === "offered");
  return (
    <div className="container mx-auto">
      <Cover
        title={"Order Your Favourite Foods"}
        img={OrderImg}
        subtitle={
          "Order your favorite foods easily and enjoy delicious meals delivered straight to your doorstep"
        }
      ></Cover>

      <Tabs>
        <TabList>
          <Tab>Dessert</Tab>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Offered</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={offered}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
}
