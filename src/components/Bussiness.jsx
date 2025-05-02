import { features } from "../constants";
import styles, { layout } from "../style";
import { robot1 } from "../assets";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-4 sm:p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-4 sm:mb-6" : "mb-0"
    } feature-card w-full max-w-[500px]`}
  >
    <div
      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img
        src={icon}
        alt={title}
        className="w-[50%] h-[50%] object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4
        className="font-poppins font-semibold text-white text-base sm:text-lg leading-[1.4] mb-1"
      >
        {title}
      </h4>
      <p
        className="font-poppins font-normal text-dimWhite text-sm sm:text-base leading-[1.5]"
      >
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section
    id="features"
    className={`${layout.section} pt-4 sm:pt-6 border-t-[6px] border-t-[#3F3E45] w-full`}
  >
    <div className={`${layout.sectionInfo} px-4 sm:px-0`}>
      <h1
        className={`${styles.heading2} text-2xl sm:text-3xl md:text-4xl`}
      >
        About
      </h1>
      <p
        className={`${styles.paragraph} max-w-[90%] sm:max-w-[470px] mt-4 text-base sm:text-lg md:text-xl text-white leading-relaxed`}
      >
        Bank of Linea ($BOL) – The First Reflection Meme Token on Linea L2! Get
        rewarded just for holding! Bank of Linea ($BOL) is the first reflection
        meme token on the Linea L2 blockchain, automatically airdropping $USDC to
        holders on Linea’s network. Ready to join the fun and earn while you HODL
        $BOL? Jump in now!
      </p>
    </div>

    <div
      className={`${layout.sectionImg} flex-col relative mt-8 md:mt-0 min-h-[300px] sm:min-h-[400px]`}
    >
      <img
        src={robot1}
        className="w-full max-w-[600px] h-auto relative z-[5] object-contain"
        alt="Bank of Linea feature"
        loading="lazy"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-20 sm:bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-4 sm:right-20 bottom-4 sm:bottom-20 blue__gradient" />
    </div>
  </section>
);

export default Business;