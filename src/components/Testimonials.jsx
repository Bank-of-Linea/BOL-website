import { feedback } from "../constants";
import styles from "../style";
import { robot5 } from "../assets";
import FeedbackCard from "./FeedBackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative pt-4 sm:pt-6 border-t-[6px] border-t-[#3F3E45] w-full`}
  >
    <div className="absolute z-[0] w-[50%] h-[50%] -right-[40%] rounded-full blue__gradient bottom-20 sm:bottom-40" />

    <div
      className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-12 mb-6 relative z-[1] px-4 sm:px-0"
    >
      <h2
        className={`${styles.heading2} text-2xl sm:text-3xl md:text-4xl`}
      >
        Roadmap
      </h2>
      <div className="w-full md:mt-0 mt-4">
        {/* Uncomment if needed */}
        {/* <p
          className={`${styles.paragraph} text-left max-w-[90%] sm:max-w-[450px] text-base sm:text-lg md:text-xl font-semibold text-white leading-relaxed`}
        >
          PHASE 1: Memes <br />
          PHASE 2: HODL <br />
          PHASE 3: Memetic Utilization
        </p> */}
      </div>
    </div>

    <div
      className="flex flex-wrap justify-center w-full feedback-container relative z-[1] px-4 sm:px-0"
    >
      {/* Uncomment if needed */}
      {/* {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))} */}
      <img
        src={robot5}
        className="w-full max-w-[600px] sm:max-w-[80%] h-auto relative z-[4] object-contain"
        alt="Bank of Linea roadmap"
        loading="lazy"
      />
    </div>
  </section>
);

export default Testimonials;