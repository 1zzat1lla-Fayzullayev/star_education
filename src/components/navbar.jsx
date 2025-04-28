import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Wrapper from "../layout/wrapper";
import Navbar_Ul from "../tools/navbar_ul";
import NavbarModal from "../shared/navbarModal";

function Navbar() {
  const [useMobile, setUseMobile] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const location = useLocation();

  const handleOpenMobile = () => {
    setUseMobile(!useMobile);
  };

  const handleOpenModal = () => {
    setRegisterModal(true);
  };

  useEffect(() => {
    setUseMobile(false);
  }, [location.pathname]);

  return (
    <>
      <div className="bg-[#F5F7F8] p-2 fixed top-0 left-0 w-full z-[999]">
        <Wrapper>
          <div className="flex items-center justify-between px-[20px] xl:px-0">
            <Link to={"/"}>
              <div className="flex items-center gap-2 cursor-pointer">
                <img src="/logo.png" className="w-[60px] md:w-[80px]" />
                <h2 className="text-[20px] uppercase font-semibold sm:hidden md:block">
                  <span className="text-black">star</span>{" "}
                  <span className="text-blue-500">education</span>
                </h2>
              </div>
            </Link>
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

            <button
              className="bg-[#F4CE14] hidden sm:block px-4 py-2 rounded-[5px] font-medium cursor-pointer"
              onClick={handleOpenModal}
            >
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
            <button
              type="button"
              className="bg-[#F4CE14] w-full px-4 py-3 rounded-[8px] font-medium cursor-pointer shadow-md"
              onClick={() => {
                handleOpenModal(), setUseMobile(false);
              }}
            >
              Murojaat uchun
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}

      <div
        className={`w-full h-screen inset-0 fixed bg-[#0000008c] z-[1000] transition-all ease-in-out duration-500 ${
          registerModal
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute left-0 right-0 top-0 bottom-0 mx-auto flex flex-col justify-center items-center px-[20px] xl:px-0">
          <NavbarModal setRegisterModal={setRegisterModal} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
