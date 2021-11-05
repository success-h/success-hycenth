import Head from "next/head";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Container,
  Box,
} from "@chakra-ui/react";

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
          <title>Home - Success Hycenth</title>
          <link rel="icon" href="/mylogo.svg" />
          <meta
            name="google-site-verification"
            content="XNp4jlqCYulnlfH3SDfOKDwjxg9xaKxjY4qPD5GDqDE"
          />
          <meta
            name="Success Hycenth, welcome to my portfolio website"
            content="Success Hycenth Portfolio Website"
            description="Hycenth Successs - Software developer"
          />
        </Head>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
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
        <br />

        <Text fontSize="xl" fontWeight="bold">
          Recent Projects
        </Text>
        <br />
        <FeaturedProjectCard />
        <TechStack />
        <MyTechnology />
      </Wrapper>
    </motion.div>
  );
}
