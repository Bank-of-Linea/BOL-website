import React from "react";

const Button = ({ styles, name='Get Started', link }) => (
  <button
    type="button"
    onClick={() => window.open(link, "_blank")}
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    {name}
  </button>
);

export default Button;
