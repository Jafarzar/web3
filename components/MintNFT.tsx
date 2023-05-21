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
  Address,
  useContractRead,
  useAccount,
} from "wagmi";
import { ABI } from "@/abi";
import { goerli } from "viem/chains";
import MintBalance from "./MintBalance";

const MintNFT = () => {
  const { address } = useAccount();

  const { refetch } = useContractRead({
    address: "0x3f228cBceC3aD130c45D21664f2C7f5b23130d23",
    abi: ABI,
    functionName: "balanceOf",
    args: [address!],
    chainId: goerli.id,
  });

  const { config } = usePrepareContractWrite({
    address: "0x3f228cBceC3aD130c45D21664f2C7f5b23130d23",
    abi: ABI,
    functionName: "mint",
    args: [BigInt(1)],
    chainId: goerli.id,
  });
  const { data, write, status } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
    chainId: goerli.id,
    onSuccess: () => refetch(),
  });

  return (
    <Center h={125} flexDirection="column" gap={4}>
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
          {isSuccess ? (
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
          ) : (
            <Center h="full">Welcome!</Center>
          )}
        </GridItem>
        <GridItem
          bg="yellow.400"
          color="yellow.700"
          px={4}
          py={2}
          borderRadius={8}
        >
          <MintBalance />
        </GridItem>
      </Grid>

      <Button
        disabled={!write || isLoading || status === "loading"}
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
        {(status === "idle" ||
          status === "error" ||
          (status === "success" && !isLoading)) &&
          "Mint NFT"}
        {status === "loading" && "On approval"}
        {isLoading && "Minting..."}
      </Button>
    </Center>
  );
};

export default MintNFT;
