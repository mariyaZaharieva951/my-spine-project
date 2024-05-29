const Posters = () => {
  return (
    <div className="container lg:h-[100px] flex justify-between items-center relative py-[30px]">
      <div className="absolute inset-x-0 top-0 flex items-center w-full">
        <div className="w-1 h-1 bg-gray-light rounded-full"></div>
        <div className="flex-grow h-[1px] bg-gray-light"></div>
        <div className="w-1 h-1 bg-gray-light rounded-full"></div>
      </div>
      <img className="lg:w-[156.65px] lg:h-[40px]" src="./assets/l1.png" />
      <img className="lg:w-[186.67px] lg:h-[40px]" src="./assets/l2.png" />
      <img className="lg:w-[150.86px] lg:h-[40px]" src="./assets/l3.png" />
      <img className="lg:w-[163.9px] lg:h-[40px]" src="./assets/l4.png" />
      <img className="lg:w-[162.93px] lg:h-[40px]" src="./assets/l5.png" />

      <div className="absolute inset-x-0 bottom-0 flex items-center w-full">
        <div className="w-1 h-1 bg-gray-light rounded-full"></div>
        <div className="flex-grow h-[1px] bg-gray-light"></div>
        <div className="w-1 h-1 bg-gray-light rounded-full"></div>
      </div>
    </div>
  );
};

export default Posters;
