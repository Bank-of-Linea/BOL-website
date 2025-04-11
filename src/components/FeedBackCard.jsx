import { quotes } from "../assets";
import React from "react";

const FeedbackCard = ({
  content,
  content2,
  content1,
  content3,
  content4,
  content5,
  content6,
  name,
  title,
}) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] " />
    <h4 className="font-poppins font-semibold text-3xl  text-white">{name}</h4>
    <p className="font-poppins font-normal text-lg  text-dimWhite">{title}</p>

    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
      <br></br>
      {content1}
      <br></br>
      {content2}
      <br></br>
      {content3}
      <br></br>
      {content4}
      <br></br>
      {content5}
      <br></br>
      {content6}
    </p>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10"></p>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10"></p>
  </div>
);

export default FeedbackCard;
