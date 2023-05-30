import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart/useCart";

const FoodCart = ({ items, element }) => {
  const navigate = useNavigate();
  const { currentuser } = useContext(AuthContext);
  const location = useLocation();
  const [, refetch] = useCart();

  const handelCart = (items) => {
    if (currentuser && currentuser.email) {
      const { _id, name, category, image, price } = items;
      const orderedItem = {
        itemsId: _id,
        name,
        category,
        image,
        price,
        email: currentuser.email,
        quentity: 1,
      };

      fetch("http://localhost:5000/foodcart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderedItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            toast.success("Items add to your cart");
          }
        });
    } else {
      toast.success("Please login first");
      navigate("/login", { state: { from: location } });
    }
  };
  return (
    <div className="fooditems bg-[#F3F3F3] mt-10 text-center">
      <div className="foodItemsImg relative">
        <img
          className="block w-full h-[450px] object-cover"
          src={items?.image}
          alt="food img"
        />
        {element && (
          <p className="absolute bg-black text-white font-semibold px-3 py-1 top-3 right-3">
            $ {items?.price}
          </p>
        )}
      </div>
      <div className="foodItemsname p-6 space-y-4">
        <h3 className="text-2xl font-semibold">{items?.name}</h3>
        <p>{items?.recipe}</p>
        <button
          onClick={() => handelCart(items)}
          className="bg-black text-white px-8 py-3 duration-300 hover:opacity-70"
        >
          add to cart
        </button>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default FoodCart;
