import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa"; // Import copy icon
import styles from "../style";

const tokenAddress = "0xb171EF5cD8d320D52F257924A0E0d41E6f5c40D9"; // Replace with actual token address

const Stats = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset "Copied!" message after 2 seconds
  };

  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      <span className="ml-2 mr-2 text-green-400 text-sm">BOL CA</span>
      <div className="bg-gray-800 text-white p-4 rounded-lg flex items-center">
        <span className="mr-2 text-[11px] max-w-[700px]">{tokenAddress}</span>
        <FaRegCopy
          className="cursor-pointer text-gray-300 hover:text-white transition-all duration-200 text-xl"
          onClick={handleCopy}
        />
        {copied && <span className="ml-2 text-green-400 text-sm">Copied!</span>}
      </div>
    </section>
  );
};

export default Stats;
