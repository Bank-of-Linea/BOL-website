import React, { useEffect, useState } from "react";
import {
  fetchUnpaidEarnings,
  claimDividends,
  takeSnapshot,
  swapClaimedToBOL,
  getSnapshotValue,
  getTradeDiscount,
  fetchClaimedAmount,
} from "../../utils/contractActions";

const ClaimDividends = ({ provider, signer, address }) => {
  const [earnings, setEarnings] = useState("0");
  const [snapshotTaken, setSnapshotTaken] = useState(false);
  const [snapshotValue, setSnapshotValue] = useState(null);
  const [claimedWithDiscount, setClaimedWithDiscount] = useState(false);
  const [showDiscountFlow, setShowDiscountFlow] = useState(false);
  const [tradeDiscount, setTradeDiscount] = useState(null);

  // Loading states
  const [loadingQuickClaim, setLoadingQuickClaim] = useState(false);
  const [loadingSnapshot, setLoadingSnapshot] = useState(false);
  const [loadingClaimWithDiscount, setLoadingClaimWithDiscount] = useState(false);
  const [loadingSwap, setLoadingSwap] = useState(false);

  const [swapSuccessful, setSwapSuccessful] = useState(false);
  const [claimedAmount, setClaimedAmount] = useState("0");

  useEffect(() => {
    if (provider && address) {
      fetchUnpaidEarnings(provider, address)
        .then(setEarnings)
        .catch(console.error);

      fetchClaimedAmount(provider, address)
      .then(setClaimedAmount)
      .catch(console.error);

      getTradeDiscount(provider)
        .then((val) => setTradeDiscount(Number(val)))
        .catch(console.error);
    }
  }, [provider, address]);

  const handleQuickClaim = async () => {
    setLoadingQuickClaim(true);
    try {
      await claimDividends(signer);
      alert("✅ Dividends claimed!");
      setEarnings("0");
      await fetchClaimedAmount(provider, address).then(setClaimedAmount);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to claim dividends.");
    }
    setLoadingQuickClaim(false);
  };

  const handleSnapshot = async () => {
  setLoadingSnapshot(true);
  const result = await takeSnapshot(signer);

  if (result.success) {
    setSnapshotTaken(true);
    const value = await getSnapshotValue(provider, address);
    setSnapshotValue(value);
    alert(`🧠 Snapshot taken: ${value} ETH`);
  } else {
    alert(result.message);
  }

  setLoadingSnapshot(false);
};

  const handleClaimWithDiscount = async () => {
    setLoadingClaimWithDiscount(true);
    try {
      await claimDividends(signer);
      setClaimedWithDiscount(true);
      setEarnings("0");
      alert(`✅ Claimed with ${tradeDiscount || 50}% discount using BOL!`);
      await fetchClaimedAmount(provider, address).then(setClaimedAmount);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to claim with discount.");
    }
    setLoadingClaimWithDiscount(false);
  };

  const handleSwap = async () => {
  if (!snapshotValue) return alert("Snapshot value missing.");
  setLoadingSwap(true);
  try {
    await swapClaimedToBOL(signer, snapshotValue);
    setSwapSuccessful(true); // ✅ Mark swap as successful
    alert("🔄 Swapped to BOL successfully!");
  } catch (err) {
    console.error(err);
    alert("❌ Swap failed.");
  }
  setLoadingSwap(false);
};
  
  const Spinner = () => (
    <span className="ml-2 inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
  );


return (
  <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-lg space-y-4">
    {/*<p className="text-center text-lg font-semibold">
      🎉 You have <span className="text-green-600">{earnings}</span> ETH available to claim
    </p>*/}
    <p className="text-center text-lg font-semibold">
  🎉 You have <span className="text-green-600">{earnings}</span> ETH available to claim
</p>

{claimedAmount !== "0" && (
  <p className="text-center text-sm text-gray-700">
    💰 Already claimed: <span className="font-medium text-purple-700">{claimedAmount}</span> ETH
  </p>
)}

    {/* Quick Claim */}
    <button
      onClick={handleQuickClaim}
      disabled={loadingQuickClaim}
      className="w-full bg-green-600 text-white py-2 px-4 rounded-xl transition hover:bg-green-700 disabled:opacity-60"
    >
      {loadingQuickClaim ? (
        <>
          Claiming
          <Spinner />
        </>
      ) : (
        "Claim ETH"
      )}
    </button>

    {/* Discount Flow Toggle */}
    <button
      onClick={() => setShowDiscountFlow((prev) => !prev)}
      className="w-full bg-yellow-500 text-white py-2 px-4 rounded-xl transition hover:bg-yellow-600"
    >
      {showDiscountFlow
        ? "🔽 Hide Discount Steps"
        : `Claim BOL with ${tradeDiscount !== null ? tradeDiscount : "…"}% Fee Discount`}
    </button>

    {/* Discount Claim Flow */}
    {showDiscountFlow && (
      <div className="bg-gray-50 p-4 rounded-lg shadow-inner space-y-6">
        {/* Step 1 */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">Step 1/3: Take a Snapshot</h3>
          <p className="text-sm text-gray-600 mb-2">
            This step locks in your current earnings for use in the discount flow.
          </p>
          {!snapshotTaken ? (
            <button
              onClick={handleSnapshot}
              disabled={loadingSnapshot}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl transition hover:bg-blue-700 disabled:opacity-60"
            >
              {loadingSnapshot ? (
                <>
                  Taking Snapshot
                  <Spinner />
                </>
              ) : (
                "📸 Take Snapshot"
              )}
            </button>
          ) : (
            <p className="text-green-600 text-sm font-medium">✅ Snapshot Taken: {snapshotValue} ETH</p>
          )}
        </div>

        {/* Step 2 */}
        {snapshotTaken && (
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Step 2/3: Claim with Discount</h3>
            <p className="text-sm text-gray-600 mb-2">
              Now that your snapshot is saved, you can claim your dividends at a discount using BOL.
            </p>
            {!claimedWithDiscount ? (
              <button
                onClick={handleClaimWithDiscount}
                disabled={loadingClaimWithDiscount}
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-xl transition hover:bg-purple-700 disabled:opacity-60"
              >
                {loadingClaimWithDiscount ? (
                  <>
                    Claiming...
                    <Spinner />
                  </>
                ) : (
                  `✅ Claim with ${tradeDiscount !== null ? tradeDiscount : "…"}% Fee Discount`
                )}
              </button>
            ) : (
              <p className="text-green-600 text-sm font-medium">✅ Claimed with Discount</p>
            )}
          </div>
        )}

        {/* Step 3 */}
        {claimedWithDiscount && (
  <div>
    <h3 className="font-semibold text-gray-800 mb-1">Step 3/3: Convert to BOL</h3>
    <p className="text-sm text-gray-600 mb-2">
      Final step: convert your claimed rewards into BOL tokens.
    </p>

    {!swapSuccessful ? (
      <button
        onClick={handleSwap}
        disabled={loadingSwap}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-xl transition hover:bg-indigo-700 disabled:opacity-60"
      >
        {loadingSwap ? (
          <>
            Swapping...
            <Spinner />
          </>
        ) : (
          "🔄 Convert to BOL"
        )}
      </button>
    ) : (
      <p className="text-green-600 text-sm font-medium">✅ Successfully converted to BOL</p>
    )}
  </div>
)}
      </div>
    )}
  </div>
);
};

export default ClaimDividends;
