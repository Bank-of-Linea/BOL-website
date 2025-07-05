import React, { useEffect, useState } from "react";
import {
  isApprovedFor_all,
  approveSell_all,
  fetchBOLBalance,
  sellBOLForETHonBase,
} from "../../utils/contractActions";

const SellBOLtoBase = ({ provider, signer, address }) => {
  const [bolBalance, setBOLBalance] = useState("0");
  const [amount, setAmount] = useState("");
  const [approved, setApproved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkingApproval, setCheckingApproval] = useState(false);

  // Fetch BOL balance
  useEffect(() => {
    if (provider && address) {
      fetchBOLBalance(provider, address)
        .then((balance) => setBOLBalance(balance))
        .catch((err) => {
          console.error(err);
          setBOLBalance("0");
        });
    }
  }, [provider, address]);

  // Check approval when amount changes
  useEffect(() => {
    if (signer && address && amount && !isNaN(amount) && Number(amount) > 0) {
      const checkApproval = async () => {
        setCheckingApproval(true);
        try {
          const isOk = await isApprovedFor_all(signer, address, amount);
          setApproved(isOk);
        } catch (err) {
          console.error("Approval check failed:", err);
          setApproved(false);
        } finally {
          setCheckingApproval(false);
        }
      };
      checkApproval();
    } else {
      setApproved(false);
    }
  }, [amount, signer, address]);

  const handleApprove = async () => {
    try {
      setLoading(true);
      await approveSell_all(signer, amount);
      alert("✅ BOL approved for sale.");
      setApproved(true);
    } catch (err) {
      console.error(err);
      alert("❌ Approval failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSell = async () => {
    const confirmSell = window.confirm(`Are you sure you want to sell ${amount} BOL for ETH on Base?`);
    if (!confirmSell) return;

    try {
      setLoading(true);
      await sellBOLForETHonBase(signer, amount);
      alert("✅ Successfully sold BOL!");
      setAmount("");
      fetchBOLBalance(provider, address).then(setBOLBalance);
      setApproved(false);
    } catch (err) {
      console.error(err);
      alert("❌ Sell transaction failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md w-full max-w-md">
      <h2 className="text-lg font-semibold mb-2">Sell BOL to Base ETH</h2>

      <p className="text-sm text-gray-700 mb-1">
        <strong>Your BOL Balance:</strong> {parseFloat(bolBalance).toLocaleString()}
      </p>

      <div className="flex space-x-2 mt-2">
        <input
          type="number"
          min="0"
          step="any"
          placeholder="Enter BOL amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="flex-grow border px-3 py-2 rounded"
        />
        <button
          onClick={() => setAmount(bolBalance)}
          className="bg-gray-200 px-3 py-2 rounded text-sm"
        >
          Max
        </button>
      </div>

      {amount && !isNaN(amount) && Number(amount) > 0 && (
        <>
          {!approved ? (
            <button
              onClick={handleApprove}
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded mt-4"
              disabled={loading || checkingApproval}
            >
              {loading ? "Approving..." : "Approve BOL for Sale"}
            </button>
          ) : (
            <button
              onClick={handleSell}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded mt-4"
              disabled={loading}
            >
              {loading ? "Selling..." : `Sell ${amount} BOL`}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default SellBOLtoBase;
