import React from "react";
import { Parallax } from "react-parallax";

export default function Cover({ img, title, subtitle }) {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero min-h-[560px]">
        <div className=" "></div>
        <div className="hero-content text-white text-center">
          <div className="max-w-2xl  hero-overlay px-8 py-6">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5 text-white">{subtitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
