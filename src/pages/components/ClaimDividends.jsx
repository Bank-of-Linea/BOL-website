import React, { useEffect, useState } from "react";
import { fetchUnpaidEarnings, claimDividends } from "../../utils/contractActions";

const ClaimDividends = ({ provider, signer, address }) => {
  const [earnings, setEarnings] = useState("0");

  useEffect(() => {
    if (provider && address) {
      fetchUnpaidEarnings(provider, address).then(setEarnings).catch(console.error);
    }
  }, [provider, address]);

  const handleClaim = async () => {
    try {
      await claimDividends(signer);
      alert("✅ Dividends claimed!");
      setEarnings("0");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to claim dividends.");
    }
  };

  return (
    <div>
      <p className="text-center">Unclaimed Earnings: {earnings} ETH</p>
      <button onClick={handleClaim} className="w-full bg-green-600 text-white py-2 px-4 rounded mt-3">
        Claim Dividends
      </button>
    </div>
  );
};

export default ClaimDividends;
