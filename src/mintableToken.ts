export const MINTABLE_TOKEN_ADDRESS = "0xfCAa0826f2f6Da2E3070386346a44a46bdC455d7";

export const MINTABLE_TOKEN_ABI = [
  {
    "type": "constructor",
    "inputs": [
      { "name": "name", "type": "string", "internalType": "string" },
      { "name": "symbol", "type": "string", "internalType": "string" },
      { "name": "initialOwner", "type": "address", "internalType": "address" },
      { "name": "initialSupply", "type": "uint256", "internalType": "uint256" }
    ],
    "stateMutability": "nonpayable"
  },
  { "type": "function", "name": "allowance", "inputs": [ { "name": "owner", "type": "address", "internalType": "address" }, { "name": "spender", "type": "address", "internalType": "address" } ], "outputs": [ { "name": "", "type": "uint256", "internalType": "uint256" } ], "stateMutability": "view" },
  { "type": "function", "name": "approve", "inputs": [ { "name": "spender", "type": "address", "internalType": "address" }, { "name": "value", "type": "uint256", "internalType": "uint256" } ], "outputs": [ { "name": "", "type": "bool", "internalType": "bool" } ], "stateMutability": "nonpayable" },
  { "type": "function", "name": "balanceOf", "inputs": [ { "name": "account", "type": "address", "internalType": "address" } ], "outputs": [ { "name": "", "type": "uint256", "internalType": "uint256" } ], "stateMutability": "view" },
  { "type": "function", "name": "decimals", "inputs": [], "outputs": [ { "name": "", "type": "uint8", "internalType": "uint8" } ], "stateMutability": "view" },
  { "type": "function", "name": "mint", "inputs": [ { "name": "to", "type": "address", "internalType": "address" }, { "name": "amount", "type": "uint256", "internalType": "uint256" } ], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "name", "inputs": [], "outputs": [ { "name": "", "type": "string", "internalType": "string" } ], "stateMutability": "view" },
  { "type": "function", "name": "owner", "inputs": [], "outputs": [ { "name": "", "type": "address", "internalType": "address" } ], "stateMutability": "view" },
  { "type": "function", "name": "renounceOwnership", "inputs": [], "outputs": [], "stateMutability": "nonpayable" },
  { "type": "function", "name": "symbol", "inputs": [], "outputs": [ { "name": "", "type": "string", "internalType": "string" } ], "stateMutability": "view" },
  { "type": "function", "name": "totalSupply", "inputs": [], "outputs": [ { "name": "", "type": "uint256", "internalType": "uint256" } ], "stateMutability": "view" },
  { "type": "function", "name": "transfer", "inputs": [ { "name": "to", "type": "address", "internalType": "address" }, { "name": "value", "type": "uint256", "internalType": "uint256" } ], "outputs": [ { "name": "", "type": "bool", "internalType": "bool" } ], "stateMutability": "nonpayable" },
  { "type": "function", "name": "transferFrom", "inputs": [ { "name": "from", "type": "address", "internalType": "address" }, { "name": "to", "type": "address", "internalType": "address" }, { "name": "value", "type": "uint256", "internalType": "uint256" } ], "outputs": [ { "name": "", "type": "bool", "internalType": "bool" } ], "stateMutability": "nonpayable" },
  { "type": "function", "name": "transferOwnership", "inputs": [ { "name": "newOwner", "type": "address", "internalType": "address" } ], "outputs": [], "stateMutability": "nonpayable" },
  // ...events and errors omitted for brevity...
];
