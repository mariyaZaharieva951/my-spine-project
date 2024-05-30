const Presence = () => {
  return (
    <div className="container flex flex-col items-start pt-[120px] pb-[160px]">
      <div className="flex gap-[60px] pb-[80px]">
        <h2 className="lg:text-7xl text-5xl font-bold">
          Elevate Your Digital Presence
        </h2>
        <div className="flex items-start flex-col">
          <p className="lg:w-[458px] lg:text-base font-bold text-gray-text pb-[28px]">
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

      <div className="container flex lg:flex-row flex-col lg:gap-6px">
        <img
          className="lg:w-[407px] lg:h-[407px]"
          src="./assets/webdesign.png"
        />
        <div className="lg:w-[703px] lg:h-[321px] my-auto">
          <h2 className="lg:text-7xl text-5xl font-bold pb-[20px]">
            Web Design and Development
          </h2>
          <p className="lg:text-base text-sm text-gray pb-[32px]">
            Crafting digital masterpieces tailored to your brand, we turn
            concepts into visually stunning, user-friendly websites. Elevate
            your online identity with our cutting-edge web design and
            development services.
          </p>
          <button className="custom-button bg-black-text border-black-text text-white">See All</button>
        </div>
      </div>
    </div>
  );
};

export default Presence;
