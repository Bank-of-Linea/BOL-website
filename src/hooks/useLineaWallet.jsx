import { useState, useEffect } from "react";
import { ethers } from "ethers";

const NETWORKS = {
  linea: {
    chainId: "0xe708", // 59144
    chainName: "Linea Mainnet",
    rpcUrls: ["https://rpc.linea.build"],
    blockExplorerUrls: ["https://lineascan.build/"],
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  },
  base: {
    chainId: "0x2105", // 8453
    chainName: "Base Mainnet",
    rpcUrls: ["https://mainnet.base.org"],
    blockExplorerUrls: ["https://basescan.org"],
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  },
};

export const useLineaWallet = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [address, setAddress] = useState("");
  const [chainId, setChainId] = useState("");
  const [isReturningUser, setIsReturningUser] = useState(false);

  const connectWallet = async () => {
    if (!window.ethereum) return alert("MetaMask is required to connect");

    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const prov = new ethers.BrowserProvider(window.ethereum);
      const signer = await prov.getSigner();
      const network = await prov.getNetwork();

      setProvider(prov);
      setSigner(signer);
      setAddress(accounts[0]);
      setChainId(`0x${network.chainId.toString(16)}`);
      setIsReturningUser(true);
    } catch (err) {
      console.error("Connection error:", err);
      alert("Failed to connect wallet.");
    }
  };

  const switchNetwork = async (target) => {
    const network = NETWORKS[target];
    if (!network) return alert("Invalid network");

    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: network.chainId }],
      });
    } catch (error) {
      if (error.code === 4902) {
        // Not added yet
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [network],
          });
        } catch (addError) {
          console.error("Add chain error:", addError);
          return alert("Failed to add network");
        }
      } else {
        console.error("Switch chain error:", error);
        return alert("Please switch network manually.");
      }
    }

    // After switching, update provider
    const prov = new ethers.BrowserProvider(window.ethereum);
    const signer = await prov.getSigner();
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    const newNetwork = await prov.getNetwork();

    setProvider(prov);
    setSigner(signer);
    setAddress(accounts[0]);
    setChainId(`0x${newNetwork.chainId.toString(16)}`);
  };

  const disconnectWallet = () => {
    setProvider(null);
    setSigner(null);
    setAddress("");
    setChainId("");
    setIsReturningUser(false);
  };

  return {
    provider,
    signer,
    address,
    chainId,
    connectWallet,
    disconnectWallet,
    switchNetwork,
  };
};
