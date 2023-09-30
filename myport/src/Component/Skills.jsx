import { Box, Text, Image, Stack, Heading, Flex } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import softskillcover from "../Image/softskillcover.jpg";
import html from "../Image/html-5.png";
import css from "../Image/css.png";
import javascript from "../Image/js.png";
import react from "../Image/library.png";
import chakraui from "../Image/lotus.png";
import figma from "../Image/figma.png";
import node from "../Image/node-js.png";
import express from "../Image/express.png";
import mongo from "../Image/mongodb.png";
import post from "../Image/postman.png"
import vscode from "../Image/vscode.png"
import git from "../Image/github.png"
import net from "../Image/netlify.png"

export default function Skills() {
  return (
    <Box id="skills" p="6%" w="100%" m="auto">
      <Heading fontSize={["xl", "2xl", "3xl"]} mb="2%">
        {" "}
        Skills
      </Heading>

      <Box mt="2%" m="auto">
        <Box
          display="flex"
          w="90%"
          borderRadius="2xl"
          bg="green.100"
          m="auto"
          className="skills-card"
          id="soft-skills"
          alignItems="center"
          gap="3%"
          flexWrap="wrap"
        >
          <Image
            className="skills-card-img"
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={softskillcover}
            alt="softskills"
            w={["base", "sm", "md", "lg", "xl"]}
          />

          <Stack textAlign="left">
            <Box>
              <Text
                fontSize={["xl", "2xl", "3xl"]}
                color="black"
                fontWeight="semibold"
                className="skills-card-name"
              >
                Soft Skills
              </Text>
            </Box>

            <Box gap="2%">
              <Text fontSize={["10px", "15px", "20px"]} fontWeight="semibold">
                Communication | Public Speaking  | Mentoring / Coaching
                | Professional Empathy | Ideation
              </Text>
            </Box>
          </Stack>
        </Box>
        <Box
          w="60%"
          borderRadius="2xl"
          bg="blue.200"
          m="auto"
          className="skills-card"
          id="frontend-skills"
          alignItems="center"
          gap="3%"
          mt="2%"
          mb="2%"
        >
          <Stack textAlign="center">
            <Text
              fontSize={["xl", "2xl", "3xl"]}
              color="black"
              fontWeight="semibold"
              className="skills-card-name"
            >
              Front End{" "}
            </Text>

            <Flex
              gap="6%"
              w={["100%", "60%", "90%"]}
              h={["100px", "150px", "170px"]}
              m="auto"
              id="hero-images"
              justifyContent="space-evenly"
            >
              <Box textAlign="center" h="100%">
                <Image className="skills-card-img" h="60%" src={html}></Image>
                <Heading fontSize="xl">HTML</Heading>
              </Box>
              <Box textAlign="center" h="100%">
                <Image className="skills-card-img" h="60%" src={css}></Image>
                <Heading fontSize="xl">CSS</Heading>
              </Box>
              <Box textAlign="center" h="100%">
                <Image
                  className="skills-card-img"
                  h="60%"
                  src={javascript}
                ></Image>
                <Heading fontSize="xl">Javascript</Heading>
              </Box>
              <Box textAlign="center" h="100%">
                <Image className="skills-card-img" h="60%" src={react}></Image>
                <Heading fontSize="xl">ReactJS</Heading>
              </Box>
              <Box textAlign="center" h="100%">
                <Image
                  className="skills-card-img"
                  h="60%"
                  src={chakraui}
                ></Image>
                <Heading fontSize="xl">ChakraUI</Heading>
              </Box>
              <Box textAlign="center" h="100%">
                <Image className="skills-card-img" h="60%" src={figma}></Image>
                <Heading fontSize="xl">Figma</Heading>
              </Box>
            </Flex>
          </Stack>
        </Box>

        <Box
          w="60%"
          borderRadius="2xl"
          id="backend-skills"
          m="auto"
          bg="red.200"
          className="skills-card"
          alignItems="center"
          gap="3%"
          mt="2%"
          mb="2%"
          n
        >
          <Stack textAlign="center">
            <Text
              fontSize={["xl", "2xl", "3xl"]}
              color="black"
              fontWeight="semibold"
              className="skills-card-name"
            >
              Back End{" "}
            </Text>

            <Flex
              gap="6%"
              w={["100%", "60%", "80%"]}
              h={["100px", "150px", "200px"]}
              m="auto"
            >
              <Box
                textAlign="center"
                w={["100%", "60%", "40%"]}
                h={["100px", "150px", "200px"]}
              >
                <Image
                  className="skills-card-img"
                  h={["70px", "100px", "150px"]}
                  src={node}
                ></Image>
                <Heading fontSize="xl">NodeJS</Heading>
              </Box>
              <Box
                textAlign="center"
                w={["100%", "60%", "40%"]}
                h={["100px", "150px", "200px"]}
              >
                <Image
                  className="skills-card-img"
                  h={["70px", "100px", "150px"]}
                  src={express}
                ></Image>
                <Heading fontSize="xl">Express</Heading>
              </Box>
              <Box
                textAlign="center"
                w={["100%", "60%", "40%"]}
                h={["100px", "150px", "200px"]}
              >
                <Image
                  className="skills-card-img"
                  h={["70px", "100px", "150px"]}
                  src={mongo}
                ></Image>
                <Heading fontSize="xl">MongoDB</Heading>
              </Box>
            </Flex>
          </Stack>
        </Box>

        <Box
          w="60%"
          borderRadius="2xl"
          id="tools-card"
          m="auto"
          bg="green.200"
          className="skills-card"
          alignItems="center"
          gap="3%"
          mt="2%"
          mb="2%"
          n
        >
          <Stack textAlign="center">
            <Text
              fontSize={["xl", "2xl", "3xl"]}
              color="black"
              fontWeight="semibold"
              className="skills-card-name"
            >
              Tools{" "}
            </Text>

            <Flex
              gap="6%"
              w={["100%", "100%", "80%"]}
              h={["100px", "150px", "200px"]}
              m="auto"
            >
              <Box
                textAlign="center"
                w={["100%", "60%", "40%"]}
                h={["100px", "150px", "200px"]}
              >
                <Image
                  className="skills-card-img"
                  h={["70px", "100px", "150px"]}
                  src={post}
                ></Image>
                <Heading fontSize="xl">Postman</Heading>
              </Box>
              <Box
                textAlign="center"
                w={["100%", "60%", "40%"]}
                h={["100px", "150px", "200px"]}
              >
                <Image
                  className="skills-card-img"
                  h={["70px", "100px", "150px"]}
                  src={vscode}
                ></Image>
                <Heading fontSize="xl">Vs Code</Heading>
              </Box>
              <Box
                textAlign="center"
                w={["100%", "60%", "40%"]}
                h={["100px", "150px", "200px"]}
              >
                <Image
                  className="skills-card-img"
                  h={["70px", "100px", "150px"]}
                  src={git}
                ></Image>
                <Heading fontSize="xl">GitHub</Heading>
              </Box>
              <Box
                textAlign="center"
                w={["100%", "60%", "40%"]}
                h={["100px", "150px", "200px"]}
              >
                <Image
                  className="skills-card-img"
                  h={["70px", "100px", "150px"]}
                  src={net}
                ></Image>
                <Heading fontSize="xl">Netlify</Heading>
              </Box>
            </Flex>
          </Stack>
        </Box>
      </Box>

      <Box
        bg="teal.200"
        borderRadius="2xl"
        className="react-activity-calendar"
        id="react-cal"
        textAlign="center"
        m="auto"
        w="90%"
      >
        <Text fontSize={["xl", "2xl", "4xl"]} mb="3%" color="black">
          GitHub Statistics
        </Text>
        <Box
          mb="2%"
          borderRadius="2xl"
          p="2%"
          m="auto"
          justifyContent="center"
          overflow="hidden"
        >
          <GitHubCalendar
            style={{ margin: "auto" }}
            username="pranshushuklagithub"
          />
        </Box>

        <Box
          p="1%"
          justifyContent="left"
          w={["100%", "80%", "60%"]}
          h={["500px", "730px", "930px"]}
          m="auto"
        >
          <Image
            w="100%"
            h="30%"
            id="github-streak-stats"
            src="https://streak-stats.demolab.com?user=Sunil-JJ&theme=vue-dark&border_radius=10)(https://git.io/streak-stats)github-readme-streak-stats.herokuapp.com"
            m="auto"
            mt="2%"
          ></Image>
          <Image
            borderRadius="2%"
            w="100%"
            h="30%"
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sunil-JJ"
            m="auto"
            mt="2%"
          ></Image>
          <Image
            borderRadius="2%"
            w="100%"
            h="30%"
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=Sunil-JJ&show_icons=true&locale=en"
            m="auto"
            mt="2%"
          ></Image>
        </Box>
      </Box>
    </Box>
  );
}

// https://streak-stats.demolab.com?user=pranshushuklagithub&theme=vue-dark&border_radius=10)(https://git.io/streak-stats)' to include 'github-readme-streak-stats.herokuapp.com
