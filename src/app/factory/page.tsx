"use client";

import { PrivyProvider, usePrivy, useWallets } from "@privy-io/react-auth";
import { useState } from "react";
import { Usetokenfactory, CHAIN_CONFIGS } from "../../usetokenfactory";
import { useRouter } from "next/navigation";

function MintSection() {
  const { ready, authenticated } = usePrivy();
  const { wallets } = useWallets();
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [txHash, setTxHash] = useState("");
  const { createToken } = Usetokenfactory();
  const router = useRouter();

  if (!ready) return <div>Loading...</div>;
  if (!authenticated) {
    router.replace("/");
    return null;
  }

  const handleMint = async () => {
    if (!wallets[0]?.address) return;
    try {
      const hash = await createToken(name, symbol);
      setTxHash(hash);
    } catch (e) {
      alert(e instanceof Error ? e.message : String(e));
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen  ">
      <h1 className=" text-4xl font-bold mb-4">Mint Your Meme Token</h1>
      <input
        type="text"
        placeholder="Token Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="border px-4 py-2 rounded w-64"
      />
      <input
        type="text"
        placeholder="Token Symbol"
        value={symbol}
        onChange={e => setSymbol(e.target.value)}
        className="border px-4 py-2 rounded w-64"
      />
      <button onClick={handleMint} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Create Token</button>
      {txHash && (
        <a
          href={`${CHAIN_CONFIGS.zorasepolia.explorer}/tx/${txHash}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline mt-2"
        >
          View on ZoraTestnetExplorer
        </a>
      )}
    </div>
  );
}

function GlobalMenu() {
  const { ready, authenticated } = usePrivy();
  if (!ready || !authenticated) return null;
  return (
    <div className="fixed top-4 right-6 z-50">
     
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
