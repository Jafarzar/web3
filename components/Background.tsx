import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type Props = {};

const DUMMY_BG1 = [
  {
    id: 0,
    url: "https://img.freepik.com/free-vector/abstract-flat-design-background_23-2148450082.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.2.952644366.1684634664",
  },
  {
    id: 1,
    url: "https://img.freepik.com/free-photo/various-animal-toy-figures-with-boxes-colorful-background_53876-16618.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.2.952644366.1684634664",
  },
  {
    id: 2,
    url: "https://img.freepik.com/free-vector/realistic-fantasy-illustration-dwarf-illustration_52683-95388.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.2.952644366.1684634664",
  },
  {
    id: 3,
    url: "https://img.freepik.com/free-photo/woman-with-headphones-that-has-city-it_1340-29787.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.2.952644366.1684634664",
  },
  {
    id: 4,
    url: "https://img.freepik.com/free-vector/hand-drawn-flat-design-metaverse-illustration_23-2149247523.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.2.952644366.1684634664",
  },
];

const Background = (props: Props) => {
  return (
    <VStack position="absolute" w={1920} h="full" left={0}>
      <HStack h="full" w="full">
        {DUMMY_BG1.map((image) => {
          return (
            <Box key={image.id} position="relative" w="full" h="full">
              <Image src={image.url} alt="1" fill />
            </Box>
          );
        })}
      </HStack>
      <Box bg="blue" h="full" w="full"></Box>
      <Box bg="yellow" h="full" w="full"></Box>
      <Box bg="green" h="full" w="full"></Box>
    </VStack>
  );
};

export default Background;
