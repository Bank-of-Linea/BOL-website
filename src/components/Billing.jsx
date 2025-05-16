import { token } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section
    id="product"
    className={`${layout.sectionReverse} pt-4 sm:pt-6 border-t-[6px] border-t-[#3F3E45] w-full`}
  >
    <div
      className={`${layout.sectionImgReverse} relative min-h-[300px] sm:min-h-[400px] mt-8 md:mt-0`}
    >
      <img
        src={token}
        alt="Bank of Linea token"
        className="w-full max-w-[600px] h-auto relative z-[5] object-contain"
        loading="lazy"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={`${layout.sectionInfo} px-4 sm:px-0`}>
      <h2
        className={`${styles.heading2} text-2xl sm:text-3xl md:text-4xl`}
      >
        Tokenomics
      </h2>
      <h2
        className={`text-xl sm:text-2xl md:text-3xl text-white font-bold max-w-[90%] sm:max-w-[470px] mt-4`}
      >
        Total supply<br />
        100,000,000
      </h2>
      <p
        className={`${styles.paragraph} max-w-[90%] sm:max-w-[470px] mt-4 text-base sm:text-lg md:text-xl text-white leading-relaxed`}
      >
        Bank of Linea (BOL) – The First Reflection Meme Token on Linea L2! Get
        rewarded just for holding! Bank of Linea (BOL) is the first reflection
        meme token on the Linea L2 blockchain, automatically airdropping ETH to
        holders on Linea’s network. Ready to join the fun and earn while you HODL
        BOL? Jump in now!
      </p>

      {/* Uncomment if needed */}
      {/* <div className="flex flex-row flex-wrap gap-4 sm:gap-5 sm:mt-10 mt-6">
        <img
          src={apple}
          alt="App Store"
          className="w-[120px] sm:w-[128.86px] h-auto object-contain cursor-pointer"
        />
        <img
          src={google}
          alt="Google Play"
          className="w-[135px] sm:w-[144.17px] h-auto object-contain cursor-pointer"
        />
      </div> */}
    </div>
  </section>
);

export default Billing;