/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { getText } from "../language";
import Wrapper from "../layout/wrapper";

function Events() {
    const { selectedLanguage, selectedFlag, changeLanguage } = useContext(LanguageContext)

    return (
        <>
            <div
                className="pt-[150px] transition-colors duration-300 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                style={{ minHeight: "calc(100vh - 22.8rem)" }}
            >
                <Wrapper>
                    <div className="max-w-4xl p-6 ">
                        <h1 className="text-4xl font-bold mb-6 text-start text-purple-600 dark:text-purple-400">
                            {getText("eventsTitle")}
                        </h1>
                        <p className="text-lg leading-relaxed mb-4">
                            {getText("eventsP1")}
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            {getText("eventsP2")}
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            {getText("eventsP3")}
                        </p>
                        <p className="text-lg leading-relaxed mb-4 font-semibold">
                            {getText("eventsP4")}
                        </p>
                    </div>
                </Wrapper>
            </div>
        </>
    );
}

export default Events;
