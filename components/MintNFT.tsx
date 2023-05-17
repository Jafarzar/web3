import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { ABI } from "../abi";
import { goerli } from "viem/chains";

const MintNFT = () => {
  const { config } = usePrepareContractWrite({
    address: "0x3f228cBceC3aD130c45D21664f2C7f5b23130d23",
    abi: ABI,
    functionName: "mint",
    args: [BigInt(1)],
    chainId: goerli.id,
  });
  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
    chainId: goerli.id,
  });

  return (
    <Center h={125} flexDirection="column" gap={2}>
      <Button
        disabled={!write || isLoading}
        onClick={() => write?.()}
        h="min-content"
        px={3}
        py={1}
        borderRadius={999}
        bg="yellow.400"
        textColor="yellow.700"
        border="2px"
        borderColor="yellow.800"
        _hover={{ bg: "yellow.200" }}
      >
        {isLoading ? "Minting..." : "Mint NFT"}
      </Button>

      {isSuccess && (
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={2}
          fontSize="sm"
          fontWeight="bold"
        >
          <GridItem
            bg="yellow.400"
            color="yellow.700"
            px={4}
            py={2}
            borderRadius={8}
          >
            <Stack direction="column" textAlign="left" spacing={0}>
              <Text>Successfully minted!</Text>
              <Text lineHeight="shorter">
                <Link
                  opacity={0.7}
                  fontSize="xs"
                  fontFamily="sans-serif"
                  fontWeight="light"
                  color="gray.700"
                  href={`https://goerli.etherscan.io/tx/${data?.hash}`}
                  isExternal
                  _hover={{ opacity: 1, textDecor: "underline" }}
                >
                  Transaction Details.
                </Link>
              </Text>
            </Stack>
          </GridItem>
          <GridItem
            bg="yellow.400"
            color="yellow.700"
            px={4}
            py={2}
            borderRadius={8}
          >
            <Stack direction="column" justify="center" textAlign="center">
              <Text fontSize="xs">you have minted:</Text>
              <Text>2 times</Text>
            </Stack>
          </GridItem>
        </Grid>
      )}
    </Center>
  );
};

export default MintNFT;
