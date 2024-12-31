import React from "react";
import { BsTiktok } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="bg-black">
      <div className="">
        <div className="flex flex-col  md:flex-row lg:flex-row items-start md:items-center ">
          <div className="bg-slate-800 w-full text-right pr-14 py-8">
            <div className="text-white flex  flex-col gap-4 h-60 my-auto p-8 md:p-12 lg:p-24">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
                CONTACT US
              </h3>
              <ul
                className="text-base
            "
              >
                <li>123 ABS Street, Uni 21, Bangladesh</li>
                <li>+88 123456789</li>
                <li>Mon - Fri: 08:00 - 22:00</li>
                <li>Sat - Sun: 10:00 - 23:00</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-950 w-full text-left pl-14 py-8 ">
            <div className="text-white flex  flex-col gap-4 h-60 p-8 md:p-12 lg:p-24">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
                Follow Us
              </h3>
              <p className="text-base">Join on our social accoutsF</p>
              <ul className="flex gap-3 text-xl">
                <Link>
                  <FaFacebook />
                </Link>
                <Link>
                  <ImInstagram />
                </Link>
                <Link>
                  <BsTiktok />
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <p className="text-white  py-5 text-base text-center">Copyright © CulinaryCloud. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
