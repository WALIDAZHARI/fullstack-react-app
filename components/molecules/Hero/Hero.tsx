import React from "react";
import { Container, Flex, Heading, Text } from "@chakra-ui/layout";

export const Hero = () => {
  return (
    <Flex
      w="100%"
      background="linear-gradient(93.73deg, #FEAC5E 2.17%, #C779D0 47.86%, #4BC0C8 98.58%)"
    >
      <Container py="64px">
        <Heading color="#000">
          Increase your productivity
          <br />
          Make your app in minutes{" "}
        </Heading>
        <Text mt="8px" color="gray.600" fontSize="26px">
          Your FullStack React App
        </Text>
      </Container>
    </Flex>
  );
};
