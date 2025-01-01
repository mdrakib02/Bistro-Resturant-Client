import React from "react";
import SectionsTitle from "../SectionTitle/SectionsTitle";

export default function PopularMenu() {
  return (
    <section className="container mx-auto my-6 md:my-8 lg:my-24">
      <div>
        <SectionsTitle
          SubHeading={"---Check it out---"}
          Heading={"FROM OUR MENU"}
        />
      </div>
    </section>
  );
}
