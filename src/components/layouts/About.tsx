"use client";
import Image from "next/image";

import Posters from "./Posters";

const About = ({ heading1, heading2, heading3, effectClassName }: { heading1: string; heading2: string; heading3: string,  effectClassName?: string; }) => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4  bg-white rounded-lg font-poppins">
        <div className="col-span-12 flex flex-col items-center">
          <h1 className="lg:w-[918px] w-[390px] lg:text-[88px] text-5xl font-bold lg:mt-[80px] mt-[40px] mb-[32px] text-center font-pro lg:px-0 px-[24px]">
            <span className="lg:text-nowrap">{heading1}</span>
            <div className={`absolute z-20 ${effectClassName}`}>
              <Image
                src="/assets/effect.png"
                alt="effect"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                
              />
            </div>
            <span className="relative z-10"> {heading2}</span>
            <span className="lg:text-nowrap"> {heading3}</span>
          </h1>
          <p className="lg:w-[672px] lg:h-[42px] text-gray-text text-center lg:mb-[80px] px-[24px] lg:px-[0px]  ">
            At DigitalBoostPro, we`re not just a digital marketing agency; we`re
            your strategic partner in navigating the dynamic landscape of online
            success.
          </p>
        </div>
      </div>
      <div className="lg:my-[80px] my-[20px]">
        <Posters />
      </div>
    </div>
  );
};

export default About;
