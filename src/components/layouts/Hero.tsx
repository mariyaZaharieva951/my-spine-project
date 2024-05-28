const Hero = () => {
  return (
    <div className="container">
  <div className="relative lg:w-[672px] lg:h-[194px] flex justify-center items-center">
    <h1 className="lg:text-7xl text-5xl font-bold text-gray-800 text-source-sans z-10 relative">
      <span className="relative z-10">We love to find </span>
      <img
        src="./assets/effect.png"
        alt="effect"
        className="absolute w-[223px] h-[37px] top-25 left-0 z-20"
        layout="fill"
      />
      <span className="relative z-10">solutions</span>
    </h1>
  </div>

      <div className="relative flex items-center justify-center lg:w-[1200px] lg:h-[400px]">
        <img
          className="lg:w-[374px] lg:h-[374px] absolute left-0"
          src="./assets/hero1.png"
        />
        <img
          className="lg:w-[463px] lg:h-[93px] relative z-10 -mr-10 -ml-10"
          src="./assets/vector.png"
        />
        <img
          className="lg:w-[373px] lg:h-[373px] absolute right-0"
          src="./assets/hero2.png"
        />
      </div>
    </div>
  );
};

export default Hero;
