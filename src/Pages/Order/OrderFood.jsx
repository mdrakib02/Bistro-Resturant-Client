import React, { useState } from "react";
import Cover from "../../Components/Cover/Cover";
import OrderImg from "../../assets/menu/banner3.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/UseMEnu";
import OrderTab from "../../Components/OrderComponents/OrderTab";
import { useParams } from "react-router-dom";
export default function OrderFood() {
  const [popularMenu] = useMenu();
  const allCategories = [
    "dessert",
    "salad",
    "pizza",
    "soup",
    "offered",
    "drinks",
  ];
  const {category} = useParams();
  const initialIndex = allCategories.indexOf(category);
  console.log(category);
  const [tabIndex, setTabIndex] = useState(initialIndex === -1 ? 0 : initialIndex);
  const dessert = popularMenu.filter((item) => item.category === "dessert");
  const salad = popularMenu.filter((item) => item.category === "salad");
  const soup = popularMenu.filter((item) => item.category === "soup");
  const pizza = popularMenu.filter((item) => item.category === "pizza");
  const offered = popularMenu.filter((item) => item.category === "offered");
  const drinks = popularMenu.filter((item) => item.category === "drinks");
  return (
    <div className="container mx-auto">
      <Cover
        title={"Order Your Favourite Foods"}
        img={OrderImg}
        subtitle={
          "Order your favorite foods easily and enjoy delicious meals delivered straight to your doorstep"
        }
      ></Cover>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Dessert</Tab>
          <Tab>Salad</Tab>
          <Tab>soup</Tab>
          <Tab>Pizza</Tab>
          <Tab>Offered</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={offered}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
}
