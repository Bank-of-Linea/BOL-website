import React, { useEffect, useState } from "react";
import { fetchEthBalance, addLiquidity } from "../../utils/contractActions";

const AddLiquidity = ({ provider, signer, address }) => {
  const [ethBalance, setEthBalance] = useState("0");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (provider && address) {
      fetchEthBalance(provider, address).then(setEthBalance).catch(console.error);
    }
  }, [provider, address]);

  const handleAdd = async () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      return alert("⚠️ Enter a valid ETH amount.");
    }

    try {
      await addLiquidity(signer, amount);
      alert("✅ Liquidity added!");
      setAmount("");
      fetchEthBalance(provider, address).then(setEthBalance);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add liquidity.");
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
      <button onClick={handleAdd} className="w-full bg-indigo-600 text-white py-2 px-4 rounded mt-3">
        Add Liquidity
      </button>
    </div>
  );
};

export default AddLiquidity;
