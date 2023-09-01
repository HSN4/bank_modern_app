import React from "react";
import { stats } from "../constants/index";

const Stats = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center">
      {stats.map((e, index) => (
        <li key={e.id} className="text-white flex items-center gap-5 ">
          <span className="font-bold md:text-[40px] text-[30px] ">
            {e.value}
          </span>
          <h1 className="text-gradient mr-[30px] "> {e.title} </h1>
          {/* {`${index === stats.length - 1 ? "" : "|"}`} */}
        </li>
      ))}
    </div>
  );
};

export default Stats;
