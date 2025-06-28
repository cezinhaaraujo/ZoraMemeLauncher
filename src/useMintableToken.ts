import { useWallets } from '@privy-io/react-auth';
import { ethers } from 'ethers';
import { MINTABLE_TOKEN_ADDRESS, MINTABLE_TOKEN_ABI } from './mintableToken';

// Zora and Zora Sepolia chain info
export const CHAIN_CONFIGS = {
  sepolia: {
    chainId: 11155111,
    name: 'Sepolia',
    explorer: 'https://sepolia.etherscan.io',
  },
  zora: {
    chainId: 7777777,
    name: 'Zora',
    explorer: 'https://explorer.zora.energy',
  },
  zorasepolia: {
    chainId: 999999999,
    name: 'Zora Sepolia',
    explorer: 'https://sepolia.explorer.zora.energy',
  },
};

export function useMintableToken(chain: keyof typeof CHAIN_CONFIGS = 'zorasepolia') {
  const { wallets } = useWallets();
  const wallet = wallets[0];

  const getContract = async () => {
    if (!wallet) throw new Error('Wallet not connected');
    // Only use getEthereumProvider as wallet.ethereum does not exist
    if (!wallet.getEthereumProvider) throw new Error('Ethereum provider not found');
    const ethereum = await wallet.getEthereumProvider();
    if (!ethereum) throw new Error('Ethereum provider not found');
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    // Optionally, check chainId and prompt user to switch
    const network = await provider.getNetwork();
    if (Number(network.chainId) !== CHAIN_CONFIGS[chain].chainId) {
      throw new Error(`Please switch your wallet to the ${CHAIN_CONFIGS[chain].name} network.`);
    }
    return new ethers.Contract(MINTABLE_TOKEN_ADDRESS, MINTABLE_TOKEN_ABI, signer);
  };

  const mint = async (to: string, amount: string) => {
    const contract = await getContract();
    const tx = await contract.mint(to, ethers.parseUnits(amount, 18));
    await tx.wait();
    return tx.hash;
  };

  return { mint };
}
