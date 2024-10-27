/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../language";
import { LanguageContext } from "../context/LanguageContext";

function About() {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  return (
    <div
      className="pt-[150px] transition-colors duration-300 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      style={{ minHeight: "calc(100vh - 22.8rem)" }}
    >
      <Wrapper>
        <div className="max-w-4xl p-6 rounded-lg">
          <h1 className="text-4xl font-bold mb-6 text-start text-blue-600 dark:text-blue-400">
            {getText("aboutPageTitle")}
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            {getText("aboutPagePSpan1")} <span className="font-semibold">{getText("aboutPagePSpan2")}</span> {getText("aboutPagePSpan3")}
          </p>
          <p className="text-lg leading-relaxed mb-4">
            {getText("aboutPageP2")}
          </p>
          <p className="text-lg leading-relaxed mb-4">
            {getText("aboutPageP3")}
          </p>
          <p className="text-lg leading-relaxed mb-4">
            {getText("aboutPageP4")}
          </p>
          <p className="text-lg leading-relaxed mb-4">
            <span className="font-semibold">{getText("aboutPageEndP")}</span>
          </p>
        </div>
      </Wrapper>
    </div>
  );
}

export default About;
