import React, { useEffect, useState } from "react";
import { fetchEthBalance, transferETHLinea } from "../../utils/contractActions";

const BuyLinea = ({ provider, signer, address }) => {
  const [ethBalance, setEthBalance] = useState("0");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (provider && address) {
      fetchEthBalance(provider, address).then(setEthBalance).catch(console.error);
    }
  }, [provider, address]);

  const handleBuyLinea = async () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      return alert("⚠️ Enter a valid ETH amount.");
    }

    try {
      await transferETHLinea(signer, amount);
      alert("✅ Bought BOL Using ETH!");
      setAmount("");
      fetchEthBalance(provider, address).then(setEthBalance);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to Buy BOL Using ETH.");
    }
  };

  return (
    <div>
      <p className="text-sm text-blue-700">Your ETH Balance: {ethBalance}</p>
      <div className="flex mt-2 space-x-2">
        <input
          type="number"
          placeholder="ETH Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <button onClick={() => setAmount(ethBalance)} className="bg-gray-300 px-3 py-2 rounded">Max</button>
      </div>
      <button onClick={handleBuyLinea} className="w-full bg-indigo-600 text-white py-2 px-4 rounded mt-3">
        Buy BOL
      </button>
    </div>
  );
};

export default BuyLinea;
