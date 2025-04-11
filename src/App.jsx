import styles from "./style";
import {
  Billing,
  Business,
  Linea,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import { logo } from "./assets";

const App = () => (
  <div className="bg-primary w-full overflow-hidden relative">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Billing />
        {/*  <CardDeal /> */}
        <Linea />
        {/* <Clients /> */}
        {/* <CTA /> */}
        <Business />
        <Testimonials />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
