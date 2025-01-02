import React from "react";
import SectionsTitle from "../../SectionTitle/SectionsTitle";
import imgSalad from "../../../assets/shop/img.jpg";
import "./From.css";
import menuImg from "../../../assets/menu/salad-bg.jpg"
import { Parallax } from "react-parallax";
export default function FromOurMenu() {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={menuImg}
      bgImageAlt="the dog"
      strength={-200}
    >
      <section className="container mx-auto hero-overlay bg-opacity-40 text-white bg-fixed my-6 md:my-8 lg:my-12 ">
        <div>
          <SectionsTitle
            SubHeading={"---Check it out---"}
            Heading={"FROM OUR MENU"}
          />
        </div>
        <div>
          <div className="flex flex-col md:flex-row   justify-center items-center mx-auto gap-6 ">
            <div>
              {" "}
              <img
                className="w-[668px] mx-auto p-8 md:p-12"
                src={imgSalad}
                alt=""
              />
            </div>
            <div className="w-[668px] mx-auto p-8 md:p-12 ">
              {" "}
              <p className="">
                March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Error voluptate facere, deserunt
                dolores maiores quod nobis quas quasi. Eaque repellat recusandae
                ad laudantium tempore consequatur consequuntur omnis ullam
                maxime tenetur.
              </p>
              <button className="border-b-black border-b-4 btn-outline btn mt-6 text-white rounded-b-xl ">
                Read More..
              </button>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
}
