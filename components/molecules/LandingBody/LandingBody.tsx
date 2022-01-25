import { Box, Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

export const LandingBody = () => (
  <Container>
    <SimpleGrid columns={2} spacing={10} p="24px">
      <Box>
        <Box
          backgroundColor="gray.400"
          width="100%"
          height="225px"
          borderRadius="16px"
        ></Box>
      </Box>
      <Flex backgroundColor="tomato" flexDirection="column">
        <Text>Including the market standard technologies</Text>
        Next.js ChakraUI Database
      </Flex>
    </SimpleGrid>
  </Container>
);
