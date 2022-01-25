import { Flex, HStack, Link, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { MenuItem } from "../../molecules/MenuItem/MenuItem";

export const TopBar = () => {
  return (
    <Flex w="100%" alignContent="center" flexDirection="row" p="8px 16px">
      <Text
        fontSize="36px"
        fontWeight="bold"
        lineHeight="42px"
        color="#1F79BA"
        flexGrow={1}
      >
        WalidApp
      </Text>
      <HStack spacing="16px" alignContent="center">
        <MenuItem text="Blog" href="/blog" />
        <MenuItem text="Product" href="/product" />
        <MenuItem text="Pricing" href="/pricing" />
      </HStack>
      <Flex marginLeft="82px">
        <Button
          variant="solid"
          color="white"
          colorScheme="blue"
          background={"blue.500"}
        >
          Get Started
        </Button>
      </Flex>
    </Flex>
  );
};
