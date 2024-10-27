/* eslint-disable no-unused-vars */
import Wrapper from "../layout/wrapper";
import { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LanguageContext } from "../context/LanguageContext";
import { getText } from "../language";

function Cards() {
    const { selectedLanguage, selectedFlag, changeLanguage } = useContext(LanguageContext)

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Wrapper>
            <div className="cards py-10 flex items-stretch flex-wrap justify-between gap-2 xl:gap-5">
                {/* Card 1 */}
                <div
                    className="card p-5 rounded-2xl relative w-1/3 md:w-1/5 flex-grow dark:bg-[#f8f9fa1a] dark:bg-opacity-10 bg-[#f7f7f7] transition-colors duration-300 group text-center"
                    data-aos="fade-up"
                    data-aos-duration="500"
                >
                    {/* <div className="card-icon">
                        <div className="dark:bg-white bg-black w-3 h-3 lg:w-4 lg:h-4 rounded-full ml-auto" />
                    </div> */}
                    <p className="card-title font-medium text-3xl md:text-4xl xl:text-[2.7rem] dark:text-white text-mainBlue">
                    110+
                    </p>
                    <p className="card-text opacity-50 text-base xl:text-lg mt-1 dark:text-white text-mainBlue">
                        {getText("card1Paragraph")}
                    </p>    
                </div>

                {/* Card 2 */}
                <div
                    className="card p-5 rounded-2xl relative w-1/3 md:w-1/5 flex-grow dark:bg-[#f8f9fa1a] dark:bg-opacity-10 bg-[#f7f7f7] transition-colors duration-300 group text-center"
                    data-aos="fade-up"
                    data-aos-duration="500"
                >
                    {/* <div className="card-icon">
                        <div className="dark:bg-white bg-black w-3 h-3 lg:w-4 lg:h-4 rounded-full ml-auto" />
                    </div> */}
                    <p className="card-title font-medium text-3xl md:text-4xl xl:text-[2.7rem] dark:text-white text-mainBlue">
                    1000+
                    </p>
                    <p className="card-text opacity-50 text-base xl:text-lg mt-1 dark:text-white text-mainBlue">
                    {getText("card2Paragraph")}
                    </p>
                </div>

                {/* Card 3 */}
                <div
                    className="card p-5 rounded-2xl relative w-1/3 md:w-1/5 flex-grow dark:bg-[#f8f9fa1a] dark:bg-opacity-10 bg-[#f7f7f7] transition-colors duration-300 group text-center"
                    data-aos="fade-up"
                    data-aos-duration="500"
                >
                    {/* <div className="card-icon">
                        <div className="dark:bg-white bg-black w-3 h-3 lg:w-4 lg:h-4 rounded-full ml-auto" />
                    </div> */}
                    <p className="card-title font-medium text-3xl md:text-4xl xl:text-[2.7rem] dark:text-white text-mainBlue">
                        14+
                    </p>
                    <p className="card-text opacity-50 text-base xl:text-lg mt-1 dark:text-white text-mainBlue">
                    {getText("card3Paragraph")}
                    </p>
                </div>

                {/* Card 4 */}
                <div
                    className="card p-5 rounded-2xl relative w-1/3 md:w-1/5 flex-grow dark:bg-[#f8f9fa1a] dark:bg-opacity-10 bg-[#f7f7f7] transition-colors duration-300 group text-center"
                    data-aos="fade-up"
                    data-aos-duration="500"
                >
                    {/* <div className="card-icon">
                        <div className="dark:bg-white bg-black w-3 h-3 lg:w-4 lg:h-4 rounded-full ml-auto" />
                    </div> */}
                    <p className="card-title font-medium text-3xl md:text-4xl xl:text-[2.7rem] dark:text-white text-mainBlue">
                    240+
                    </p>
                    <p className="card-text opacity-50 text-base xl:text-lg mt-1 dark:text-white text-mainBlue">
                    {getText("card4Paragraph")}
                    </p>
                </div>
            </div>
        </Wrapper>
    );
}

export default Cards;
