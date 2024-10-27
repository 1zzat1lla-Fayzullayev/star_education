/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { getText } from "../language";
import Wrapper from "../layout/wrapper";

function Scholarship() {
    const { selectedLanguage, selectedFlag, changeLanguage } = useContext(LanguageContext)

    return (
        <>
            <div
                className="pt-[150px] transition-colors duration-300 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                style={{ minHeight: "calc(100vh - 22.8rem)" }}
            >
                <Wrapper>
                    <div className="max-w-4xl p-6">
                        <h1 className="text-4xl font-bold mb-6 text-start text-blue-600 dark:text-blue-400">
                            {getText("scholarship")}
                        </h1>
                        <p className="text-lg leading-relaxed mb-4">
                            <span className="font-semibold">{getText("scholarshipP1Span1")}</span> {getText("scholarshipP1Span2")}
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            {getText('scholarshipP2')}
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            {getText("scholarshipP3")}
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            <span className="font-semibold">{getText("scholarshipEndSpan1")}</span> {getText("scholarshipEndSpan2")}
                        </p>
                    </div>
                </Wrapper>
            </div>
        </>
    );
}

export default Scholarship;
