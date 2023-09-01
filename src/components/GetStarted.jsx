import React from "react";
import style from "../style";
import { arrowUp } from "../assets";
const GetStarted = () => {
  return (
    <div
      className={` w-[120px] h-[120px] p-[2px] bg-blue-gradient rounded-full flex ${style.flexCenter} cursor-pointer `}
    >
      <div
        className={`w-[100%] h-[100%] rounded-full bg-primary   flex-col ${style.flexCenter} `}
      >
        <div className={`${style.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-1">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[32px] h-[23px] object-contain "
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
