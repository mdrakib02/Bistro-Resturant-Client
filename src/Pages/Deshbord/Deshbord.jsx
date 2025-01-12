import React from "react";
import {
  CgCalendar,
  CgHome,
  CgHomeScreen,
  CgList,
  CgShoppingCart,
} from "react-icons/cg";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

export default function Deshbord() {
  return (
    <section className="bg-slate-200">
      <section className="container mx-auto flex">
        <div className="w-72 bg-orange-500 min-h-screen pt-5 md:pt-8 lg:pt-12">
          <div className="px-4 text-xl md:text-2xl lg:text-3xl font-bold">
            <h1 className="uppercase">Bistro Boss</h1>
            <h2>Resturant</h2>
          </div>{" "}
          <ul className="p-3 space-y-4">
            <li>
              <NavLink
                className="w-full text-right  flex gap-3 px-4 py-2 rounded-sm bg-orange-500 text-white hover:text-black hover:bg-white items-center  text-xl"
                to="/deshbord/home"
              >
                <CgHome />
                User Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="w-full text-right  flex gap-3 px-4 py-2 rounded-sm bg-orange-500 text-white hover:text-black hover:bg-white items-center  text-xl"
                to="/deshbord/cart"
              >
                <CgShoppingCart />
                My CArt
              </NavLink>
            </li>
            <li>
              <NavLink
                className="w-full text-right  flex gap-3 px-4 py-2 rounded-sm bg-orange-500 text-white hover:text-black hover:bg-white items-center  text-xl"
                to="/deshbord/reservation"
              >
                <CgCalendar />
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink
                className="w-full text-right  flex gap-3 px-4 py-2 rounded-sm bg-orange-500 text-white hover:text-black hover:bg-white items-center  text-xl"
                to="/deshbord/review"
              >
                <MdReviews />
                Add Review
              </NavLink>
            </li>
            <li>
              <NavLink
                className="w-full text-right  flex gap-3 px-4 py-2 rounded-sm bg-orange-500 text-white hover:text-black hover:bg-white items-center  text-xl"
                to="/deshbord/booking"
              >
                <CgList />
                My Booking
              </NavLink>
            </li>
            <li>
              <NavLink
                className="w-full text-right  flex gap-3 px-4 py-2 rounded-sm bg-orange-500 text-white hover:text-black hover:bg-white items-center  text-xl"
                to="/deshbord/booking"
              >
                <CgList />
                My Booking
              </NavLink>
            </li>
            <li>
              <NavLink
                className="w-full text-right  flex gap-3 px-4 py-2 rounded-sm bg-orange-500 text-white hover:text-black hover:bg-white items-center  text-xl"
                to="/"
              >
                <CgList />
                Home
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="w-full">
          <Outlet></Outlet>
        </div>
      </section>
    </section>
  );
}
