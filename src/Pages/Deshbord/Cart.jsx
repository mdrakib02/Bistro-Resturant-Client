import React, { useContext } from "react";
import { FaMoneyBillAlt } from "react-icons/fa";
import UseCart from "../../Hooks/UseCart";
import { Trash } from "lucide-solid";
import { CgTrash } from "react-icons/cg";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import AuthContext from "../../Provider/Authcontext";
import Spiner from "../../Components/Spiner";

export default function Cart() {
  const [cart, refetch] = UseCart();
  const axiosSeure = useAxiosSecure();
  const {loading} = useContext(AuthContext);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSeure
          .delete(`/carts/${id}`)
          .then((res) => {
            refetch()
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  if(loading){
    return <Spiner></Spiner>
  }
  return (
    <section className=" px-4 py-6 md:py-8 lg:py-12">
      <div className="w-full bg-white p-6 md:p-8 lg:p-12">
        {/* Heading COntents */}
        <div className="flex justify-between items-center">
          <h3 className="text-xl md:text-2xl lg:text-2xl font-bold">
            Total Orders: {cart?.length}
          </h3>
          <h3 className="text-xl md:text-2xl lg:text-2xl font-bold">
            Total Price: ${totalPrice}
          </h3>
          <button className="btn border-none bg-indigo-500 hover:bg-orange-500 text-white">
            <FaMoneyBillAlt /> Pay Now
          </button>
        </div>
        {/* Table Contents */}
        <div className="p-4">
          <div className="bg-orange-500 rounded-t-2xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-center">
                <thead className="text-white">
                  <tr>
                    <th className="py-3 px-4">#</th>
                    <th className="py-3 px-4">Image</th>
                    <th className="py-3 px-4">Item Name</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="bg-black py-3 px-4">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {cart.map((item, index) => (
                    <tr
                      key={item.id || index}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-4 px-4">{index + 1}</td>
                      <td className="py-4 px-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded mx-auto"
                        />
                      </td>
                      <td className="py-4 px-4 text-left">{item.name}</td>
                      <td className="py-4 px-4">${item.price}</td>
                      <td className="py-4 px-4">
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="bg-black text-white px-6 py-2 hover:bg-orange-500 rounded  transition-colors duration-200"
                        >
                          <CgTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
