import {
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  Text,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { TfiWallet } from "react-icons/tfi";
import { MdLogout } from "react-icons/md";

import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";

type Props = {};

const MainBox = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { address, connector, isConnected } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ address });
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  const toast = useToast();

  const truncatedAddress =
    address?.slice(0, 5) +
    "..." +
    address?.slice(address?.length - 5, address?.length);

  if (isConnected) {
    console.log(ensName, ensAvatar, address);
    return (
      <VStack h="100vh" justify="center">
        <Center bg="yellow.700" w={600} h={300} position="relative">
          <Stack direction="row" spacing={2} justify="center" align="center">
            <VStack spacing={4} p={6}>
              <Center w={140} h={100} bg="yellow.400" textColor="yellow.700">
                <Avatar
                  size="lg"
                  src={ensAvatar ? ensAvatar : ""}
                  bg="yellow.700"
                />
              </Center>

              <Text
                bg="yellow.400"
                textColor="yellow.700"
                fontWeight="bold"
                py={2}
                px={4}
              >
                {ensName
                  ? `${ensName} (${truncatedAddress})`
                  : truncatedAddress}
              </Text>
            </VStack>
          </Stack>

          <Button
            colorScheme="red"
            p={0}
            w="min-content"
            h={8}
            position="absolute"
            top="2"
            right="2"
            onClick={() => disconnect()}
          >
            <Icon as={MdLogout} boxSize={4} />
          </Button>
        </Center>
      </VStack>
    );
  }

  return (
    <VStack h="100vh" justify="center" textColor="yellow.400">
      <Center bg="yellow.700" w={600} h={300}>
        <Stack direction="row" spacing={2} justify="center" align="center">
          <VStack spacing={4} p={6}>
            <Center w={140} h={100} bg="yellow.400" textColor="yellow.700">
              {isLoading ? (
                <Spinner
                  size="lg"
                  thickness="4px"
                  speed="0.8s"
                  emptyColor="yellow.200"
                />
              ) : (
                <Icon as={TfiWallet} boxSize={14} />
              )}
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

            {error &&
              toast({
                description: error?.message,
                duration: 1000,
                status: "error",
              })}
          </VStack>
          {isLoading && (
            <Center w={300}>
              <Heading>Welcome!</Heading>
            </Center>
          )}
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
              {connectors.map((connector) => {
                const logo = (() => {
                  switch (connector.id) {
                    case "metaMask":
                      return "/svg/metamask.svg";

                    case "walletConnect":
                      return "/svg/wc.svg";

                    default:
                      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqXs2Xz5LL25i7IjJ2-KlGYqaHP1GYVPWMx1M-RsegqiNQ73jf7qzMHNAncvpaY0iCNE&usqp=CAU";
                  }
                })();

                const connectHandler = () => {
                  connect({ connector });
                  onClose();
                };

                return (
                  <Button
                    w="full"
                    h="min-content"
                    py={4}
                    bg="transparent"
                    borderRadius={0}
                    disabled={!connector.ready}
                    key={connector.id}
                    onClick={connectHandler}
                    _hover={{ bg: "#4d2c0c" }}
                    alignContent="center"
                  >
                    <Box position="relative" w={34} h={34}>
                      <Image src={logo} alt={connector.id} fill />
                    </Box>
                    <Heading size="lg" ml={4}>
                      {connector.name}
                    </Heading>
                    {!connector.ready && <Text>(unsupported)</Text>}
                  </Button>
                );
              })}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default MainBox;
