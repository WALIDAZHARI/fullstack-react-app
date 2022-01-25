import { Link, Text } from "@chakra-ui/react";
import React from "react";

type MenuItemProps = {
  text: string;
  href: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({ text, href }) => (
  <Text color="whiteAlpha.900" fontSize="18px">
    <Link href={href}>
      <a>{text}</a>
    </Link>
  </Text>
);
