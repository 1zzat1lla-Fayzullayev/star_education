/* eslint-disable no-unused-vars */
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react"
import { getText } from "../language"
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

function AccordionUI() {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  return (
    <div className="mt-[50px]">
      <Accordion allowToggle>
        <AccordionItem className="border-gray-300 rounded-lg shadow-sm mb-4">
          <h2>
            <AccordionButton className="flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 dark:bg-[#f8f9fa1a] transition duration-200 ease-in-out rounded-lg">
              <Box as='span' flex='1' textAlign='left' className="text-[20px] font-[600] text-gray-800 dark:text-white">
                {getText("faqQuestion1Title")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel className="text-[18px] pb-4 pt-4 text-gray-700">
            <ul className="space-y-4 ">
              <li className="p-2 transition list-decimal duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faqQuestion1Q1Title")}</h3>
                <p className="text-gray-600">{getText("faqQuestion1Q1Paragraph")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faqQuestion2Q2Title")}</h3>
                <p className="text-gray-600">{getText("faqQuestion2Q2Paragraph")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faqQuestion3Q3Title")}</h3>
                <p className="text-gray-600">{getText("faqQuestion3Q3Paragraph")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faqQuestion4Q4Title")}</h3>
                <p className="text-gray-600">{getText("faqQuestion4Q4Paragraph")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faqQuestion5Q5Title")}</h3>
                <p className="text-gray-600">{getText("faqQuestion5Q5Paragraph")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faqQuestion6Q6Title")}</h3>
                <p className="text-gray-600">{getText("faqQuestion6Q6Paragraph")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faqQuestion7Q7Title")}</h3>
                <p className="text-gray-600">{getText("faqQuestion7Q7Paragraph")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faqQuestion8Q8Title")}</h3>
                <p className="text-gray-600">{getText("faqQuestion8Q8Paragraph")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faqQuestion9Q9Title")}</h3>
                <p className="text-gray-600">{getText("faqQuestion9Q9Paragraph")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faqQuestion10Q10Title")}</h3>
                <p className="text-gray-600">{getText("faqQuestion10Q10Paragraph")}</p>
              </li>
            </ul>
          </AccordionPanel>

        </AccordionItem>

        <AccordionItem className="border-gray-300 rounded-lg shadow-sm mb-4">
          <h2>
            <AccordionButton className="flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 dark:bg-[#f8f9fa1a] transition duration-200 ease-in-out rounded-lg">
              <Box as='span' flex='1' textAlign='left' className="text-[20px] font-[600] text-gray-800 dark:text-white">
                {getText("faq2QuestionTitle")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel className="text-[18px] pb-4 pt-4 text-gray-700">
            <ul className="space-y-4 ">
              <li className="p-2 transition list-decimal duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question1Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question1Q1Title")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question2Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question2Q1Title")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question3Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question3Q1Title")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question4Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question4Q1Title")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question5Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question5Q1Title")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question6Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question6Q1Title")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question7Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question7Q1Title")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question8Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question8Q1Title")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question9Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question9Q1Title")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question10Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question10Q1Title")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question11Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question11Q1Title")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question12Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question12Q1Title")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question13Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question13Q1Title")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question14Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question14Q1Title")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question15Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question15Q1Title")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question16Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question16Q1Title")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question17Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question17Q1Title")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question18Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question18Q1Title")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question19Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question19Q1Title")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question20Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question20Q1Title")}</p>
              </li>
              <li className="p-2 transition duration-200 ease-in-out hover:bg-gray-100 rounded-md dark:hover:bg-[#f8f9fa1a]">
                <h3 className="text-[20px] font-[600] text-gray-800 dark:text-white">{getText("faq2Question21Title")}</h3>
                <p className="text-gray-600">{getText("faq2Question21Q1Title")}</p>
              </li>
            </ul>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default AccordionUI;
