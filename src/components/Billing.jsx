import { token } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section
    id="product"
    className={`${layout.sectionReverse} pt-6 border-t-[10px] border-t-[#3F3E45]`}
  >
    <div className={layout.sectionImgReverse}>
      <img
        src={token}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Tokenomics</h2>
      <h2 className={`text-3xl text-white font-bold max-w-[470px] mt-5`}>
        Total supply<br></br>
        100,000,000
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
        Bank of Linea ($BOL) – The First Reflection Meme Token on Linea L2! Get
        rewarded just for holding! Bank of Linea ($BOL) is the first reflection
        meme token on the Linea L2 blockchain, automatically airdropping $ETH to
        holders on Linea’s network. Ready to join the fun and earn while you
        HODL? Jump in now!
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
    </div>
  </section>
);

export default Billing;
