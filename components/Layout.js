import Nav from "./Nav";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import { Footer } from "./Footer";

const Layout = ({ children }) => {
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
    <>
      <Nav />
      <Flex
        as="main"
        justifyContent="center"
        flexDir="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
        overflowX="hidden"
        overflowY="hidden"
      >
        {children}
      </Flex>
      <Footer />
    </>
  );
};

export default Layout;
