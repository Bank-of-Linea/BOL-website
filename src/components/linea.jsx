import React, { useState } from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import { robot2, linea1 } from "../assets";
import Button from "./Button";
import { FaRegCopy } from "react-icons/fa";

const Linea = () => {
  const [copied, setCopied] = useState(false);
  const baseeth = "Coming soon!";

  const handleCopy = () => {
    navigator.clipboard.writeText(baseeth);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="linea"
      className={`${layout.section} pt-4 sm:pt-6 border-t-[6px] border-t-[#3F3E45] relative flex flex-col items-center text-center w-full px-4 sm:px-0`}
    >
      {/* "COMING SOON" Heading */}
      <div className="relative z-10">
        <h1
          className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase"
        >
          COMING SOON
        </h1>
      </div>

      {/* Background Image */}
      <div className="relative mt-4 w-full flex justify-center">
        <img
          src={linea1}
          alt="Coming Soon Visual"
          className="w-full max-w-[600px] h-auto sm:max-h-[300px] object-contain"
          loading="lazy"
        />
      </div>

      {/* Hidden Content Behind "COMING SOON" */}
      {/* Uncomment if needed */}
      {/* <div className="relative z-10 opacity-0">
        <div className={`${layout.sectionInfo} px-4 sm:px-0`}>
          <h3
            className={`${styles.heading2} text-2xl sm:text-3xl md:text-4xl text-center`}
          >
            Interoperability Capabilities for $BOL
          </h3>
          <div
            className={`${styles.paragraph} max-w-[90%] sm:max-w-[470px] mt-4 text-base sm:text-lg md:text-xl text-white leading-relaxed mx-auto`}
          >
            <p>Bank of Linea fam, get ready for some next-level DeFi magic!</p>
            <p>
              <strong>
                With ENSdomains technology, you can now bridge ETH on Base L2 to
                $BOL on Linea L2—all in one transaction!
              </strong>
            </p>
            <h4 className="text-lg sm:text-xl md:text-2xl mt-4">
              How It Works:
            </h4>
            <ol className="list-decimal list-inside mt-2">
              <li className="mb-2">
                Send ETH (on Base L2) from your <strong>MetaMask</strong> or any
                self-custody wallet to the ENS/CA below.
              </li>
              <li>
                Sit back and watch as <strong>$BOL lands straight into your Linea
                EVM wallet</strong>
              </li>
            </ol>
            <h4 className="text-lg sm:text-xl md:text-2xl mt-4">ENS/CA LIST:</h4>
            <p>
              <strong>Coming soon!</strong>
            </p>
            <p>
              <strong>No bridges. No swaps. No headaches.</strong>
            </p>
            <p>
              Just seamless L2 transactions—this is the{" "}
              <strong>future of DeFi</strong>, and{" "}
              <strong>$BOL is leading the charge.</strong>
            </p>
            <h4 className="text-lg sm:text-xl md:text-2xl mt-4">
              Stack $BOL today and start earning ETH just for holding!
            </h4>
            <p>
              <strong>See you inside!</strong>
            </p>
          </div>

          <section
            className={`${styles.flexCenter} flex-row flex-wrap mt-6 sm:mb-12 mb-6 gap-3 sm:gap-4`}
          >
            <span className="text-green-400 text-sm sm:text-base">$BOL ENS</span>
            <div className="bg-gray-800 text-white p-3 sm:p-4 rounded-lg flex items-center max-w-[90%] sm:max-w-[700px]">
              <span className="mr-2 text-base sm:text-lg md:text-xl flex-1 overflow-hidden text-ellipsis">
                {baseeth}
              </span>
              <FaRegCopy
                className="cursor-pointer text-gray-300 hover:text-white transition-all duration-200 text-lg sm:text-xl"
                onClick={handleCopy}
              />
              {copied && (
                <span className="ml-2 text-green-400 text-sm sm:text-base">
                  Copied!
                </span>
              )}
            </div>
          </section>
        </div>
      </div> */}
    </section>
  );
};

export default Linea;