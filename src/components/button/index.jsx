import React from "react";

const Button = ({
  btnName,
  type,
  style,
  styleA,
  icon,
  styleB,
  iconA,
  contact,
}) => {
  return (
    <button type={type && type} className={`text-center ${style ? style : ""} `}>
        <div className={`${styleA ? styleA : ""} `}>
          <div className={`${styleB ? styleB : ""} `}>{iconA ? iconA : ""}</div>
          <div className="flex flex-col">
            <div className="whitespace-nowrap">
              {btnName}
            </div>
            <p className="text-[16px] whitespace-nowrap">{contact ? contact : ''}</p>
          </div>
          <div className={`${styleB ? styleB : ""} `}>{icon ? icon : ""}</div>
        </div>
    </button>
  );
};

export default Button;
