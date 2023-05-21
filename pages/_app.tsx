import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/pacifico";
import "@fontsource/inter";
import "@fontsource/inconsolata";

import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { goerli } from "wagmi/chains";
import { ClientOnly } from "@/components/Mount";

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [goerli],
  [publicProvider()]
);

// Set up client
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),

    // new WalletConnectConnector({
    //   chains,
    //   options: {
    //     projectId: "6df05069cdc853726e882f83e11e70f0",
    //     showQrModal: true,
    //   },
    // }),
  ],
  publicClient,
  webSocketPublicClient,
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
    body: "Inconsolata",
    heading: "Inconsolata",
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <ChakraProvider theme={theme}>
        <ClientOnly>
          <Component {...pageProps} />
        </ClientOnly>
      </ChakraProvider>
    </WagmiConfig>
  );
}
