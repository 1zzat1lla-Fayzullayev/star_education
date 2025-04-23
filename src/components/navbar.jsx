import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Wrapper from "../layout/wrapper";
import Navbar_Ul from "../tools/navbar_ul";

function Navbar() {
  const [useMobile, setUseMobile] = useState(false);
  const location = useLocation(); // sahifa yo‘lini kuzatamiz

  const handleOpenMobile = () => {
    setUseMobile(!useMobile);
  };

  // Sahifa o‘zgarganda menyuni avtomatik yopamiz
  useEffect(() => {
    setUseMobile(false);
  }, [location.pathname]);

  return (
    <>
      <div className="bg-[#F5F7F8] p-2 fixed top-0 left-0 w-full z-[999]">
        <Wrapper>
          <div className="flex items-center justify-between px-[20px] xl:px-0">
            <img src="/logo.png" className="w-[80px]" />
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
                  useMobile ? "opacity-0" : " "
                }`}
              ></div>
              <div
                className={`w-[30px] h-[2px] bg-black transition-all ease-in-out transform ${
                  useMobile ? "-rotate-[45deg] translate-y-[-10px]" : ""
                }`}
              ></div>
            </div>
            <button className="bg-[#F4CE14] hidden sm:block px-4 py-2 rounded-[5px] font-medium cursor-pointer">
              Murojaat uchun
            </button>
          </div>
        </Wrapper>
      </div>

      {/* Mobil menyu */}
      <div
        className={`fixed top-0 left-0 inset-0 w-full h-screen bg-[#F5F7F8] z-[998] transition-all duration-300 ease-in-out transform
        ${
          useMobile
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "-translate-x-full opacity-0 pointer-events-none"
        }
        `}
      >
        <div
          className={`fixed top-0 left-0 inset-0 w-full h-screen bg-[#F5F7F8] transition-all duration-300 ease-in-out transform z-[999] ${
            useMobile
              ? "translate-x-0 opacity-100 pointer-events-auto"
              : "-translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col justify-between h-full px-[20px] py-[30px] overflow-y-auto">
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
      </div>
    </>
  );
}

export default Navbar;
