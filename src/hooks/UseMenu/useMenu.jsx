import { useEffect, useState } from "react";

const useMenu = () => {
  const [loadMenu, setLoadMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setLoadMenu(false);
        setLoadMenu(data);
      });
  }, []);

  return [loadMenu, loading];
};

export default useMenu;
