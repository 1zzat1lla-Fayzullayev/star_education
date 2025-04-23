import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Wrapper from "../layout/wrapper";
import Navbar_Ul from "../tools/navbar_ul";

function Navbar() {
  const [useMobile, setUseMobile] = useState(false);
  const location = useLocation();

  const handleOpenMobile = () => {
    setUseMobile(!useMobile);
  };

  useEffect(() => {
    setUseMobile(false);
  }, [location.pathname]);

  return (
    <>
      <div className="bg-[#F5F7F8] p-2 fixed top-0 left-0 w-full z-[999]">
        <Wrapper>
          <div className="flex items-center justify-between px-[20px] xl:px-0">
            <div className="flex items-center gap-2">
              <img src="/logo.png" className="w-[60px] md:w-[80px]" />
              <h2 className="text-[20px] uppercase font-semibold sm:hidden md:block">
                <span className="text-black">star</span> <span className="text-blue-500">education</span>
              </h2>
            </div>
            <Navbar_Ul mobile={false} />

            <div
              className="hamburger flex sm:hidden items-center flex-col gap-2 relative z-[1000]"
              onClick={handleOpenMobile}
            >
              <div
                className={`w-[30px] h-[2px] bg-black transition-all ease-in-out transform ${
                  useMobile ? "rotate-[45deg] translate-y-[10px]" : ""
                }`}
              ></div>
              <div
                className={`w-[30px] h-[2px] bg-black transition-all ease-in-out transform ${
                  useMobile ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-[30px] h-[2px] bg-black transition-all ease-in-out transform ${
                  useMobile ? "-rotate-[45deg] -translate-y-[10px]" : ""
                }`}
              ></div>
            </div>

            <button className="bg-[#F4CE14] hidden sm:block px-4 py-2 rounded-[5px] font-medium cursor-pointer">
              Murojaat uchun
            </button>
          </div>
        </Wrapper>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#F5F7F8] z-[998] transition-all duration-300 ease-in-out ${
          useMobile
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 -translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-between h-full px-[20px] pt-[100px] pb-[30px]">
          <div className="flex-grow flex items-center justify-center">
            <Navbar_Ul mobile={true} />
          </div>
          <div className="mt-auto">
            <button className="bg-[#F4CE14] w-full px-4 py-3 rounded-[8px] font-medium cursor-pointer shadow-md">
              Murojaat uchun
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
