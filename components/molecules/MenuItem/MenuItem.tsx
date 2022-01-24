import { Text } from "@chakra-ui/react";
import React from "react";

type MenuItemProps = {
  children: string | React.ReactNode;
};

export const MenuItem: React.FC<MenuItemProps> = ({ children }) => (
  <Text color="#666666" fontSize="18px">
    {children}
  </Text>
);
