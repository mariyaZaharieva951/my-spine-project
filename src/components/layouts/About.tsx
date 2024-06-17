"use client";
import Image from "next/image";

import Posters from "./Posters";

const About = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 p-6 bg-white rounded-lg font-poppins">
        <div className="col-span-12 flex flex-col items-center">
          <h1 className="lg:text-[88px] text-5xl font-bold lg:mt-[80px] mt-[40px] mb-[32px] font-pro">
          <span className="text-nowrap">About Us</span>
          <div className="absolute lg:w-[263px] lg:h-[37px] w-[121px] h-[17px] lg:top-[260px] lg:left-[610px] top-[170px] left-[110px] z-20">
            <Image
              src="/assets/effect.png"
              alt="effect"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </h1>
          <p className="lg:w-[672px] lg:h-[42px] text-gray-text text-center lg:mb-[80px] mb-[40px]">
            At DigitalBoostPro, we`re not just a digital marketing agency; we`re
            your strategic partner in navigating the dynamic landscape of online
            success.
          </p>
        </div>
      </div>
      <div className="my-[80px]">
        <Posters />
      </div>
      
    </div>
  );
};

export default About;
