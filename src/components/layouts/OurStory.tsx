const OurStory = () => {
    return (
      <div className="grid grid-cols-12 gap-4 p-6 bg-white rounded-lg shadow-lg">
    <div className="container col-span-12 flex flex-col items-center lg:mt-[80px] lg:mb-[160px] my-[40px]">
      <div className="flex flex-col lg:flex-row justify-center items-center space-x-0 lg:gap-[100px]">
        <div className="lg:w-[470px] lg:h-[339px] text-center lg:text-left">
          <h2 className="lg:text-7xl text-4xl font-bold">Our story</h2>
          <p className="lg:text-base text-sm text-gray-text lg:mt-[32px] lg:mb-[49px]">Our journey began with a vision to Problem finding and solution. Since then, we've grown steadily, earning a reputation for excellence in the DigitalBoostPro sector. Over the years, we`ve worked with numerous clients, helping them achieve has been to help people solve their problems.</p>
          <div className="custom-button">Learn more</div>
        </div>
        <div className="lg:w-[400px] lg:h-[353px]">
          <img src="./assets/story.png" alt="story" />
        </div>
      </div>
    </div>
  </div>
    );
  };
  
  export default OurStory;