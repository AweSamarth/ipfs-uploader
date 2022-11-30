import '../styles/globals.css'
import { ChainId, ThirdwebProvider, useAddress, useNetworkMismatch, useNetwork } from '@thirdweb-dev/react';
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
  <Component {...pageProps} />
  </ThirdwebProvider>

  )
}
export default MyApp
