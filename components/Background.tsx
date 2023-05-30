import { Box, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

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
  {
    id: 5,
    url: "https://img.freepik.com/free-vector/polygonal-face-with-headphones_23-2147507024.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.2.952644366.1684634664",
  },
  {
    id: 6,
    url: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149629588.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.2.952644366.1684634664",
  },
  {
    id: 7,
    url: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149612188.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.2.952644366.1684634664",
  },
  {
    id: 8,
    url: "https://img.freepik.com/free-psd/3d-nft-icon-nft-art_629802-16.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.2.952644366.1684634664",
  },
  {
    id: 9,
    url: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611057.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.2.952644366.1684634664",
  },
  {
    id: 10,
    url: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611048.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.1.952644366.1684634664",
  },
  {
    id: 11,
    url: "https://img.freepik.com/free-photo/3d-render-abstract-cube-landscape-against-blue-sky-background_1048-14009.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.2.952644366.1684634664",
  },
  {
    id: 12,
    url: "https://img.freepik.com/free-photo/colorful-wolf-with-black-background_1340-39237.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.1.952644366.1684634664",
  },
  {
    id: 13,
    url: "https://img.freepik.com/free-photo/tiger-with-cyberpunk-design-illustration_826849-604.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.1.952644366.1684634664",
  },
  {
    id: 14,
    url: "https://img.freepik.com/free-vector/crazy-style-technology-illustration_52683-93863.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.1.952644366.1684634664",
  },
  {
    id: 15,
    url: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149619505.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.1.952644366.1684634664",
  },
  {
    id: 16,
    url: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622024.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.1.952644366.1684634664",
  },
  {
    id: 17,
    url: "https://img.freepik.com/free-photo/picture-with-drawing-man-s-face_1122-1031.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.1.952644366.1684634664",
  },
  {
    id: 18,
    url: "https://img.freepik.com/free-photo/digital-art-bull-with-golden-ring-its-head_1340-28775.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.1.952644366.1684634664",
  },
  {
    id: 19,
    url: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622052.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.1.952644366.1684634664",
  },
  {
    id: 20,
    url: "https://img.freepik.com/free-photo/retro-3d-shapes-vaporwave-style_23-2148981123.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.1.952644366.1684634664",
  },
  {
    id: 21,
    url: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149619499.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.1.952644366.1684634664",
  },
  {
    id: 22,
    url: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.1.952644366.1684634664",
  },
  {
    id: 23,
    url: "https://img.freepik.com/free-vector/crazy-style-technology-illustration_52683-93860.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.1.952644366.1684634664",
  },
  {
    id: 24,
    url: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=626&ext=jpg&uid=R103689682&ga=GA1.1.952644366.1684634664",
  },
];

const Background = () => {
  return (
    <Box>
      <Grid
        w={1920}
        h="full"
        left={0}
        p={4}
        gap={4}
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(5, 1fr)"
        position="absolute"
        filter="auto"
        brightness="90%"
      >
        {DUMMY_BG1.map((image) => {
          return (
            <GridItem key={image.id} h="full" w="full" position="relative">
              <Image src={image.url} alt="1" fill style={{ borderRadius: 8 }} />
            </GridItem>
          );
        })}
      </Grid>
      <Box
        w={1920}
        h="full"
        left={0}
        position="absolute"
        sx={{ boxShadow: "inset 0 0 800px black" }}
      ></Box>
    </Box>
  );
};

export default Background;
