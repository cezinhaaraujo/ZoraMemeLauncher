"use client";

import { PrivyProvider, usePrivy } from "@privy-io/react-auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function ConnectPage() {
  const { ready, authenticated, login } = usePrivy();
  const router = useRouter();

  useEffect(() => {
    if (ready && authenticated) {
      router.replace("/factory");
    }
  }, [ready, authenticated, router]);

  if (!ready)
    return (
      <div className="flex h-screen items-center justify-center">Loading...</div>
    );
  return (
    <div className="flex h-screen items-center justify-center">
      <button
        onClick={login}
        className="btn text-lg px-8 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Connect Wallet
      </button>
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

export default function Home() {
  return (
    <PrivyProvider appId="cmcafqaw5018el20m3ssr75qw" >
      <GlobalMenu />
      <ConnectPage />
    </PrivyProvider>
  );
}
