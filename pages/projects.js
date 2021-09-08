import {
  Stack,
  Flex,
  useColorMode,
  Button,
  Text,
  Badge,
  Image,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";
import Wrapper from "../components/Wrapper";
import { WORKS_DATA } from "../components/constants";
import { motion } from "framer-motion";
import Head from "next/head";

const Projects = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <Head>
        <link rel="icon" href="/logo.ico" />
        <title>Projects - Success Hycenth</title>
      </Head>
      <Wrapper>
        <SimpleGrid display="grid" columns={[1, 1, 2, 2]} gap={10} mb={8}>
          {WORKS_DATA.map((item) => (
            <Box
              w="300px"
              overflow="hidden"
              rounded="10px"
              boxShadow="md"
              boxShadow="base"
            >
              <Image src={item.imageUrl} h="200px" w="100%" objectFit="cover" />
              <Box p={5}>
                <Text as="h1" fontSize="xl" pt={2}>
                  {item.name}
                </Text>
              </Box>
              <Box pr={4} pl={4} mt={-2}>
                <Text>{item.text}</Text>
              </Box>
              <Flex justify="space-between" m={2}>
                <Link href={item.site}>
                  <Button colorScheme="teal" variant="ghost" fontSize="10px">
                    View Site
                  </Button>
                </Link>
                <Link href={item.source}>
                  <Button colorScheme="teal" variant="ghost" fontSize="10px">
                    View Source
                  </Button>
                </Link>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Wrapper>
    </motion.div>
  );
};

export default Projects;

// {WORKS_DATA.map((item) => {

// })}
