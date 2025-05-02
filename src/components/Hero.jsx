import React from "react";
import styles from "../style";
import { robot } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingY} min-h-[calc(100vh-80px)] md:min-h-[600px]`}
    >
      <div
        className={`flex-1 flex flex-col justify-center items-start xl:px-0 sm:px-8 px-4 py-8 md:py-0`}
      >
        <div className="flex flex-row items-center py-2 px-3 rounded-lg mb-4 bg-gray-800/50">
          <p className={`${styles.paragraph} ml-2 uppercase`}>
            <span className="text-white font-extrabold italic text-3xl sm:text-4xl md:text-5xl">
              $BOL
            </span>
          </p>
        </div>

        <p
          className={`${styles.paragraph} max-w-[90%] sm:max-w-[470px] mt-4 text-base sm:text-lg md:text-xl text-white font-['Sintony',_sans-serif] leading-relaxed`}
        >
          Bank of Linea ($BOL) – The Community-Driven Meme Coin That Rewards You!
          Bank of Linea ($BOL) isn’t just another memecoin—it’s a
          community-powered project with a unique reflection mechanism that
          rewards holders of $BOL in $USDC on Linea L2. Our mission is simple: help you
          maximize your earnings by providing a system where you can earn passive
          rewards. Join us on this moon-bound journey and become part of a
          thriving community of crypto enthusiasts who share your passion!
        </p>

        <div className={`mt-6 ${styles.flexCenter} flex-wrap gap-3 sm:gap-4`}>
          <Button name="Buy" link="https://bankoflinea.build/" />
          <Button
            styles={'ml-0 sm:ml-4 mt-2 sm:mt-0'}
            name="Chart"
            link="https://bankoflinea.build"
          />
          <Button
            styles={'ml-0 sm:ml-4 mt-2 sm:mt-0'}
            name="Bridge to Linea"
            link="https://bridge.linea.build/"
          />
        </div>

        <div className={`mt-4 ${styles.flexCenter} flex-wrap gap-3 sm:gap-4`}>
          <Button
            name="LitePaper"
            link="https://drive.google.com/file/d/1fv-m4A9r94IsH9phRd-Bgwp2sCRoe3Ur/view?usp=sharing"
          />
          <Button
            styles={'ml-0 sm:ml-4 mt-2 sm:mt-0'}
            name="WhitePaper"
            link="https://drive.google.com/file/d/1qx9cVYI9NOD0CF2ubJYKOeYs0eBTVnI-/view?usp=drive_link"
          />
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:mr-0 mt-8 md:mt-0 relative min-h-[300px] sm:min-h-[400px]`}
      >
        <img
          src={robot}
          className="w-full max-w-[600px] h-auto relative z-[5] object-contain"
          alt="Bank of Linea robot"
          loading="lazy"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-20 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-10 bottom-10 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;