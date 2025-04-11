import { feedback } from "../constants";
import styles from "../style";
import { robot5 } from "../assets";
import FeedbackCard from "./FeedBackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative pt-6 border-t-[10px] border-t-[#3F3E45]`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>Roadmap</h2>
      <div className="w-full md:mt-0 mt-6">
        {/* <p
          className={`${styles.paragraph} text-left max-w-[450px] font-semibold text-white`}
        >
          PHASE 1: Memes <br />
          PHASE 2: HODL <br />
          PHASE 3: Memetic Utilization
        </p> */}
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {/* {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))} */}
      <img
                src={robot5}
                className="w-[100%] sm:w-[80%] sm:h-[80%] h-[100%] relative z-[4]"
                alt=""
                srcset=""
       />
    </div>
  </section>
);

export default Testimonials;