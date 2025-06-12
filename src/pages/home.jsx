import React from "react";
import {
  Billing,
  Business,
  Linea,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Stats,
  Testimonials,
  Hero,
} from "../components";
import styles from "../style";

const Home = () => (
  <>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Billing />
        {/* <CardDeal /> */}
        {/*  <Linea /> */}
        {/* <Clients /> */}
        {/* <CTA /> */}
        <Business />
        <Testimonials />
        <Footer />
      </div>
    </div>
  </>
);

export default Home;
