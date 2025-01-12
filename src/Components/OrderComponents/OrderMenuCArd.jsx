import React, { useContext } from "react";
import AuthContext from "../../Provider/Authcontext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseCart from "../../Hooks/UseCart";

export default function OrderMenuCArd({ item }) {
  const { image, name, recipe, price, _id } = item;
  const { user } = useContext(AuthContext);
  const naviagte = useNavigate();
  const axiosSeure = useAxiosSecure();
  const [,refetch] = UseCart()

  const handleFoodCart = ({ item }) => {
    if (user?.email) {
      const cartItems = {
        menuID: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSeure
        .post("/carts", cartItems)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            toast.success(`${name} Added To Your Cart`);
            refetch()
          }
        })
        .catch((error) => {
          console.log(error);
        });
      // toast.success("Products Added to Cart")
    } else {
      Swal.fire({
        title: "Do you want to login?",
        text: "You won't be able to revert this without login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          naviagte("/login");
        }
      });
    }
  };
  return (
    <div>
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              className="h-60 border-[1px] rounded-xl"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title justify-center">{name}</h2>
            <p>{recipe.split(" ").slice(0, 15).join(" ")}...</p>
            <div className="card-actions justify-center">
              <button
                onClick={() => handleFoodCart({ item })}
                className="btn btn-outline border-b-4 bg-slate-200 border-orange-400 uppercase"
              >
                Add To Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
