import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar_Ul({ mobile = false }) {
  const location = useLocation();

  return (
    <ul
      className={`${
        mobile
          ? "flex flex-col items-center gap-[20px] text-[20px]"
          : "hidden sm:flex items-center gap-[30px]"
      }`}
    >
      <li>
        <Link
          to="/"
          className={`relative inline-block after:block after:h-[2px] after:w-0 after:bg-[#F4CE14] after:transition-all after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 hover:after:w-full font-medium ${
            location.pathname === "/" ? "after:w-full" : ""
          }`}
        >
          Asosiy
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className={`relative inline-block after:block after:h-[2px] after:w-0 after:bg-[#F4CE14] after:transition-all after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 hover:after:w-full font-medium ${
            location.pathname === "/about" ? "after:w-full" : ""
          }`}
        >
          Biz haqimizda
        </Link>
      </li>
      <li>
        <Link
          to="/results"
          className={`relative inline-block after:block after:h-[2px] after:w-0 after:bg-[#F4CE14] after:transition-all after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 hover:after:w-full font-medium ${
            location.pathname === "/results" ? "after:w-full" : ""
          }`}
        >
          Natijalar
        </Link>
      </li>
    </ul>
  );
}

export default Navbar_Ul;
