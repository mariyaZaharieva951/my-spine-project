import Image from "next/image";

const Presence = () => {
  return (
    <div className="container flex flex-col items-start lg:pt-[120px] pt-[60px] lg:pb-[80px] px-[24px] lg:px-0">
      <div className="flex flex-col lg:flex-row lg:gap-[60px]  lg:pb-[80px] pb-[60px]">
        <h2 className="lg:w-full lg:text-7xl text-4xl font-bold lg:text-start text-source-sans z-10 relative text-center">
          <span className="text-nowrap">Elevate Your</span>
          <div className="absolute lg:w-[223px] lg:h-[37px] w-[120px] h-[47px] lg:top-[105px] lg:left-[5px] top-[60px] left-[85px] z-20">
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
        <img
          className="lg:w-[407px] lg:h-[407px] lg:border-none w-[263.16px] h-[263.29px] mx-auto lg:mx-0 rounded-xl bg-white mb-[40px] lg:mb-0"
          src="./assets/webdesign.png"
        />
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
      <div className="flex items-center gap-7 lg:w-full w-[352px] h-[44px] lg:mt-[40px]">
        <div className="flex gap-3">
          <img
            src="/assets/rectangle.svg"
            alt="Rectangle"
            className="w-[34px] h-[10px]"
          />
          <img
            src="/assets/circle.svg"
            alt="Circle"
            className="w-[10px] h-[10px]"
          />
          <img
            src="/assets/circle.svg"
            alt="Circle"
            className="w-[10px] h-[10px]"
          />
          <img
            src="/assets/circle.svg"
            alt="Circle"
            className="w-[10px] h-[10px]"
          />
        </div>

        <img src="/assets/line2.svg" alt="Line" className="w-[848px] h-[1px]" />
        <div className="flex gap-5">
          <div className="rounded-full overflow-hidden border border-gray-500 p-3">
            <Image
              src="/assets/left.svg"
              alt="Left Arrow"
              width={20}
              height={20}
            />
          </div>
          <div className="rounded-full overflow-hidden border border-gray-500 p-3">
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
