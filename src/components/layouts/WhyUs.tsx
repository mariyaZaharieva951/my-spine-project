const WhyUs = () => {
  return (
    <div className="grid grid-cols-12 gap-4 lg:pb-[60px] bg-white px-[24px] lg:px-0">
      <div className="container col-span-12 flex flex-col items-center lg:mt-[80px] lg:mb-[80px]">
        <div className="flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-24">
          <div className="lg:w-[670px] lg:h-[494px] text-center lg:text-left">
            <h2 className="lg:text-7xl text-4xl font-bold font-pro pb-[20px]">
              Why Choose Us?
            </h2>
            <p className="lg:text-base text-sm text-gray-text">
              At DigitalBoostPro, we`re on a mission to empower businesses with
              the digital tools and expertise they need to thrive in the
              ever-evolving online landscape.
            </p>

            <ul className="py-[40px] space-y-4 text-left">
              <li className="flex items-start lg:text-base text-sm text-gray-text">
                <img src="./assets/point.png" className="mr-2 mt-1" />
                <span>
                  <span className="font-bold text-black-text">Expertise: </span>
                  Our team of professionals brings years of experience and
                  expertise in DigitalBoostPro.
                </span>
              </li>
              <li className="flex items-start lg:text-base text-sm text-gray-text">
                <img src="./assets/point.png" className="mr-2 mt-1" />
                <span>
                  <span className="font-bold text-black-text">
                    Commitment:{" "}
                  </span>
                  We are committed to like a quality, innovation, customer
                  satisfaction, etc.
                </span>
              </li>
              <li className="flex items-start lg:text-base text-sm text-gray-text">
                <img src="./assets/point.png" className="mr-2 mt-1" />
                <span>
                  <span className="font-bold text-black-text">
                    Client-Centric Approach:
                  </span>
                  Our clients are at the heart of everything we do. We listen,
                  understand, and tailor solutions to meet their specific needs
                </span>
              </li>
              <li className="flex items-start lg:text-base text-sm text-gray-text">
                <img src="./assets/point.png" className="mr-2 mt-1" />
                <span>
                  <span className="font-bold text-black-text">Innovation:</span>
                  We stay up-to-date with the latest industry trends and
                  technologies, ensuring our clients always receive cutting-edge
                  solutions.
                </span>
              </li>
            </ul>

            <div className="inline-block custom-button bg-green-light">
              About Us
            </div>
          </div>
          <div className="lg:w-[485px] lg:h-[485px] mt-[20px] lg:mt-0">
            <img src="./assets/choose.png" alt="choose" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
