import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <div className="h-auto md:min-h-[calc(100vh-470px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
