import { ABI } from "@/abi";
import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { goerli } from "viem/chains";
import { useAccount, useContractRead } from "wagmi";

const MintBalance = () => {
  const { address } = useAccount();

  const { data } = useContractRead({
    address: "0x3f228cBceC3aD130c45D21664f2C7f5b23130d23",
    abi: ABI,
    functionName: "balanceOf",
    args: [address!],
    chainId: goerli.id,
  });

  return (
    <Stack direction="column" justify="center" textAlign="center">
      <Text fontSize="xs">you have minted:</Text>
      <Text>{String(data)} times</Text>
    </Stack>
  );
};

export default MintBalance;
