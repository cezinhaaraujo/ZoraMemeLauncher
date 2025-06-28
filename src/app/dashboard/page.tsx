"use client";

import { PrivyProvider, usePrivy, useWallets } from "@privy-io/react-auth";
import { useState } from "react";
import { useMintableToken } from "../../useMintableToken";
import { useRouter } from "next/navigation";

function MintSection() {
  const { ready, authenticated } = usePrivy();
  const { wallets } = useWallets();
  const [amount, setAmount] = useState("");
  const [txHash, setTxHash] = useState("");
  const { mint } = useMintableToken();
  const router = useRouter();

  if (!ready) return <div>Loading...</div>;
  if (!authenticated) {
    router.replace("/");
    return null;
  }

  const handleMint = async () => {
    if (!wallets[0]?.address) return;
    try {
      const hash = await mint(wallets[0].address, amount);
      setTxHash(hash);
    } catch (e) {
      alert(e instanceof Error ? e.message : String(e));
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Mint Your ERC-20 Tokens</h1>
      <input
        type="number"
        placeholder="Amount to mint"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className="border px-4 py-2 rounded w-64"
      />
      <button onClick={handleMint} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Mint</button>
      {txHash && (
        <a
          href={`https://sepolia.etherscan.io/tx/${txHash}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline mt-2"
        >
          View on Etherscan
        </a>
      )}
    </div>
  );
}

function GlobalMenu() {
  const { ready, authenticated, logout } = usePrivy();
  if (!ready || !authenticated) return null;
  return (
    <div className="fixed top-4 right-6 z-50">
      <button
        onClick={logout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition shadow-lg"
      >
        Logout
      </button>
    </div>
  );
}

export default function Dashboard() {
  return (
    <PrivyProvider appId="cmcafqaw5018el20m3ssr75qw">
      <GlobalMenu />
      <MintSection />
    </PrivyProvider>
  );
}
