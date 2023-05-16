import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { usePrepareContractWrite } from "wagmi";

const MintNFT = () => {
  const { config } = usePrepareContractWrite();
  return (
    <Box>
      <Button>Mint</Button>
    </Box>
  );
};

export default MintNFT;
