import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = ({ name1, name2, link }) => (
  <div
    className={`${styles.flexCenter} max-w-[150px] max-h-[150px]  min-w-[80px] min-h-[80px] lg:w-[140px] md:w-[80px] md:h-[80px] sm:w-[120px] sm:h-[120px] lg:h-[140px] rounded-full bg-blue-gradient p-[1%] ml-2 cursor-pointer`}>
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className={`${styles.flexStart} flex-row`}>
          <p className="sm:text-[10px] font-poppins font-medium text-[12px] leading-[14px] mr-2">
            <span className="text-gradient">{name1}</span>
          </p>
          <img
            src={arrowUp}
            className="w-[16%] h-[16%] object-contain"
            alt=""
          />
        </div>
      </a>
      {/* <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">{name2}</span>
          </p> */}
    </div>
  </div>
);

export default GetStarted;
