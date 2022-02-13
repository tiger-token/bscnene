import React from "react";
import { useWallet, UseWalletProvider } from "use-wallet";

function App() {
  const wallet = useWallet();
  const blockNumber = wallet.getBlockNumber();

  return (
    <>
      <h1>Wallet</h1>
      {wallet.status === "connected" ? (
        <div>
          <div>Account: {wallet.account}</div>
          <div>Balance: {wallet.balance}</div>
          <button onClick={() => wallet.reset()}>disconnect</button>
        </div>
      ) : (
        <div>
          Connect:
          <button onClick={() => wallet.connect()}>MetaMask</button>
          <button onClick={() => wallet.connect("walletconnect")}>
            WalletConnect
          </button>
        </div>
      )}
    </>
  );
}

// Wrap everything in <UseWalletProvider />
export default () => (
  <UseWalletProvider
    chainId={56}
    connectors={{
      // This is how connectors get configured
      portis: { dAppId: "my-dapp-id-123-xyz" },
      walletconnect: {
        rpc: {
          1: "https://mainnet.infura.io/v3/a0d8c94ba9a946daa5ee149e52fa5ff1",
          4: "https://rinkeby.infura.io/v3/a0d8c94ba9a946daa5ee149e52fa5ff1",
          56: "https://bsc-dataseed.binance.org/"
        },
        bridge: "https://bridge.walletconnect.org",
        pollingInterval: 12000
      }
    }}
  >
    <App />
  </UseWalletProvider>
);
