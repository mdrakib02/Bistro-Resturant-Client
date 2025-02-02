import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaMoneyBillAlt, FaUser } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

export default function AllUsers() {
  const axiousSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiousSecure.get("users");
      return res.data;
    },
  });
  // MAke Admin
  const handleMakeAdmin = (user) => {
    axiousSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} Is Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const handleDelete = (id) => {
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
        axiousSecure
          .delete(`/users/${id}`)
          .then((res) => {
            refetch();
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

  return (
    <section className=" px-4 py-6 md:py-8 lg:py-12">
      <div className="w-full bg-white p-6 md:p-8 lg:p-12">
        {/* Heading COntents */}
        <div className="flex justify-between items-center">
          <h3 className="text-xl md:text-2xl lg:text-2xl font-bold">
            Total Users: {users?.length}
          </h3>
          <h3 className="text-xl md:text-2xl lg:text-2xl font-bold">
            Total Price: $
          </h3>
          <button className="btn border-none bg-indigo-500 hover:bg-orange-500 text-white">
            <FaMoneyBillAlt /> Pay Now
          </button>
        </div>
        {/* Table Contents */}
        <div className="p-4">
          <div className="bg-orange-500 rounded-t-2xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="text-white">
                  <tr>
                    <th className="py-3 px-4">#</th>
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Email</th>
                    <th className="py-3 px-4">Role</th>
                    <th className="bg-black py-3 px-4">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {users.map((user, index) => (
                    <tr
                      key={user.id || index}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-4 px-4">{index + 1}</td>
                      <td className="py-4 px-4 text-left">{user.name}</td>
                      <td className="py-4 px-4">${user.email}</td>
                     {user.role == 'admin'? "Admin" : <td className="py-4 px-4">
                        <button onClick={() => handleMakeAdmin(user)}>
                          <FaUser></FaUser>
                        </button>
                      </td>}
                      <td className="py-4 px-4">
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="bg-black text-white px-6 py-2 hover:bg-orange-500 rounded  transition-colors duration-200"
                        >
                          <MdOutlineDeleteOutline />
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
