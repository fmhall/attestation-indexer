import type { PonderConfig } from "@ponder/core";

export const config: PonderConfig = {
  networks: [
    { name: "optimism", chainId: 10, rpcUrl: process.env.PONDER_RPC_URL_10 },
  ],
  contracts: [
    {
      name: "Proxy",
      network: "optimism",
      abi: "./abis/Proxy.json",
      address: "0xee36eaad94d1cc1d0eccadb55c38bffb6be06c77",
      startBlock: 70949700,
      blockLimit: 10000,
    },
  ],
};
