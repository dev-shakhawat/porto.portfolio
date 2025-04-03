import React from "react";

import { IoIosArrowDropright } from "react-icons/io";

const Banner = () => {
  return (
    <div className=" pb-12  pt-[150px] ">
      <div className="container">
        <div className="flex items-center justify-between  ">
          <h1 className="text-5xl font-bold leading-[58px] tracking-[-1.6px] w-[48%]       "    >
            Hello, we are a <span className="text-brand">Digital Agency</span> From New York City.
          </h1>
          <div className="flex items-center gap-10   ">
            <p className=" text-base font-medium leading-[26px] tracking-[-0.8px]  text-primary/90 w-[255px] text-right     ">
              Lorem ipsum dolor sit amet, conur adipiscing elit phasellus
              blandit massa enim.
            </p>
            <button type="button" className ="text-brand  font-semibold rounded-[20px] text-[14px] px-5 py-2 h-fit capitalize border-2 border-brand flex items-center gap-2    "  ><span>contact us</span><IoIosArrowDropright className="text-xl bg-brand text-white rounded-full   "/></button>
          </div>
        </div>


        {/* slider */}


      </div>
    </div>
  );
};

export default Banner;
