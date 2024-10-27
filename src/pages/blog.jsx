/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../language";
import { LanguageContext } from "../context/LanguageContext";

function Blog() {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
  return (
    <div
      className="pt-[150px] transition-colors duration-300"
      style={{ minHeight: "calc(100vh - 22.8rem)" }}
    >
      <Wrapper>
        <div className="px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-mainBlue dark:text-white md:text-3xl xl:text-4xl">
            {getText("blogTitle")}
          </h2>
        </div>
      </Wrapper>
    </div>
  );
}

export default Blog;
