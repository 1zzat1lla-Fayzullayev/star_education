/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { getText } from "../language";
import Wrapper from "../layout/wrapper";
import { Box } from "@chakra-ui/react";
import BurslarAccordion from "../ui/BurslarAccordion ";

function Burslar() {
    const { selectedLanguage, selectedFlag, changeLanguage } = useContext(LanguageContext);

    return (
        <>
            <div
                className="pt-[150px] transition-colors duration-300 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                style={{ minHeight: "calc(100vh - 22.8rem)" }}
            >
                <Wrapper>
                    <div className="max-w-4xl p-6">
                        <h1 className="text-4xl font-bold mb-6 text-start text-red-600 dark:text-red-400">
                            {getText("burslarPageTitle")}
                        </h1>
                        <p className="text-lg leading-relaxed mb-4">
                            <span className="font-semibold">{getText("burslarPageTitle")}</span>{getText("burslarPageP1")}
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            {getText("burslarPageP2")}
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            {getText("burslarPageP3")}
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            {getText("burslarPageP4")}
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            <span className="font-semibold">{getText("burslariPageEndSpan1")}</span> {getText("burslariPageEndSpan2")}
                        </p>
                    </div>
                    <Box
                        pt="10"
                        minHeight="calc(100vh - 22.8rem)"
                        bg="gray.100"
                        p={6}
                    >
                        <BurslarAccordion />
                    </Box>
                </Wrapper>
            </div>
        </>
    );
}

export default Burslar;
