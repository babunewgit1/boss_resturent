import React from "react";
import Navbar from "../Pages/SharedPages/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/SharedPages/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  const pathLocate =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signup");
  return (
    <div>
      {pathLocate || <Navbar></Navbar>}
      <Outlet></Outlet>
      {pathLocate || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
