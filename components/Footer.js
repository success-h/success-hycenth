import NextLink from "next/link";
import { Flex, Link, IconButton, useColorMode, Text } from "@chakra-ui/react";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

export const Footer = () => {
  const { colorMode } = useColorMode();
  const borderIcon = {
    light: "gray.400",
    dark: "gray.500",
  };
  const footerHoverBg = {
    light: "gray.100",
    dark: "gray.700",
  };
  const footerColor = {
    light: "black",
    dark: "white",
  };
  return (
    <Flex
      align="center"
      mb={4}
      direction="column"
      visibility={("hidden", "visible", "visible")}
      display={["flex", "flex", "flex"]}
    >
      <div display="flex" flexDirection="column" align="center">
        <Text color={footerColor[colorMode]}>
          Looks like you've made it to the end of this page... Thanks for coming
          this far..
        </Text>
        <Link
          href="https://twitter.com/success_hycenth"
          title="Twitter"
          isExternal
        >
          <IconButton
            aria-label="Twitter"
            icon={<FiTwitter />}
            size="lg"
            color={borderIcon[colorMode]}
            variant="ghost"
            _hover={{ backgroundColor: footerHoverBg[colorMode] }}
          />
        </Link>
        <Link href="https://github.com/success-h" title="GitHub" isExternal>
          <IconButton
            aria-label="GitHub"
            icon={<FiGithub />}
            size="lg"
            color={borderIcon[colorMode]}
            variant="ghost"
            _hover={{ backgroundColor: footerHoverBg[colorMode] }}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/hycenth-success-a57556204/"
          title="LinkedIn"
          isExternal
        >
          <IconButton
            aria-label="LinkedIn"
            icon={<FiLinkedin />}
            size="lg"
            color={borderIcon[colorMode]}
            variant="ghost"
            _hover={{ backgroundColor: footerHoverBg[colorMode] }}
          />
        </Link>

        <Link href="mailto:successhycenth8gmail.com" title="Email" isExternal>
          <IconButton
            aria-label="Email"
            icon={<FiMail />}
            size="lg"
            color={borderIcon[colorMode]}
            variant="ghost"
            _hover={{ backgroundColor: footerHoverBg[colorMode] }}
          />
        </Link>
      </div>
      <div>
        <NextLink href="/about" passHref>
          <Link
            fontSize="md"
            color="gray.500"
            minWidth="100px"
            mr={2}
            title="Hello"
          >
            About Me
          </Link>
        </NextLink>
      </div>
    </Flex>
  );
};
