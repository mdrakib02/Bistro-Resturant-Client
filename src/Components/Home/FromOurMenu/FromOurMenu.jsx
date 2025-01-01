import React from "react";
import SectionsTitle from "../../SectionTitle/SectionsTitle";
import imgSalad from "../../../assets/shop/img.jpg";
import "./From.css"
export default function FromOurMenu() {
  return (
    <section className="container mx-auto my-6 md:my-8 lg:my-12 feature_Section">
      <div>
        <SectionsTitle
          SubHeading={"---Check it out---"}
          Heading={"FROM OUR MENU"}
        />
      </div>
      <div>
        <div className="flex justify-center items-center mx-auto">
          <div>
            {" "}
            <img className="w-[668px] mx-auto" src={imgSalad} alt="" />
          </div>
          <div>
            {" "}
            <p className="w-[668px] mx-auto p-">
              March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error voluptate facere, deserunt
              dolores maiores quod nobis quas quasi. Eaque repellat recusandae
              ad laudantium tempore consequatur consequuntur omnis ullam maxime
              tenetur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
