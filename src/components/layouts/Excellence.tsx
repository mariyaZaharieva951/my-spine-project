const Excellence = () => {
  return (
    <div className="container flex flex-col items-start pt-[80px] pb-[160px]">
      <div className="flex lg:flex-row flex-col lg:gap-6px">
        <div className="lg:w-[670px] h-auto">
          <h2 className="lg:text-7xl text-5xl font-bold pb-3">
            Unlocking Digital Excellence
          </h2>
          <p className="lg:text-base text-sm text-gray-text font-bold">
            At Spine, we're on a mission to empower businesses with the digital
            tools and expertise they need to thrive in the ever-evolving online
            landscape.
          </p>
          <ul className="font-bold py-[40px] space-y-4">
            <li className="flex items-start lg:text-base text-sm text-gray-text">
              <img src="./assets/point.png" className="mr-2 mt-1" />
              <span>
                <span className="font-bold text-black-text">Our Team: </span>
                Introduce the core members of your team, their expertise, and
                their commitment to your clients' success.
              </span>
            </li>
            <li className="flex items-start lg:text-base text-sm text-gray-text">
              <img src="./assets/point.png" className="mr-2 mt-1" />
              <span>
                <span className="font-bold text-black-text">Core Values: </span>
                Share your company's core values and the principles that guide
                your work.
              </span>
            </li>
            <li className="flex items-start lg:text-base text-sm text-gray-text">
              <img src="./assets/point.png" className="mr-2 mt-1" />
              <span>
                <span className="font-bold text-black-text">
                  Client-Centric Approach:{" "}
                </span>
                Emphasize your dedication to delivering outstanding service and
                results for your clients.
              </span>
            </li>
          </ul>
        </div>
        <img className="lg:w-[467px] lg:h-[467px]" src="./assets/digital.png" />
      </div>
      <div className="inline-block custom-button bg-green-light">About us</div>
    </div>
  );
};

export default Excellence;