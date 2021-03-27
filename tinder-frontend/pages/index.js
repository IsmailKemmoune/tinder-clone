import React from "react";
import { Header } from "../components/Header";
import { Cards } from "../components/Cards";
import { Swipe } from "../components/Swipe";
import { VStack, Flex, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      backgroundImage="linear-gradient(315deg, #f9c1b1 0%, #fb8085 74%)"
      bgColor="#f9c1b1;"
      w="100%"
      h="100vh"
      overflow="hidden"
    >
      <Box
        bgColor="white"
        px="100px"
        py="40px"
        borderWidth="1px"
        borderRadius="40px"
        w="700px"
        h="900px"
        borderWidth="8px"
        borderColor="pink"
        boxShadow=" 0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)"
      >
        <VStack>
          <Header />
          <Cards />
          <Swipe />
        </VStack>
      </Box>
    </Flex>
  );
}
