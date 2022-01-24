import React from "react";
import { Container, Flex, Heading, Text } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Flex w="100%">
      <Container py="64px">
        <Heading color="#000">
          Increase your productivity
          <br />
          Make your app in minutes{" "}
        </Heading>
        <Text mt="16px" color="gray.600" fontSize="26px">
          Your FullStack React App
        </Text>
      </Container>
    </Flex>
  );
};
