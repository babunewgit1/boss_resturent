import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaCartPlus, FaTimes } from "react-icons/fa";
import logo from "../../../assets/xtra/logo.svg";
import pp from "../../../assets/xtra/pp.svg";

const Navbar = () => {
  const [bar, setBar] = useState(true);
  return (
    <section
      id="navbar"
      className="navbar fixed w-full top-0 left-0 z-10 bg-black bg-opacity-70 py-4 lg:px-10 px-4"
    >
      <div className="fulid">
        <div className="navbarWrapper lg:flex items-center justify-between">
          <div className="logo flex items-center justify-between">
            <Link to="/">
              <img className="block w-[200px]" src={logo} alt="logo images" />
            </Link>
            <div
              className="bar lg:hidden text-white"
              onClick={() => setBar(!bar)}
            >
              <div className="barsub">
                <ul className="flex items-center gap-4">
                  <li className="relative">
                    <Link to="/">
                      <span>
                        <FaCartPlus></FaCartPlus>
                      </span>
                      <span className="absolute -right-[15px] -top-[25px] flex items-end justify-center w-6 h-6 bg-orange-600 rounded-full">
                        2
                      </span>
                    </Link>
                  </li>
                  <li>
                    <div className="profilePic w-8 h-8 rounded-full border-2 border-white">
                      <img
                        className="block w-full h-full object-cover"
                        src={pp}
                        alt="profile Picture"
                      />
                    </div>
                  </li>
                  <li>
                    {bar ? (
                      <FaBars className="text-white text-3xl cursor-pointer"></FaBars>
                    ) : (
                      <FaTimes className="text-white text-3xl cursor-pointer"></FaTimes>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`menuItems py-6 lg:py-0 lg:block ${bar ? "hidden" : ""}`}
          >
            <ul className="lg:flex items-center gap-5 uppercase font-medium text-white space-y-2 lg:space-y-0">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">CONTACT us</Link>
              </li>
              <li>
                <Link to="/">DASHBOARD</Link>
              </li>
              <li>
                <Link to="/">Our Menu</Link>
              </li>
              <li>
                <Link to="/">Our Shop</Link>
              </li>
              <li className="relative hidden lg:block">
                <Link to="/">
                  <span>
                    <FaCartPlus></FaCartPlus>
                  </span>
                  <span className="absolute -right-[15px] -top-[25px] flex items-end justify-center w-6 h-6 bg-orange-600 rounded-full">
                    2
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/">SIGN OUT</Link>
              </li>
              <li className="hidden lg:block">
                <div className="profilePic w-12 h-12 rounded-full border-2 border-white">
                  <img
                    className="block w-full h-full object-cover"
                    src={pp}
                    alt="profile Picture"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
