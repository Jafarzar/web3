import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type Props = {};

const MainBox = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack h="100vh" justify="center">
      <Center bg="yellow.700" w={600} h={300}>
        <Stack spacing={4}>
          <Heading>Welcome!</Heading>
          <Button onClick={onOpen}>Connect your wallet</Button>
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
