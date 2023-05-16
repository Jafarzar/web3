import { Box, Button, Center, Link, Text } from "@chakra-ui/react";
import React from "react";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import ABI from "../abi.json";

const MintNFT = () => {
  const { config } = usePrepareContractWrite({
    address: "0x3f228cBceC3aD130c45D21664f2C7f5b23130d23",
    abi: ABI,
    functionName: "mint",
  });
  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <Box>
      <Button disabled={!write || isLoading} onClick={() => write?.()}>
        {isLoading ? "Minting..." : "Mint"}
      </Button>
      {isSuccess && (
        <Center>
          Successfully minted your NFT!
          <Text>
            <Link href={`https://etherscan.io/tx/${data?.hash}`}>
              Etherscan
            </Link>
          </Text>
        </Center>
      )}
    </Box>
  );
};

export default MintNFT;
