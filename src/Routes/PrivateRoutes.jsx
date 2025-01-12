import React, { Children, useContext } from "react";
import AuthContext from "../Provider/Authcontext";
import { Navigate, useLocation } from "react-router-dom";
import Spiner from "../Components/Spiner";

export default function PrivateRoutes({children}) {
  const { user, loading } = useContext(AuthContext);
  const location= useLocation();
  if (loading) {
    return <Spiner/>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
}
