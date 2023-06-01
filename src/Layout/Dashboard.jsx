import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/xtra/logo.svg";
import {
  FaHome,
  FaRegCalendarAlt,
  FaShoppingBasket,
  FaUtensilSpoon,
  FaListUl,
  FaRegAddressBook,
  FaUserAlt,
} from "react-icons/fa";

const Dashboard = () => {
  // TODO : set the admin form data base.
  const isAdmin = true;

  return (
    <section id="dashboard">
      <div className="dashboardWrapper grid grid-cols-12">
        <div className="dashboardLeft col-span-2 bg-[#D1A054] h-full px-6 py-10">
          <div className="drawerLef ">
            <div className="bossLogo">
              <NavLink to="/">
                <img className="block w-[200px]" src={logo} alt="logo" />
              </NavLink>
            </div>

            {isAdmin ? (
              <>
                <ul className="mt-6">
                  <li className="uppercase">
                    <NavLink
                      to="/dashboard/home"
                      className=" flex items-center gap-3 px-3 py-2"
                    >
                      <FaHome></FaHome>Admin Home
                    </NavLink>
                  </li>
                  <li className="uppercase">
                    <NavLink
                      to="/dashboard/additems"
                      className=" flex items-center gap-3 px-3 py-2"
                    >
                      <FaUtensilSpoon></FaUtensilSpoon>add items
                    </NavLink>
                  </li>
                  <li className="uppercase">
                    <NavLink
                      className=" flex items-center gap-3 px-3 py-2"
                      to="/dashboard/manageitems"
                    >
                      <FaListUl></FaListUl> manage items
                    </NavLink>
                  </li>
                  <li className="uppercase">
                    <NavLink
                      className=" flex items-center gap-3 px-3 py-2"
                      to="/dashboard/managebooking"
                    >
                      <FaRegAddressBook></FaRegAddressBook> Manage bookings
                    </NavLink>
                  </li>
                  <li className="uppercase">
                    <NavLink
                      className=" flex items-center gap-3 px-3 py-2"
                      to="/dashboard/alluser"
                    >
                      <FaUserAlt></FaUserAlt> all users
                    </NavLink>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul className="mt-6">
                  <li className="uppercase">
                    <NavLink
                      to="/dashboard/home"
                      className=" flex items-center gap-3 px-3 py-2"
                    >
                      <FaHome></FaHome>User Home
                    </NavLink>
                  </li>
                  <li className="uppercase">
                    <NavLink
                      to="/dashboard/re"
                      className=" flex items-center gap-3 px-3 py-2"
                    >
                      <FaRegCalendarAlt></FaRegCalendarAlt>reservation
                    </NavLink>
                  </li>
                  <li className="uppercase">
                    <NavLink
                      className=" flex items-center gap-3 px-3 py-2"
                      to="/dashboard/cart"
                    >
                      <FaShoppingBasket></FaShoppingBasket> payment history
                    </NavLink>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="dashboardRight col-span-10 bg-[#F6F6F6] py-14 px-32">
          <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
