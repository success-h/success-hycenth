import { useState } from "react";
import NextLink from "next/link";
import { useColorMode, Heading, Text, Flex, Box, Link } from "@chakra-ui/react";
import { parseISO, format } from "date-fns";

const BlogPost = ({ title, publishedAt, summary, slug }) => {
  const { colorMode } = useColorMode();
  const [opacity, setOpacity] = useState(0);

  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };
  const boxShadowColor = {
    light: "0px 8px 26px rgba(0, 0, 0, 0.1)",
    dark: "0px 8px 26px rgba(0, 0, 0, 0.9)",
  };

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: "none" }}>
        <Box
          mb={6}
          p={6}
          display="block"
          width="100%"
          _hover={{
            boxShadow: boxShadowColor[colorMode],
            textDecoration: "none",
          }}
          border={borderColor[colorMode]}
          onMouseOver={() => setOpacity(1)}
          onMouseLeave={() => setOpacity(0)}
          border="1px solid"
          borderColor={borderColor[colorMode]}
        >
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDir={["column", "row"]}
          >
            <Flex
              flexDir="column"
              align="flex-start"
              justifyContent="start"
              width="100%"
            >
              <Heading size="md" as="h3" mb={1} fontWeight="medium">
                {title}
              </Heading>
            </Flex>

            <Text
              color="gray.500"
              minWidth="140px"
              textAlign={["left", "right"]}
              mb={[4, 0]}
            >
              {format(parseISO(publishedAt), "MMMM dd, yyyy")}
            </Text>
          </Flex>
          <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
