import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import AuthContext from "../Provider/Authcontext";

const UseCart = () => {
  const axiosSeure = useAxiosSecure();
  const {user} = useContext(AuthContext)
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSeure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
});
return [cart, refetch];
};

export default UseCart;
