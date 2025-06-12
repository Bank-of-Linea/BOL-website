import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./style";
import { Navbar } from "./components";
import Home from "./pages/home";
import LiquidityManager from "./pages/LiquidityManager";

const App = () => (
  <div className="bg-primary w-full overflow-hidden relative">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<LiquidityManager />} />
    </Routes>
  </div>
);

export default App;
