/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../language";
import { LanguageContext } from "../context/LanguageContext";
import Accordion from "../ui/accordionUI";
import AccordionUI from "../ui/accordionUI";

function Faq() {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
  return (
    <div
      className="pt-[150px] transition-colors duration-300"
      style={{ minHeight: "calc(100vh - 22.8rem)" }}
    >
      <Wrapper>
        <div className="">
          <h2 className="text-2xl font-semibold text-mainBlue dark:text-white md:text-3xl xl:text-4xl">
            {getText("faqTitle")}
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg xl:text-xl leading-relaxed mt-4">
            {getText("faqParagraph")}
          </p>
        </div>
        <div>
          <AccordionUI />
        </div>
      </Wrapper>
    </div>
  );
}

export default Faq;
