import { features } from "../constants";
import styles, { layout } from "../style";
import { robot1 } from "../assets";
// import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section
    id="features"
    className={`${layout.section} pt-6 border-t-[10px] border-t-[#3F3E45]`}
  >
    <div className={layout.sectionInfo}>
      <h1 className={styles.heading2}>About</h1>
      <p
        className={`${styles.paragraph} max-w-[470px] mt-5 text-xl text-white`}
      >
        Bank of Linea ($BOL) – The First Reflection Meme Token on Linea L2! Get
        rewarded just for holding! Bank of Linea ($BOL) is the first reflection
        meme token on the Linea L2 blockchain, automatically airdropping $ETH to
        holders on Linea’s network. Ready to join the fun and earn while you
        HODL? Jump in now!
      </p>

      {/*  <Button styles={`mt-10`} /> */}
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      <img
        src={robot1}
        className="w-[100%] h-[100%] relative z-[5]"
        alt=""
        srcset=""
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
);

export default Business;
