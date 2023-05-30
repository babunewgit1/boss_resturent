import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { currentuser } = useContext(AuthContext);
  const { refetch, data: cartdata = [] } = useQuery({
    queryKey: ["foodcart", currentuser?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/foodcart?email=${currentuser?.email}`
      );
      return res.json();
    },
  });

  return [cartdata, refetch];
};

export default useCart;
