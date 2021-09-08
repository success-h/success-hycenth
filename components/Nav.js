import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import { useColorMode, Button, Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import NavContainer from "./NavContainer";
const Nav = () => {
  const { colorMode } = useColorMode();
  const [display, changeDisplay] = useState("none");

  const bgColor = {
    light: "white",
    dark: "#171717",
  };

  const color = {
    light: "black",
    dark: "white",
  };
  const iconColor = {
    light: "black",
    dark: "white",
  };

  const navHoverBg = {
    light: "gray.200",
    dark: "gray.600",
  };

  return (
    <NavContainer pos="relative" height="auto">
      <DarkModeSwitch />
      <Flex align="center">
        <Flex color={color[colorMode]}>
          <Link href="/" passHref>
            <Button
              color={color[colorMode]}
              as="a"
              variant="ghost"
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Home
            </Button>
          </Link>
          <Link href="/blog" passHref>
            <Button
              as="a"
              variant="none"
              p={[1, 2, 3]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Blog
            </Button>
          </Link>
          <Link href="/projects" passHref>
            <Button
              as="a"
              variant="none"
              p={[1, 2, 3]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Projects
            </Button>
          </Link>
          <Link href="/about" passHref>
            <Button
              as="a"
              variant="none"
              p={[1, 2, 3]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              About
            </Button>
          </Link>
        </Flex>
      </Flex>
    </NavContainer>
  );
};

export default Nav;
