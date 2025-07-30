import { token } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section
    id="product"
    className={`${layout.sectionReverse} pt-4 sm:pt-6 border-t-[6px] border-t-[#3F3E45] w-full`}
    aria-labelledby="tokenomics-heading"
  >
    <div
      className={`${layout.sectionImgReverse} relative min-h-[300px] sm:min-h-[400px] mt-8 md:mt-0`}
    >
      <img
        src={token}
        alt="Bank of Linea token illustration"
        className="w-full max-w-[600px] h-auto relative z-[5] object-contain"
        loading="lazy"
      />

      {/* Gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* Gradient end */}
    </div>

    <div className={`${layout.sectionInfo} px-4 sm:px-0`}>
      <h2
        id="tokenomics-heading"
        className={`${styles.heading2} text-2xl sm:text-3xl md:text-4xl text-white font-bold`}
      >
        Tokenomics
      </h2>
      <h2
        className="text-xl sm:text-2xl md:text-3xl text-white font-bold max-w-[90%] sm:max-w-[470px] mt-4"
      >
        Total Supply<br />
        100,000,000
      </h2>
      <div className="max-w-[90%] sm:max-w-[470px] mt-4 space-y-4">
        <p
          className={`${styles.paragraph} text-base sm:text-lg md:text-xl text-white leading-relaxed`}
        >
          When you buy the Bank of Linea (BOL) token, there is a <strong>10% buy fee</strong>, <strong>15% sell fee</strong>, and <strong>2% transfer fee</strong>. These fees are collected in our smart contract and sold when the contract accumulates 100,000 BOL tokens, provided there is a favorable market for selling.
        </p>
        <p
          className={`${styles.paragraph} text-base sm:text-lg md:text-xl text-white leading-relaxed`}
        >
          The resulting ETH is distributed as follows: <strong>70% to token holders</strong> as rewards and <strong>30% to development and marketing</strong> efforts to support the project’s growth.
        </p>
        <p
          className={`${styles.paragraph} text-base sm:text-lg md:text-xl text-white leading-relaxed`}
        >
          <strong>Excluded Wallets from Rewards (69% of Total Supply):</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Liquidity Pool: 35% (31% allocated to holders)</li>
            <li>Marketing Wallet: 14%</li>
            <li>Airdrop Wallets: 2%</li>
            <li>Early Support Wallets: 2%</li>
            <li>Backups/Listing/OTC: 14%</li>
            <li>KOLs Other Chains: 2%</li>
          </ul>
        </p>
        <p
          className={`${styles.paragraph} text-base sm:text-lg md:text-xl text-white leading-relaxed`}
        >
          <strong>Included Wallets for Rewards (31% of Total Supply):</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Marketing Wallet Collector: 6%</li>
            <li>NFT Holders: 6%</li>
            <li>Incentives Wallet: 5%</li>
            <li>Team: 5%</li>
            <li>Frozen Wallet: 3%</li>
            <li>Operations Wallet (Locked): 4%</li>
            <li>Charity Wallet (Locked): 2%</li>
            <li>Holders: 31%</li>
          </ul>
        </p>
      </div>
    </div>
  </section>
);

export default Billing;