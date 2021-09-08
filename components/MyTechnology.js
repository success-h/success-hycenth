import React from "react";
import {
  Heading,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Link,
  useColorMode,
} from "@chakra-ui/react";

const MyTechnology = () => {
  const { colorMode } = useColorMode();

  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  const linkColor = {
    light: "blue.400",
    dark: "blue.600",
  };

  return (
    <>
      <Heading
        letterSpacing="tight"
        mt={8}
        mb={2}
        p={8}
        size="lg"
        fontWeight={700}
        as="h2"
      >
        Technology & Stacks
      </Heading>
      <Text color={colorSecondary[colorMode]} mb={4} align="center">
        These are the technologies and stacks I have experience with.
      </Text>
      <Table variant="simple" p={15}>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody align="center">
          <Tr>
            <Td>
              <Link
                href="https://www.w3schools.com/html/"
                color={linkColor[colorMode]}
                isExternal
              >
                HTML
              </Link>
            </Td>

            <Td>3years of experience</Td>
          </Tr>
          <Tr>
            <Td>
              <Link
                href="https://www.w3schools.com/css/"
                color={linkColor[colorMode]}
                isExternal
              >
                CSS
              </Link>
            </Td>

            <Td>3years of experience</Td>
          </Tr>
          <Tr>
            <Td>
              <Link
                href="https://chakra-ui.com"
                color={linkColor[colorMode]}
                isExternal
              >
                JavaScript
              </Link>
            </Td>

            <Td>2years+ learning experience in JavaScript</Td>
          </Tr>
          <Tr>
            <Td>
              <Link
                href="https://www.w3schools.com/js/"
                color={linkColor[colorMode]}
                isExternal
              >
                Python (Entry Level)
              </Link>
            </Td>

            <Td>(Entry Level)basic python</Td>
          </Tr>

          <Text fontSize="25px">Frameworks</Text>

          <Tr>
            <Td>
              <Link
                href="https://www.reactjs.org"
                color={linkColor[colorMode]}
                isExternal
              >
                React.js
              </Link>
            </Td>

            <Td>
              My favorite JavaScript framework for building responsive and
              interactive applications
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Link
                href="https://www.nextjs.org"
                color={linkColor[colorMode]}
                isExternal
              >
                Next.js
              </Link>
            </Td>

            <Td>1yr+ learning experience</Td>
          </Tr>
          <Tr>
            <Td>
              <Link
                href="https://www.djangoproject.com/"
                color={linkColor[colorMode]}
                isExternal
              >
                Django (Entry Level)
              </Link>
            </Td>

            <Td>(Entry Level)basic Django</Td>
          </Tr>
          <Tr>
            <Td>
              <Link
                href="https://firebase.google.com/"
                color={linkColor[colorMode]}
                isExternal
              >
                Firebase
              </Link>
            </Td>

            <Td>1yr experience</Td>
          </Tr>

          <Text fontSize="23px">CSS Libraries</Text>

          <Tr>
            <Td>
              <Link
                href="https://firebase.google.com/"
                color={linkColor[colorMode]}
                isExternal
              >
                SASS
              </Link>
            </Td>
          </Tr>

          <Tr>
            <Td>
              <Link
                href="https://www.framer.com"
                color={linkColor[colorMode]}
                isExternal
              >
                Framer Motion
              </Link>
            </Td>
          </Tr>

          <Tr>
            <Td>
              <Link
                href="http://chakra-ui.com/"
                color={linkColor[colorMode]}
                isExternal
              >
                Chakra UI
              </Link>
            </Td>
          </Tr>

          <Tr>
            <Td>
              <Link
                href="http://nature-ui.com/"
                color={linkColor[colorMode]}
                isExternal
              >
                Nature UI
              </Link>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Link
                href="https://www.styled-components.com"
                color={linkColor[colorMode]}
                isExternal
              >
                Styled Components
              </Link>
            </Td>
          </Tr>
        </Tbody>

        <Text color={colorSecondary[colorMode]} mb={4}></Text>
      </Table>
    </>
  );
};

export default MyTechnology;
