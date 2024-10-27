/* eslint-disable no-unused-vars */
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
    VStack
} from "@chakra-ui/react";
import { getText } from "../language";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const BurslarAccordion = () => {
    const { selectedLanguage, selectedFlag, changeLanguage } = useContext(LanguageContext)

    return (
        <Accordion allowToggle>
            <AccordionItem>
                <AccordionButton className="border-t border-b p-3 text-[20px]">
                    <Box flex="1" textAlign="left" fontWeight="bold">
                        {getText("burslarPageAccordionTitle")}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <Text className="text-[20px] py-4 font-[600]">
                        {getText("burslarPageAccordionTitleIn")}
                    </Text>
                    <VStack spacing={4} align="start" mt={4}>
                        <Text fontWeight="bold">{getText("burslarPageAccordionSectionTitle1")}</Text>
                        <Text>
                            {getText("burslarPageAccordionSectionP1")}
                        </Text>

                        <Text fontWeight="bold">{getText("burslarPageAccordionSectionTitle2")}</Text>
                        <Text>
                            {getText("burslarPageAccordionSectionList2Title1")}
                        </Text>
                        <VStack spacing={2} align="start" pl={6}>
                            <ul className="list-inside">
                                <li className="list-disc ml-10"><Text>{getText("burslarPageAccordionSectionList2P1")}</Text></li>
                                <li className="list-disc ml-10"><Text>{getText("burslarPageAccordionSectionList2P2")}</Text></li>
                                <li className="list-disc ml-10"><Text>{getText("burslarPageAccordionSectionList2P3")}</Text></li>
                            </ul>
                        </VStack>

                        <Text fontWeight="bold">{getText("burslarPageAccordionSectionTitle3")}</Text>
                        <Text>
                            {getText("burslarPageAccordionSectionP3")}
                        </Text>

                        <Text fontWeight="bold">{getText("burslarPageAccordionSectionTitle4")}</Text>
                        <Text>
                            {getText("burslarPageAccordionSectionP4")}
                        </Text>

                        <Text fontWeight="bold">{getText("burslarPageAccordionSectionTitle5")}</Text>
                        <Text>
                            {getText("burslarPageAccordionSectionP5")}
                        </Text>

                        <Text fontWeight="bold">{getText("burslarPageAccordionSectionTitle6")}</Text>
                        <Text>
                            {getText("burslarPageAccordionSectionP6")}
                        </Text>
                    </VStack>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default BurslarAccordion;
