/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../language";
import { LanguageContext } from "../context/LanguageContext";

function Education() {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
  return (
    <div
      className="pt-[150px] transition-colors duration-300"
      style={{ minHeight: "calc(100vh - 22.8rem)" }}
    >
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="space-y-8 px-4 md:px-6 lg:px-8 md:w-1/2">
            <h2 className="text-3xl font-bold text-mainBlue dark:text-white md:text-4xl xl:text-5xl">
              {getText("educationTitle")}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {getText("educationParagraph")}
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://media.licdn.com/dms/image/C4E12AQH3Bxq-nsSaTg/article-cover_image-shrink_600_2000/0/1568650682842?e=2147483647&v=beta&t=J3Hv1EcmrUe2Q5wtxY2VlpM6Wwg9nBDjPvdzC0b4qC4"
              alt="Education Illustration"
              className="w-full h-auto rounded-lg transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Education;
