import React from "react";

export default function SectionsTitle({ Heading, SubHeading }) {
  return (
    <div className="container mx-auto text-center py-6 md:py-8 lg:py-12">
      <p className="text-base text-yellow-600 my-2">{SubHeading}</p>
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold border-y-2 py-2 w-80 mx-auto">
        {Heading}
      </h1>
    </div>
  );
}
