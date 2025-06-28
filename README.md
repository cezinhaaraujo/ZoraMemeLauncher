# Web3 ERC-20 Minting dApp Monorepo

This project is a monorepo containing:
- **Frontend**: Next.js (TypeScript, Tailwind CSS) app for minting ERC-20 tokens and connecting wallets via Privy.
- **Smart Contracts**: Hardhat-based Solidity contracts in the `contracts` folder, using OpenZeppelin for ERC-20 minting.

## Structure
- `/` - Next.js frontend
- `/contracts` - Hardhat smart contracts

## Getting Started

### Frontend
```bash
npm install
npm run dev
```

### Contracts
```bash
cd contracts
npm install
npx hardhat compile
```

## Features
- Mint ERC-20 tokens from the frontend
- Privy wallet connection
- Secure, upgradeable contract patterns

---

Replace placeholder values and follow best practices for deployment and environment management.
