"use client";
import { useState } from "react";
import Image from "next/image";

const Presence = () => {
  const images = [
    "/assets/webdesign.png",
    "/assets/hero1.png",
    "/assets/hero2.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container flex flex-col items-start lg:pt-[120px] pt-[60px] lg:pb-[80px] px-[24px] lg:px-0">
      <div className="flex flex-col lg:flex-row lg:gap-[60px] lg:pb-[80px] pb-[60px]">
        <h2 className="lg:w-full lg:text-7xl text-4xl font-bold text-start text-source-sans z-10 relative text-center">
          <span className="text-nowrap">Elevate Your</span>
          <div className="absolute lg:w-[223px] lg:h-[37px] w-[120px] h-[47px] lg:top-[105px] lg:left-[5px] top-[40px] left-[10px] z-20">
            <Image
              src="/assets/effect.png"
              alt="effect"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <span className="relative z-10"> Digital</span>
          <span className="text-nowrap"> Presence</span>
        </h2>
        <div className="flex items-start flex-col">
          <p className="lg:w-[458px] lg:text-base font-bold text-gray-text lg:pb-[28px] pt-[12px] lg:pt-0 pb-[32px]">
            Crafting digital masterpieces tailored to your brand, we turn
            concepts into visually stunning, user-friendly websites. Elevate
            your online identity with our cutting-edge web design and
            development services.
          </p>
          <button className="custom-button border-2 border-black-text text-black-text">
            See All
          </button>
        </div>
      </div>

      <div className="container flex lg:flex-row flex-col lg:gap-[60px]">
        <div className="relative lg:w-[407px] lg:h-[407px] w-[263px] h-[263px] mx-auto lg:mx-0 rounded-xl bg-white mb-[40px] lg:mb-0">
          <Image
            src={images[currentImageIndex]}
            alt="Web Design"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
        <div className="lg:w-[703px] lg:h-[321px] my-auto">
          <h2 className="lg:text-7xl text-4xl font-bold pb-[20px]">
            Web Design and Development
          </h2>
          <p className="lg:text-base text-sm text-gray pb-[32px] pt-[20px] lg:pt-0">
            Crafting digital masterpieces tailored to your brand, we turn
            concepts into visually stunning, user-friendly websites. Elevate
            your online identity with our cutting-edge web design and
            development services.
          </p>
          <button className="custom-button bg-black-text border-black-text text-white pt-[32px] mb-[40px]">
            See All
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 lg:gap-7 lg:w-full w-[352px] lg:h-[44px] h-auto lg:mt-[40px] mt-[20px] mb-[80px] lg:mb-0">
        <Image
          src="/assets/rectangle.svg"
          alt="Rectangle"
          width={34}
          height={10}
        />

        <div className="flex gap-2 lg:gap-3">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-[10px] h-[10px] rounded-full ${
                currentImageIndex === index ? "bg-black-text" : "bg-gray-bg"
              }`}
            />
          ))}
        </div>

        <Image
          src="/assets/line2.svg"
          alt="Line"
          width={848}
          height={1}
          className="lg:w-[848px] w-[100px] h-[1px] bg-gray-dark"
        />

        <div className="flex gap-3 lg:gap-5">
          <div
            className="rounded-full overflow-hidden border border-gray-500 p-3 cursor-pointer"
            onClick={prevImage}
          >
            <Image
              src="/assets/left.svg"
              alt="Left Arrow"
              width={20}
              height={20}
            />
          </div>
          <div
            className="rounded-full overflow-hidden border border-gray-500 p-3 cursor-pointer"
            onClick={nextImage}
          >
            <Image
              src="/assets/right.svg"
              alt="Right Arrow"
              width={20}
              height={20}
              className="text-gray-text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presence;
