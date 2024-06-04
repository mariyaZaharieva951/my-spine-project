const Presence = () => {
  return (
    <div className="container flex flex-col items-start lg:pt-[120px] pt-[60px] lg:pb-[80px] px-[24px] lg:px-0">
      <div className="flex flex-col lg:flex-row lg:gap-[60px] lg:pb-[80px] pb-[60px]">
        <h2 className="lg:text-7xl text-4xl font-bold">
          Elevate Your Digital Presence
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
      <div className="lg:w-full 342px] h-[44px] lg:mt-[40px]">
        <img src="./assets/line.png" className="w-full object-contain" />
      </div>
    </div>
  );
};

export default Presence;
