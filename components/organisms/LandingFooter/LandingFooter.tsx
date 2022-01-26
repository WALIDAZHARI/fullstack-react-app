import {
  Box,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const LandingFooter = () => {
  return (
    <Box
      as="footer"
      backgroundColor="blue.500"
      py="40px"
      display="flex"
      justifyContent="center"
      //   position="absolute"
      //   bottom="0"
      //   width="100vw"
    >
      <Flex w={["100%", "100%", "100%", "90ch"]}>
        <SimpleGrid columns={2} spacing={8} w="100%">
          <Box>WalidApp 2022</Box>
          <Flex flexDirection="column">
            <Text mb="16px">Follow us on</Text>
            <HStack spacing={4}>
              <Text>Twitter</Text>
              <Text>Instagram</Text>
              <Text>Facebook</Text>
            </HStack>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
