import React from "react";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

const Wrapper = ({ children }) => {
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
      z="100vw"
      as="main"
      alignItems="center"
      display="flex"
      flexDir="column"
      flexDir="column"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      px={[0, 4, 4]}
      mt={[4, 8, 8]}
      minHeight="100vh"
      p={3}
    >
      {children}
    </Container>
  );
};

export default Wrapper;
