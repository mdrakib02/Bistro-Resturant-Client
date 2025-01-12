import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/Menu/OurMenu";
import OrderFood from "../Pages/Order/OrderFood";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secrates from "../Components/Secrates";
import Deshbord from "../Pages/Deshbord/Deshbord";
import Cart from "../Pages/Deshbord/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h1>Error </h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/our-menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/order/:category",
        element: <OrderFood></OrderFood>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secrates",
        element: (
          <PrivateRoutes>
            <Secrates></Secrates>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/deshbord",
    element: (
      <PrivateRoutes>
        <Deshbord />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/deshbord/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
