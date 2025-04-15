import React from "react";
import styles from "../style";
import { robot } from "../assets";
import { GetStarted } from "./index";
import Button from "./Button";


const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 flex justify-start items-start flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[16px] px-4 rounded-[10px] mb-2">
          {/*     <img src={discount} alt="discont" className="w-[32px] h-[32px]" /> */}
          <p className={`${styles.paragraph} ml-2 uppercase`}>
            <span className="text-white font-extrabold italic text-5xl">
              $BOL
            </span>
          </p>
        </div>

        {/* <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            $Amplistake  <br className="sm:block hidden"/> {" "}
            <span className="text-gradient">Generation</span> {" "} 

          </h1> */}

        {/*  <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted/>
          </div> */}
        {/* </div> */}
        {/* <h1  className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full"> Payment Method.</h1>
         */}
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5 tracking-normal text-xl text-white font-['Sintony',_sans-serif]`}
        >
          Bank of Linea ($BOL) – The Community-Driven Meme Coin That Rewards
          You! Bank of Linea ($BOL) isn’t just another memecoin—it’s a
          community-powered project with a unique reflection mechanism that
          rewards holders in $ETH on Linea L2. Our mission is simple: help you
          maximize your earnings by providing a system where you can earn
          passive rewards. Join us on this moon-bound journey and become part of
          a thriving community of crypto enthusiasts who share your passion!
        </p>

      <div className={`mt-10 ${styles.flexCenter}`}>
        <Button
          name="Buy"
          link="https://bankoflinea.build/"
        />
        <Button
        styles={'ml-6'}
          name="Chart"
          link="https://bankoflinea.build"
        />
        <Button
        styles={'ml-6'}
          name="Bridge to Linea"
          link="https://bridge.linea.build/"
        />
        
      </div>

      <div className={`mt-10 ${styles.flexCenter}`}>
      <Button
          name="LitePaper"
          link="https://drive.google.com/file/d/1fv-m4A9r94IsH9phRd-Bgwp2sCRoe3Ur/view?usp=sharing"
          
        />
        <Button
        styles={'ml-6'}
          name="WhitePaper"
          link="https://drive.google.com/file/d/1qx9cVYI9NOD0CF2ubJYKOeYs0eBTVnI-/view?usp=drive_link"
        />
      </div>

      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:mr-0  my-10 relative`}
      >
        <img
          src={robot}
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
};

export default Hero;
