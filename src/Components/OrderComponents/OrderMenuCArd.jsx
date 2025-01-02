import React from "react";

export default function OrderMenuCArd({item}) {
    const { image, name, recipe, price } = item;
  return (
    <div>
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              className="h-60 border-[1px] rounded-xl"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title justify-center">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline border-b-4 bg-slate-200 border-orange-400 uppercase">
                Add To Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
