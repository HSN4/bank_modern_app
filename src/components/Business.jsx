import React from "react";
import { features } from "../constants";
import style from "../style";
import Button from "../components/Button";
import { star, shield, send } from "../assets";

const Business = () => {
  return (
    <section
      className={`flex md:flex-row flex-col  justify-between items-center  ${style.paddingY} ${style.marginY}  `}
    >
      <div className="">
        <h1 className="text-white  lg:text-[48px] text-[30px] font-bold ">
          You do the business,
          <br /> we’ll handle the money.
        </h1>
        <p
          className={`lg:text-[20px] text-[14px] text-dimWhite  mt-6 max-w-[470px] `}
        >
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className="md:mt-[0] mt-[40px]">
        {features.map((fet, index) => (
          <div
            key={fet.id}
            className={`flex gap-7 feature-card ${
              index === features.length - 1 ? "mb-0" : "mb-8"
            } rounded-[12px] p-4 `}
          >
            <div
              className={`w-[70px] h-[70px] bg-dimBlue rounded-full ${style.flexCenter}`}
            >
              <img src={fet.icon} alt="" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-white font-poppins font-medium pb-1 ">
                {fet.title}
              </h2>
              <p
                className={` text-dimWhite text-[14px] ss:w-[320px] w-[250px] font-poppins`}
              >
                {fet.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
