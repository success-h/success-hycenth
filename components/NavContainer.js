import React from "react";
import { Flex, useColorMode } from "@chakra-ui/react";

const NavContainer = ({ children }) => {
  const { colorMode } = useColorMode();

  const color = {
    light: "black",
    dark: "white",
  };

  return (
    <Flex
      backdropFilter="saturate(180%) blur(20px)"
      position="sticky"
      zindex={120}
      top="0"
      transition="height 0.5s, line-height 0.5s"
      flexDir="row"
      justify="space-between"
      align="center"
      maxWidth="800px"
      color={color[colorMode]}
      width="100%"
      as="nav"
      px={[2, 6, 6]}
      py={2}
      mt={5}
      mb={[2, 6, 6]}
      mx="auto"
      mt={[4, 8, 8]}
      overflowX="hidden"
      overflowY="hidden"
    >
      {children}
    </Flex>
  );
};

export default NavContainer;
