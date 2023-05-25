import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import CopyRight from "../CopyRight/CopyRight";

const Footer = () => {
  return (
    <footer>
      <div className="footerWrapper grid grid-cols-2">
        <div className="footerLeft bg-[#1F2937] py-16">
          <div className="footerLeftContent max-w-[345px] mx-auto text-center text-white">
            <h3 className="text-3xl mb-4">CONTACT US</h3>
            <p>
              123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br /> Mon
              - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </div>
        <div className="footerRight bg-[#111827] py-16">
          <div className="footerRightWrapper max-w-[345px] mx-auto text-center text-white">
            <h3 className="text-3xl mb-4">Follow US</h3>
            <p>Join us on social media</p>
            <ul className="flex items-center justify-center gap-4 text-3xl mt-5">
              <li>
                <a href="#">
                  <FaFacebookF></FaFacebookF>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram></FaInstagram>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter></FaTwitter>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CopyRight></CopyRight>
    </footer>
  );
};

export default Footer;
