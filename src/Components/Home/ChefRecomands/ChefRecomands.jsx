import React from "react";
import SectionsTitle from "../../SectionTitle/SectionsTitle";
import img1 from "../../../assets/shop/img.jpg";
export default function ChefRecomands() {
  return (
    <>
      <section className="container mx-auto my-6 md:my-8 lg:my-24 ">
        <div>
          <SectionsTitle
            SubHeading={"---Should Try---"}
            Heading={"CHEF RECOMMENDS"}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                className="h-60 border-[1px] rounded-xl"
                src={img1}
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title justify-center">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-center">
                <button className="btn btn-outline border-b-4 uppercase">
                  Add To Card
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                className="h-60 border-[1px] rounded-xl"
                src={img1}
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title justify-center">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-center">
                <button className="btn btn-outline border-b-4 uppercase">
                  Add To Card
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                className="h-60 border-[1px] rounded-xl"
                src={img1}
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title justify-center">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-center">
                <button className="btn btn-outline border-b-4 uppercase">
                  Add To Card
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                className="h-60 border-[1px] rounded-xl"
                src={img1}
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title justify-center">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-center">
                <button className="btn btn-outline border-b-4 uppercase">
                  Add To Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
