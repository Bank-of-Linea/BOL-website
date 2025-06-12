import React, { useState, useEffect } from "react";
import { useLineaWallet } from "../hooks/useLineaWallet";
import ClaimDividends from "./components/ClaimDividends";
import AddLiquidity from "./components/AddLiquidity";
import RemoveLiquidity from "./components/RemoveLiquidity";
import BuyBase from "./components/BuyBase";
import BuyLinea from "./components/BuyLinea";

const BASE_CHAIN_ID = "0x2105"; // Base Mainnet (8453) in hex
const LINEA_CHAIN_ID = "0xe708"; // Linea Mainnet (59144) in hex

const LiquidityManager = () => {
  const {
  provider,
  signer,
  address,
  connectWallet,
  disconnectWallet,
  switchNetwork,
} = useLineaWallet();
  const [action, setAction] = useState("");
  const [chainId, setChainId] = useState("");
  
  useEffect(() => {
    if (provider) {
      provider.getNetwork().then((network) => {
        setChainId(`0x${network.chainId.toString(16)}`);
      });

      // Listen for chain changes
      window.ethereum?.on("chainChanged", (newChainId) => {
        setChainId(newChainId);
      });
    }
  }, [provider]);

  const needsSwitchToBase = action === "buy-base" && chainId !== BASE_CHAIN_ID;
  const needsSwitchToLinea = action !== "buy-base" && chainId !== LINEA_CHAIN_ID;
  const shouldShowSwitch =
    (action === "buy-base" && needsSwitchToBase) || (action !== "buy-base" && needsSwitchToLinea);

  return (
    <div className="bg-primary min-h-screen flex items-center justify-center px-4">
      <div className="p-6 max-w-xl w-full shadow-lg rounded-xl bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          🦏 Rhino Manager
        </h2>

        {!address ? (
          <button
            onClick={connectWallet}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Connect Wallet
          </button>
        ) : (
          <div className="space-y-4">
            <p className="text-green-700 text-center font-medium">
              Connected: {address.slice(0, 6)}...{address.slice(-4)}
            </p>

            <button
              onClick={disconnectWallet}
              className="w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
            >
              Disconnect Wallet
            </button>

            <div>
              <label className="block font-semibold mb-2">Select Action:</label>
              <select
                value={action}
                onChange={(e) => setAction(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="">-- Select --</option>
                <option value="claim">Claim Dividends</option>
                <option value="add">Add Liquidity</option>
                <option value="remove">Remove Liquidity</option>
                <option value="buy-base">Buy Using ETH on Base</option>
                <option value="buy-linea">Buy Using ETH on Linea</option>
              </select>
            </div>

            {/* Show Switch Button if needed */}
            {shouldShowSwitch && (
              <button
                onClick={() =>
                  needsSwitchToBase
                    ? switchNetwork("base")
                    : switchNetwork("linea")
                }
                className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
              >
                Switch to {needsSwitchToBase ? "Base" : "Linea"} Network
              </button>
            )}

            {/* Render Components */}
            {action === "claim" && <ClaimDividends provider={provider} signer={signer} address={address} />}
            {action === "add" && <AddLiquidity provider={provider} signer={signer} address={address} />}
            {action === "remove" && <RemoveLiquidity provider={provider} signer={signer} address={address} />}
            {action === "buy-base" && !needsSwitchToBase && (
              <BuyBase provider={provider} signer={signer} address={address} />
            )}
            {action === "buy-linea" && !needsSwitchToLinea && (
              <BuyLinea provider={provider} signer={signer} address={address} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LiquidityManager;
