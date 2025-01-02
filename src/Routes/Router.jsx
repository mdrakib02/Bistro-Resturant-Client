import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/Menu/OurMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h1>Error </h1>,
    children: [

      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/our-menu",
        element: <OurMenu></OurMenu>
      }
    ]
  },
]);

export default router
