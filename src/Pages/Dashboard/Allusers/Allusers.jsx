import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaTrashAlt, FaUserAlt } from "react-icons/fa";

const Allusers = () => {
  const { refetch, data: allUser = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    },
  });

  const handelDeleteAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "delete",
    })
      .then((req) => req.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Deleted successfull");
        }
      });
  };

  const handelEdit = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PATCH",
    })
      .then((req) => req.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Make user admin successfull");
        }
      });
  };

  return (
    <section id="cartInfo">
      <div className="cartWrapper bg-white rounded-sm p-10 mt-10">
        <div className="cartheading flex items-center justify-between">
          <h3 className="text-2xl font-medium">
            Total Items : {allUser.length}
          </h3>
        </div>
        <div className="cartTable mt-10">
          <table className="w-full text-center">
            <thead>
              <tr className="bg-[#D1A054] text-white">
                <th className="p-3">Sl No.</th>
                <th className="p-3">NAME</th>
                <th className="p-3">EMAIL</th>
                <th className="p-3">ROLE</th>
                <th className="p-3">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {allUser.map((items, index) => {
                return (
                  <tr key={items._id}>
                    <td className="py-2 border-b border-b-black">
                      <p>{index + 1}</p>
                    </td>
                    <td className="py-2 border-b border-b-black">
                      <p>{items.name}</p>
                    </td>
                    <td className="py-2 border-b border-b-black">
                      <p>{items.email}</p>
                    </td>
                    <td className="py-2 border-b border-b-black">
                      {items.role === "admin" ? (
                        <p>Admin</p>
                      ) : (
                        <p className="text-center w-9 h-9 mx-auto">
                          <button
                            onClick={() => handelEdit(items._id)}
                            className="bg-[#D1A054] w-full h-full cursor-pointer text-white rounded-md flex items-center justify-center"
                          >
                            <span>
                              <FaUserAlt></FaUserAlt>
                            </span>
                          </button>
                        </p>
                      )}
                    </td>
                    <td className="py-2 border-b border-b-black">
                      <p className="text-center w-9 h-9 mx-auto">
                        <button
                          onClick={() => handelDeleteAdmin(items._id)}
                          className="bg-[#D1A054] w-full h-full cursor-pointer text-white rounded-md flex items-center justify-center"
                        >
                          <span>
                            <FaTrashAlt></FaTrashAlt>
                          </span>
                        </button>
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Toaster></Toaster>
      </div>
    </section>
  );
};

export default Allusers;
