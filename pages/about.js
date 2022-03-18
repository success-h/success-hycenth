import React from "react";
import { NextSeo } from "next-seo";
import {
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Container,
  Box,
  Image,
} from "@chakra-ui/react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Link from "next/link";
import Wrapper from "../components/Wrapper";
import AboutWrap from "../components/AboutWrap";
import { motion } from "framer-motion";

const url = "https://successhycenth.netlify.app/about";
const title = "Success Hycenth";
const description = "I am a developer and creator. Here are some of my links.";

const Hello = () => {
  const { data } = useSWR("/api/links", fetcher);
  // const title = data?.title;
  const vid_url = data?.vid_url;
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <NextSeo
        title={title}
        description={description}
        cononical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <AboutWrap
        maxHeight="100vh"
        maxWidth="700px"
        display={["flex", "flex", "flex", "flex"]}
        zIndex={-100}
      >
        <Container>
          <Stack
            as="main"
            spacing={8}
            justifyContent="center"
            alignItems="center"
            m="0 auto 4rem auto"
            maxWidth="700px"
            px={2}
          >
            <Flex
              flexDir="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              width={["100%", "500px", "700px"]}
            >
              <Image
                name="Success Hycenth"
                src="/profile.jpg"
                borderRadius="50%"
                mr={2}
                alignSelf="center"
                my={5}
                h="200px"
                w="200px"
                objectFit="cover"
              />
              <Heading
                letterSpacing="tight"
                mb={4}
                as="h1"
                size="xl"
                alignSelf="center"
              >
                Hello 👋, I'm Success
              </Heading>
              <Text alignSelf="center" textAlign="center" mb={4}>
                Welcome to my website once again and am super excited to have
                you here, My name is Success Hycenth, I'm a Software Developer,
                a Student, UI/UX designer and a technical writer.
              </Text>
            </Flex>
            <Link href="/blog/aboutme">
              <Button>Learn More</Button>
            </Link>
          </Stack>
        </Container>
      </AboutWrap>
    </motion.div>
  );
};

export default Hello;
