import Head from "next/head";
import { useColorMode, Heading, Text, Flex, Stack } from "@chakra-ui/react";

import Wrapper from "../components/Wrapper";
import FeaturedProjectCard from "../components/FeatureProjects";
import TechStack from "../components/TechnologyStack";
import { motion } from "framer-motion";
import MyTechnology from "../components/MyTechnology";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <Wrapper>
        <Head>
          <link rel="icon" href="/logo.ico" />
          <title>Home - Success Hycenth</title>
        </Head>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="750px"
          px={2}
        >
          <Flex
            flexDir="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="750px"
          >
            <Heading mb={2} color={colorSecondary[colorMode]}>
              Hello 👋, I'm Success Hycenth
            </Heading>
            <Text color={colorSecondary[colorMode]}>
              Welcome to my website. I'm a Software Developer with experience in
              Web Development, UI/UX designer, technical writing
            </Text>
          </Flex>
        </Stack>
        <FeaturedProjectCard />
        <TechStack />
        <MyTechnology />
      </Wrapper>
    </motion.div>
  );
}