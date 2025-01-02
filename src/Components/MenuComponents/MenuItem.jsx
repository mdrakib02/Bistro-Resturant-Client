import React from "react";

export default function MenuItem({ item }) {
  const { image, name, recipe, price } = item;
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          className="w-16 h-16 mx-auto mb-2 rounded-r-2xl rounded-b-2xl bg-slate-500"
          src={image}
          alt=""
        />
        <div>
          <h4 className="text-xl font-medium">{name}</h4>
          <p className="text-base text-yellow-600">{recipe}</p>
        </div>
        <p className="text-yellow-500">${price}</p>
      </div>
    </div>
  );
}
