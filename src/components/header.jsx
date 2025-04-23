import React from "react";
import Wrapper from "../layout/wrapper";

function Header() {
  return (
    <>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center justify-between mt-[120px] md:mt-[80px] px-[20px] xl:px-0">
          <div className="max-w-xl">
            <h1 className="text-[25px] md:text-[30px] lg:text-[40px] md:leading-[35px] lg:leading-[45px] font-semibold mb-4">
              <span className="bg-[#F4CE14] rounded-[10px] px-[6px] py-[3px]">
                Matematikani
              </span>{" "}
              o‘rganish hech qachon bunchalik oson bo‘lmagan!
            </h1>
            <p className="text-[16px] lg:text-md text-gray-800">
              Biz bilan asoslardan murakkabgacha — qiziqarli, tushunarli va
              natijali tarzda o‘rganing. Matematikani endi oson va zavqli
              o‘rganing!
            </p>
            <button className="border-[2px] border-[#F4CE14] mt-[20px] px-4 py-2 rounded-[8px] font-medium cursor-pointer transition-all ease-in-out shadow-md hover:bg-[#F4CE14]">
              Natijalarni ko'rish
            </button>
          </div>
          <div className="flex-shrink-0">
            <img src="/header.png" />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Header;
