import React, { useEffect, useState } from "react";
import {
  isApprovedForSellBOL,
  approveSellBOL,
  fetchBOLBalance,
  sellBOLForETH,
} from "../../utils/contractActions";

const SellBOL = ({ provider, signer, address }) => {
  const [bolBalance, setBOLBalance] = useState("0");
  const [amount, setAmount] = useState("");
  const [approved, setApproved] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (provider && address) {
      fetchBOLBalance(provider, address).then(setBOLBalance).catch(console.error);
    }
  }, [provider, address]);

  useEffect(() => {
    if (signer && address && amount && !isNaN(amount) && Number(amount) > 0) {
      const checkApproval = async () => {
        const isOk = await isApprovedForSellBOL(signer, address, amount);
        setApproved(isOk);
      };
      checkApproval();
    } else {
      setApproved(false);
    }
  }, [amount, signer, address]);

  const handleApprove = async () => {
    try {
      setLoading(true);
      await approveSellBOL(signer, amount);
      alert("✅ BOL approved for Sell contract.");
      setApproved(true);
    } catch (err) {
      console.error(err);
      alert("❌ Approval failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleSell = async () => {
    try {
      setLoading(true);
      await sellBOLForETH(signer, amount);
      alert("✅ Sold BOL for ETH!");
      setAmount("");
      fetchBOLBalance(provider, address).then(setBOLBalance);
      setApproved(false); // Reset so approval check is done again if user enters new amount
    } catch (err) {
      console.error(err);
      alert("❌ Sell failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p className="text-sm text-green-700">Your BOL Balance: {bolBalance}</p>
      <div className="flex mt-2 space-x-2">
        <input
          type="number"
          placeholder="BOL Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <button onClick={() => setAmount(bolBalance)} className="bg-gray-300 px-3 py-2 rounded">Max</button>
      </div>

      {amount && !isNaN(amount) && Number(amount) > 0 && (
        <>
          {!approved ? (
            <button
              onClick={handleApprove}
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded mt-3"
              disabled={loading}
            >
              {loading ? "Approving..." : "Approve BOL"}
            </button>
          ) : (
            <button
              onClick={handleSell}
              className="w-full bg-red-600 text-white py-2 px-4 rounded mt-3"
              disabled={loading}
            >
              {loading ? "Selling..." : "Sell BOL"}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default SellBOL;
