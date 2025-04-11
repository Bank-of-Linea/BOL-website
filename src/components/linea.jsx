import React, { useState } from "react"; 
import { features } from "../constants"; 
import styles, { layout } from "../style"; 
import { robot2, linea1 } from "../assets"; 
import Button from "./Button"; 
import { FaRegCopy } from "react-icons/fa"; // Import copy icon

const Linea = () => { 
   const [copied, setCopied] = useState(false); 
   const baseeth = 'Coming soon!';

const handleCopy = () => { 
   navigator.clipboard.writeText(baseeth); setCopied(true); setTimeout(() => setCopied(false), 2000); // Reset "Copied!" message after 2 seconds };
}
return (
      <section id="linea" className={`${layout.section} pt-6 border-t-[10px] border-t-[#3F3E45] relative flex flex-col items-center text-center`}>
      
      {/* "COMING SOON" Heading */}
      <div className="relative z-10">
        <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase">
          COMING SOON
        </h1>
      </div>

      {/* Background Image (Inside Section) */}
      <div className="relative mt-4 w-full flex justify-center">
        <img src={linea1} alt="Coming Soon Visual" className="max-w-full h-auto sm:h-[300px] object-contain" />
      </div>
         
      {/* <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center z-20">
        
       </div>*/}

         {/*   <div className="relative z-10" >
    <div className={layout.sectionInfo}>
      <h1 className={`${styles.heading2} items-center`}> COMING SOON </h1>
       </div>
         </div>*/}
      {/*   <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase text-center"> COMING SOON </h1> */}
      
{/* Hidden Content Behind "COMING SOON" */}
  {/* <div className="relative z-10 opacity-0" >
    <div className={layout.sectionInfo}>
      <h1 className={styles.heading2}></h1>
      <h3 className={styles.heading2}>Interoperability Capabilities for $BOL</h3>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-xl text-white`}>
        <div>
          <h2>Interoperability Capabilities for $BOL</h2>
          <p>Bank of Linea fam, get ready for some next-level DeFi magic!</p>
          <p><strong>With ENSdomains technology, you can now bridge ETH on Base L2 to $BOL on Linea L2—all in one transaction!</strong></p>
          <h2>How It Works:</h2>
          <ol>
            <li>Send ETH (on Base L2) from your <strong>MetaMask</strong> or any self-custody wallet to the ENS/CA below.</li>
            <li>Sit back and watch as <strong>$BOL lands straight into your Linea EVM wallet</strong></li>
          </ol>
          <h3>ENS/CA LIST:</h3>
          <p><strong>Coming soon!</strong></p>
          <p><strong>No bridges. No swaps. No headaches.</strong></p>
          <p>Just seamless L2 transactions—this is the <strong>future of DeFi</strong>, and <strong>$BOL is leading the charge.</strong></p>
          <h2>Stack $BOL today and start earning ETH just for holding!</h2>
          <p><strong>See you inside!</strong></p>
        </div>
      </p>

      <section className={`${styles.flexCenter} flex-row flex-wrap mt-6 sm:mb-20 mb-6`}>
        <span className="ml-2 mr-2 text-green-400 text-sm">$BOL ENS</span>
        <div className="bg-gray-800 text-white p-4 rounded-lg flex items-center">
          <span className="mr-2 text-[21px] max-w-[700px]">{baseeth}</span>
          <FaRegCopy
            className="cursor-pointer text-gray-300 hover:text-white transition-all duration-200 text-xl"
            onClick={handleCopy}
          />
          {copied && <span className="ml-2 text-green-400 text-sm">Copied!</span>}
        </div>
      </section>
    </div> */}
  {/* </div> */}
</section>

); 
};

export default Linea;