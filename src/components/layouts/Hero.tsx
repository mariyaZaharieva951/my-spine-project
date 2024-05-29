
const Hero = () => {
  return (
    <div className="container pt-[60px]">
  <div className="relative mx-auto flex flex-col items-center lg:w-[672px] lg:h-[357px]">
    <h1 className="lg:w-full lg:text-8xl text-5xl font-bold text-source-sans z-10 relative text-center">
      <span className="text-nowrap">We love to find</span>
      <img
        src="./assets/effect.png"
        alt="effect"
        className="absolute lg:w-[223px] lg:h-[37px] lg:top-[135px] lg:left-[130px] w-[120px] top-[70px] left-[100px] z-20"
        layout="fill"
      />
      <span className="relative z-10"> solutions</span>
    </h1>
    <p className="text-gray-dark lg:text-sm font-bold text-center pt-[32px]">Elevate your online presence with Spine cutting-edge solutions. Discover limitless possibilities for your digital agency's success.</p>
    <div className="inline-block custom-button bg-green-light mt-[50px]">Start for free</div>
  </div>

      <div className="relative flex items-center justify-center lg:w-[1200px] lg:h-[400px] -mt-[80px]">
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
