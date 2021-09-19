import { Flex, Button, Text, Image, Box, SimpleGrid } from "@chakra-ui/react";
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
        <SimpleGrid display="grid" columns={[1, 1, 2, 2]} gap={28} mb={8}>
          {WORKS_DATA.map((item) => (
            <Box
              w="300px"
              overflow="hidden"
              rounded="10px"
              boxShadow="md"
              boxShadow="base"
              key={item.id}
             
            >
              <Image src={item.imageUrl} h="200px" w="100%" objectFit="cover" />
              <Box pl={8} pr={8} pt={4} pb={4}>
                <Text as="h1" fontSize="xl" fontWeight="bold" pt={2}>
                  {item.name}
                </Text>
              </Box>
              <Box pr={8} pl={8} mt={-2}>
                <Text>{item.text}</Text>
              </Box>
              <Flex justify="space-between" mt={4} mb={6} pl={6} pr={6} > 
                <Link href={item.site}>
                  <Button color="teal.400" variant="solid" fontSize="10px" >
                    View Site
                  </Button>
                </Link>
                <Link href={item.source}>
                  <Button color="teal.400" variant="solid" fontSize="10px">
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
