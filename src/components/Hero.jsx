import React from "react";
import style from "../style";
import Getstarted from "../components/GetStarted";
import { robot, discount } from "../assets";

const Hero = () => (
  <section id="home" className={`flex lg:flex-row flex-col ${style.paddingY}`}>
    <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 `}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${style.paragraph}`}>
          <span className="text-white"> 20% </span>
          Discount for <span className="text-white"> 1 Month </span>
          Account
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full ">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[46px] text-white ss:leading-[100px] leading-[70px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient"> Generation </span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0 ">
          <Getstarted />
        </div>
      </div>
      <h1 className="flex-1 font-poppins font-semibold ss:text-[68px] text-[46px] text-white ss:leading-[100px] leading-[70px] w-full">
        {" "}
        Payment Method
      </h1>
      <p className={` ${style.paragraph} max-w-[470px] h-[100%] pb-9 mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    <div className="relative ">
      <img
        src={robot}
        alt="robot"
        className={`w-[100%] md:w-[500px]  md:h-[500px] h-[100%]  relative z-[5] m-0 `}
      />
      <div className="absolute z-0 w-[40%] h-[35%] top-0 blue__gradient" />
      <div className="absolute z-1 w-[80%]  h-[80%] botton-40 rounded-full   white__gradient" />
      <div className="absolute z-0 w-[50%] h-[55%] right-20 botton-20 pink__gradient" />
    </div>
    <div className={`ss:hidden ${style.flexCenter}`}>
      <Getstarted />
    </div>
  </section>
);

export default Hero;
