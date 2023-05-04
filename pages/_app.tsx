import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import { WagmiConfig, createClient, configureChains, goerli } from "wagmi";

import { infuraProvider } from "wagmi/providers/infura";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(
  [goerli],
  [
    infuraProvider({
      apiKey: "https://goerli.infura.io/v3/e1633d05aa634a9cb8d25688dc196506",
    }),
  ]
);

// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),

    new WalletConnectConnector({
      chains,
      options: {
        projectId: "...",
      },
    }),
  ],
  provider,
  webSocketProvider,
});

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "blackAlpha.800",
      },
    }),
  },
  fonts: {
    heading: `'Darumadrop One', cursive`,
    body: `'Darumadrop One', cursive`,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </WagmiConfig>
  );
}
