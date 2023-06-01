import React, { useState } from "react";
import useCart from "../../../hooks/useCart/useCart";
import Heading from "../../../components/Heading/Heading";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Cart = () => {
  const [cartdata, refetch] = useCart();
  const price = cartdata.reduce((sum, items) => items.price + sum, 0);
  const [num, setNum] = useState(1);

  const handelDelete = (itemsId) => {
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
        fetch(`http://localhost:5000/foodcart/${itemsId}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((req) => req.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <section id="cartInfo">
      <Heading
        subHeading={"---My Cart---"}
        heading={"WANNA ADD MORE?"}
      ></Heading>
      <div className="cartWrapper bg-white rounded-sm p-10 mt-10">
        <div className="cartheading flex items-center justify-between">
          <h3 className="text-2xl font-medium">
            Total Items : {cartdata.length}
          </h3>
          <h3 className="text-2xl font-medium">Total price : $ {price} </h3>
          <button className="text-xl font-medium bg-[#D1A054] text-white px-4 py-2 rounded-sm">
            Pay
          </button>
        </div>
        <div className="cartTable mt-10">
          <table className="w-full text-center">
            <thead>
              <tr className="bg-[#D1A054] text-white">
                <th className="p-3">Sl No.</th>
                <th className="p-3">ITEM IMAGE</th>
                <th className="p-3">ITEM NAME</th>
                <th className="p-3">PRICE</th>
                <th className="p-3">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cartdata.map((items, index) => {
                return (
                  <tr key={items._id}>
                    <td className="py-2 border-b border-b-black">
                      <p>{index + 1}</p>
                    </td>
                    <td className="py-2 border-b border-b-black">
                      <img
                        className="block w-[100px] h-[80px] mx-auto"
                        src={items.image}
                        alt=""
                      />
                    </td>
                    <td className="py-2 border-b border-b-black">
                      $ {items.price}
                    </td>
                    <td className="py-2 border-b border-b-black">
                      {items.name}
                    </td>
                    <td className="py-2 border-b border-b-black">
                      <p className="text-center w-9 h-9 mx-auto">
                        <button
                          onClick={() => handelDelete(items._id)}
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
      </div>
    </section>
  );
};

export default Cart;
