import React from "react";
import getBalance from "./getTokenBalance";
import { useWallet, UseWalletProvider } from "use-wallet";

function App() {
  const wallet = useWallet();
  const blockNumber = wallet.getBlockNumber();

  const [mbyoldbal, setMbyoldbal] = React.useState(null);

  if (wallet.status === "connected") {
     getBalance(wallet.account).then(function (result) {
         setMbyoldbal(result);
     });
  }


  return (
    <>
      <h1>Manki ToOOooken SwAPpErrRrRrRR</h1>
      {wallet.status === "connected" ? (
        <div>
          <div>Wallet address: {wallet.account}</div>
          <div>BNB Balance: {wallet.balance / (10 ** 18)}</div>
          <div>Block Num: {wallet.getBlockNumber()}</div>
          <div>MBY Balance: {mbyoldbal / (10 ** 9)}</div>
          <button onClick={() => wallet.reset()}>
            Let me go and diskonnekt
          </button>
        </div>
      ) : (
        <div>
          Connect:
          <button onClick={() => wallet.connect()}>
            Click to connect your wallet betch
          </button>
          <button onClick={() => wallet.connect('walletconnect')}>
            WALLETCONNECT for those gay betchez
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
