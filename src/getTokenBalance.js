import Web3 from "web3";

const provider = "https://bsc-dataseed.binance.org/";

const Web3Client = new Web3(new Web3.providers.HttpProvider(provider));

// let mbyOldTokenAddress = "0x98bc4773bd1e9a53631fd6028e06cd6cd17b7401";
let mbyOldTokenAddress = "0x087b005B57C286886e4c6175822929ea42832719";

// The minimum ABI required to get the ERC20 Token balance
const minABI = [
  // balanceOf
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function"
  }
];

const contract = new Web3Client.eth.Contract(minABI, mbyOldTokenAddress);

async function getBalance(walletAddress) {
  const result = await contract.methods.balanceOf(walletAddress).call();

//  const format = Web3Client.utils.fromWei(result);

  const format = result;

  console.log(format);

  return format;
}


export default getBalance;
