/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../language";
import { LanguageContext } from "../context/LanguageContext";

function Services() {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  return (
    <div
      className="pt-[150px]  transition-colors duration-300"
      style={{ minHeight: "calc(100vh - 22.8rem)" }}
    >
      <Wrapper>
        <div className="space-y-16 px-4 md:px-6 lg:px-8">
          {/** Service Section 1 */}
          <div className="service-card-top flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-mainBlue dark:text-white mb-4">
                {getText("servicesTitle1")}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {getText("servicesParagraph1")}
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://d37sy4vufic209.cloudfront.net/website/_next/static/dynamic/4e188c248de45dc5cfd1ee0e1275a29d/700.jpg"
                alt="Service 1"
                className="w-full h-full object-cover aspect-[4/3] rounded-[8px]"
              />
            </div>
          </div>

          {/** Service Section 2 */}
          <div className="service-card flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-mainBlue dark:text-white mb-4">
                {getText("servicesTitle2")}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {getText("servicesParagraph2")}
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://thediversitymovement.com/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-2.54.08-PM-1024x682.png"
                alt="Service 2"
                className="w-full h-full object-cover aspect-[4/3] rounded-[8px]"
              />
            </div>
          </div>

          {/** Service Section 3 */}
          <div className="service-card-top flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-mainBlue dark:text-white mb-4">
                {getText("servicesTitle3")}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {getText("servicesParagraph3")}
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://turkishonline.eu/wp-content/uploads/2017/12/preview_COLOURBOX8811286.jpg"
                alt="Service 3"
                className="w-full h-full object-cover aspect-[4/3] rounded-[8px]"
              />
            </div>
          </div>

          {/** Service Section 4 */}
          <div className="service-card flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-mainBlue dark:text-white mb-4">
                {getText("servicesTitle4")}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {getText("servicesParagraph4")}
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://ugc.futurelearn.com/uploads/images/0e/ac/regular_0eacd41d-a9de-4f3a-83d0-18cd2e670f04.jpg"
                alt="Service 4"
                className="w-full h-full object-cover aspect-[4/3] rounded-[8px]"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Services;
