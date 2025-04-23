import React from "react";
import Wrapper from "../layout/wrapper";

function Footer() {
  return (
    <div className="bg-[#F5F7F8] py-12 mt-16 px-[20px] xl:px-0">
      <Wrapper>
        <div className="flex md:items-start flex-col md:flex-row justify-between gap-8 px-4 md:px-0">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                className="w-[60px] md:w-[80px]"
                alt="Star Education Logo"
              />
              <h2 className="text-[20px] uppercase font-semibold sm:hidden md:block">
                <span className="text-black">star</span>{" "}
                <span className="text-blue-500">education</span>
              </h2>
            </div>
            <p className="text-[16px] font-medium text-gray-600">
              <span className="text-black uppercase">Star</span>{" "}
              <span className="text-blue-500 uppercase">Education</span> — Sizga
              eng yuqori sifatli ta'limni taklif etadi.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-[18px] font-semibold text-black">
              Tezkor havolalar
            </h3>
            <ul className="text-gray-600 space-y-2 text-center md:text-start">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Bosh sahifa
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Biz haqimizda
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-gray-600 text-sm">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="uppercase">Star Education</span>. Barcha huquqlar
            himoyalangan.
          </p>
        </div>
      </Wrapper>
    </div>
  );
}

export default Footer;
