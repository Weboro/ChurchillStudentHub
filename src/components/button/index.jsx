import React from "react";

const Button = ({
  btnName,
  type,
  style = "",
  styleA,
  icon,
  styleB,
  iconA,
  contact,
  isPrimary = true,
}) => {
  return (
    <button
      type={type && type}
      className={`text-center border-2 border-[#606060] hover:bg-[#ff9700]  transition duration-200  ease-in-out hover:scale-105 rounded-full px-4 py-3
      ${isPrimary ? "bg-[#E59623] hover:bg-[#ff9700]" : ""} ${
        style ? style : ""
      } `}
    >
      <div className={`${styleA ? styleA : ""} `}>
        <div className={`${styleB ? styleB : ""} `}>{iconA ? iconA : ""}</div>
        <div className="flex flex-col">
          <div className="whitespace-nowrap">{btnName}</div>
          <p className="text-[16px] whitespace-nowrap">
            {contact ? contact : ""}
          </p>
        </div>
        <div className={`${styleB ? styleB : ""} `}>{icon ? icon : ""}</div>
      </div>
    </button>
  );
};

export default Button;
