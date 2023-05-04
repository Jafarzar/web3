import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { TfiWallet } from "react-icons/tfi";

import { useConnect } from "wagmi";

type Props = {};

const MainBox = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  console.log(connectors);
  return (
    <VStack h="100vh" justify="center" textColor="yellow.400">
      <Center bg="yellow.700" w={600} h={300}>
        <Stack direction="row" spacing={2} justify="center" align="center">
          <VStack spacing={4} p={6}>
            <Center w={140} h={100} bg="yellow.400" textColor="yellow.700">
              <Icon as={TfiWallet} boxSize={14} />
            </Center>
            <Button
              onClick={onOpen}
              colorScheme="yellow"
              textColor="yellow.900"
              fontWeight="bold"
              borderRadius={0}
            >
              Connect your wallet
            </Button>
          </VStack>
          <Center w={300}>
            <Heading>Welcome!</Heading>
          </Center>
        </Stack>
      </Center>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          borderRadius={0}
          bg="yellow.900"
          textColor="yellow.400"
          h={280}
          w={400}
        >
          <ModalHeader borderBottom="2px" borderColor="yellow.800">
            <Stack direction="row" align="center" justify="space-between">
              <Heading size="md">Please select the wallet</Heading>
              <Button
                colorScheme="yellow"
                textColor="yellow.900"
                fontWeight="bold"
                borderRadius={0}
                onClick={onClose}
                py={1}
                px={2}
                h="min-content"
              >
                Close
              </Button>
            </Stack>
          </ModalHeader>

          <ModalBody textAlign="center" m={0} p={0}>
            <VStack justify="center" h="full" spacing={0}>
              <Button
                w="full"
                py={8}
                bg="transparent"
                borderRadius={0}
                disabled={!connectors[0].ready}
                key={connectors[0].id}
                _hover={{ bg: "#4d2c0c" }}
              >
                <Box position="relative" w={34} h={34}>
                  <Image src="/svg/metamask.svg" alt="metamask" fill />
                </Box>
                <Heading size="lg" ml={4}>
                  MetaMask
                </Heading>
              </Button>
              <Button
                w="full"
                py={8}
                bg="transparent"
                borderRadius={0}
                key={connectors[1].id}
                _hover={{ bg: "#4d2c0c" }}
              >
                <Box position="relative" w={34} h={34}>
                  <Image src="/svg/wc.svg" alt="wc" fill />
                </Box>
                <Heading size="lg" ml={4}>
                  WalletConnect
                </Heading>
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default MainBox;
