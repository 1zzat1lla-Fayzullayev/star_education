/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Wrapper from "../layout/wrapper";
import {
  faFacebookF,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getText } from "../language";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Footer({ theme }) {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  return (
    <div className="mt-[100px]">
      <div className="bg-[#F7F7F7] dark:bg-[#f8f9fa1a] mb-auto">
        <footer className="dark:bg-opacity-10 duration-300 w-full">
          <div className="footer-top">
            <Wrapper>
              <div className="py-6 flex flex-col sm:flex-row justify-between items-start gap-6 md:gap-12 lg:py-12">
                <div className="max-w-sm">
                  <div className="flex items-center gap-1">
                    <img
                      src={"/test_ed.png"}
                      alt="Logo"
                      className="w-[40px] lg:w-[60px] cursor-pointer"
                    />
                    <h2 className="text-[16px] md:text-[20px] uppercase font-[600]">
                      <span className="text-[#1B6593]">Star</span>{" "}
                      <span className="text-[#943122]">education</span>
                    </h2>
                  </div>
                  <p className="text-[#85888E] mt-2">
                    {getText("footerParagraph")}
                  </p>
                </div>
                <div className="sm:max-w-[12rem]">
                  <h2 className="text-[1.500rem] lg:text-[1.875rem]">
                    {getText("footerContactTitle")}
                  </h2>
                  <a
                    href="tel:+998909298801"
                    className="flex items-center gap-x-2 text-[#000] mt-2"
                  >
                    {/* <FontAwesomeIcon icon={"phone"} /> */}
                    <img src="/phone.svg" alt="" className="w-[30px]" />
                    +998 (90) 929 88 01
                  </a>
                </div>
               
              </div>
            </Wrapper>
          </div>
          <div className="footer-bottom border-t border-[#3b4155] w-full">
            <Wrapper>
              <div className="flex items-center justify-center py-6 text-center">
                <p className="text-[#85888E]">
                  Copyright © {new Date().getFullYear()}{" "}
                  <span className="uppercase">star education</span>
                </p>
              </div>
            </Wrapper>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
