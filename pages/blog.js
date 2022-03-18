import React, { useState } from "react";
import Head from "next/head";
import { getAllFilesFrontMatter } from "../lib/mdx";
import BlogPost from "../components/BlogPost";
import { SearchIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

import {
  Heading,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const url = "https://successhycenth.netlify.app/blog";
const title = "Blog – Success Hycenth";
const description =
  "Personal blog for Hycenth Success, I write about web development, python automation, and more.";

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

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
      <>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDir="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            px={4}
          >
            <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
              Blog [{posts.length} posts]
            </Heading>
            <InputGroup mb={4} mr={4} w="100%">
              <Input
                aria-label="Search by title"
                placeholder="Search by title"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <InputRightElement>
                <SearchIcon color="gray.300" />
              </InputRightElement>
            </InputGroup>
            {!filteredBlogPosts.length && "No posts found :("}
            {filteredBlogPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
        </Stack>
      </>
    </motion.div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
