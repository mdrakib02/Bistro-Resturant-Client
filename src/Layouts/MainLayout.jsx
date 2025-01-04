import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");

  console.log(location);
  return (
    <div>
      {noHeaderFooter || <Header />}
      <div className="h-auto md:min-h-[calc(100vh-470px)]">
        <Outlet />
      </div>
      {noHeaderFooter || <Footer />}
    </div>
  );
}
