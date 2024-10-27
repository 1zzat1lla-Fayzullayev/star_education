/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../language";
import { LanguageContext } from "../context/LanguageContext";
import ContactUS from "../components/contactUS";

function Contact() {
  const { selectedLanguage, selectedFlag, changeLanguage } = useContext(LanguageContext);

  return (
    <div
      className="pt-[150px] transition-colors duration-300"
      style={{ minHeight: "calc(100vh - 22.8rem)" }}
    >
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center md:justify-between px-4 md:px-6 lg:px-8 space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-mainBlue dark:text-white md:text-4xl xl:text-5xl">
              {getText("contactTitle")}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4 md:text-xl xl:text-2xl">
              {getText("contactParagrf")}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://bui.co/wp-content/uploads/2022/07/Frame-1.svg"
              alt="Contact Illustration"
              className="w-full h-auto rounded-lg transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>

        <div className="mt-12">
          <ContactUS />
        </div>
      </Wrapper>
    </div>
  );
}

export default Contact;
