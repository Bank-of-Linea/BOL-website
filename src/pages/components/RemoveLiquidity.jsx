import React, { useEffect, useState } from "react";
import {
  fetchLPBalance,
  isApprovedForLiquidity,
  approveLPToken,
  removeLiquidity,
} from "../../utils/contractActions";
import { ethers } from "ethers";

const RemoveLiquidity = ({ provider, signer, address }) => {
  const [lpBalance, setLpBalance] = useState("0");
  const [amount, setAmount] = useState("");
  const [approved, setApproved] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (provider && address) {
      fetchLPBalance(provider, address)
        .then(setLpBalance)
        .catch(console.error);
    }
  }, [provider, address]);

  useEffect(() => {
    const checkApproval = async () => {
      if (!amount || isNaN(amount) || Number(amount) <= 0) return setApproved(false);
      try {
      //  const parsed = ethers.parseUnits(amount, 18);
        const isOk = await isApprovedForLiquidity(signer, address, amount);
        setApproved(isOk);
      } catch (err) {
        console.error("Approval check failed:", err);
        setApproved(false);
      }
    };

    checkApproval();
  }, [amount, signer, address]);

  const handleApprove = async () => {
    try {
      setLoading(true);
     // const parsed = ethers.parseUnits(amount, 18);
      await approveLPToken(signer, amount);
      alert("✅ Approved LP tokens!");
      setApproved(true);
    } catch (err) {
      console.error(err);
      alert("❌ Approval failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async () => {
    try {
      setLoading(true);
      await removeLiquidity(signer, address, amount);
      alert("✅ Liquidity removed!");
      setAmount("");
      fetchLPBalance(provider, address).then(setLpBalance);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to remove liquidity.");
    } finally {
      setLoading(false);
    }
  };

  const handleMax = () => setAmount(lpBalance);

  return (
    <div>
      <p className="text-sm text-blue-700">Your LP Token Balance: {lpBalance}</p>
      <div className="flex mt-2 space-x-2">
        <input
          type="number"
          placeholder="LP Token Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <button onClick={handleMax} className="bg-gray-300 px-3 py-2 rounded">Max</button>
      </div>
      <button
        onClick={approved ? handleRemove : handleApprove}
        disabled={loading || !amount || Number(amount) <= 0}
        className={`w-full text-white py-2 px-4 rounded mt-3 ${approved ? "bg-indigo-600" : "bg-yellow-500"}`}
      >
        {loading ? "Processing..." : approved ? "Remove Liquidity" : "Approve LP Tokens"}
      </button>
    </div>
  );
};

export default RemoveLiquidity;
