import Image from "next/image";

const Hero = () => {
  return (
    <div className="container pt-[60px]">
      <div className="relative mx-auto flex flex-col items-center lg:w-[672px] lg:h-[357px]">
        <h1 className="lg:w-full lg:text-8xl text-5xl font-bold text-source-sans z-10 relative text-center">
          <span className="text-nowrap">We love to find</span>
          <div className="absolute lg:w-[285px] lg:h-[37px] w-[120px] h-[47px] lg:top-[136px] lg:left-[120px] top-[60px] left-[85px] z-20">
            <Image
              src="/assets/effect.png"
              alt="effect"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <span className="relative z-10"> solutions</span>
        </h1>
        <p className="text-gray-dark lg:text-sm font-bold text-center pt-[32px]">
          Elevate your online presence with Spine cutting-edge solutions.
          Discover limitless possibilities for your digital agency&aposs
          success.
        </p>
        <div className="inline-block custom-button bg-green-light mt-[50px]">
          Start for free
        </div>
      </div>

      <div className="relative flex items-center justify-center lg:w-[1200px] lg:h-[400px] h-[287px] lg:-mt-[80px] lg:pb-[80px] ">
        {/* Large screen layout */}
        <img
          className="hidden lg:block lg:w-[374px] lg:h-[374px] absolute left-0"
          src="./assets/hero1.png"
        />
        <img
          className="hidden lg:block lg:w-[463px] lg:h-[93px] relative z-10 -mr-10 -ml-10"
          src="./assets/vector.png"
        />
        <img
          className="hidden lg:block lg:w-[373px] lg:h-[373px] absolute right-0"
          src="./assets/hero2.png"
        />

        {/* Mobile layout */}
        <img
          className="lg:hidden w-[184px] h-[184px] absolute left-0 bottom-0 mb-[0px] transform rotate-12"
          src="./assets/hero1.png"
        />
        <img
          className="lg:hidden w-[125.14px] h-[25.03px] absolute left-[60%] transform -translate-x-1/2 -rotate-45 mt-[80px]"
          src="./assets/vector.png"
        />
        <img
          className="lg:hidden w-[176px] h-[176px] absolute right-5 bottom-0 transform mb-[120px] rotate-12"
          src="./assets/hero2.png"
        />
      </div>
    </div>
  );
};

export default Hero;
