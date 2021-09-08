import React from "react";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

const AboutWrap = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "white",
    dark: "#171717",
  };

  const color = {
    light: "black",
    dark: "white",
  };

  return (
    <Container
      as="main"
      alignItems="center"
      display="flex"
      flexDir="column"
      flexDir="column"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      px={[0, 4, 4]}
      mt={[4, 8, 8]}
      maxWidth="750px"
      minHeight="50vh"
    >
      {children}
    </Container>
  );
};

export default AboutWrap;
