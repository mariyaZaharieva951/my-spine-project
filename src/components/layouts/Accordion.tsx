"use client";
import AccordionItem from "./AccordionItem";
import Image from 'next/image';

const items = [
  {
    title: "What is Spine?",
    content: "Spine is a cutting-edge platform designed to elevate your digital agency&aps online presence. It combines impressive design with intuitive features, empowering you to tell your agency`'`s story in a way that captivates clients."
  },
  {
    title: "How can Spine enhance my digital agency&aps narrative?",
    content: "Spine is a cutting-edge platform designed to elevate your digital agency&aps online presence. It combines impressive design with intuitive features, empowering you to tell your agency`'`s story in a way that captivates clients."
  },
  {
    title: "What makes Spine different from other website solutions?",
    content: "Spine is a cutting-edge platform designed to elevate your digital agency&aps online presence. It combines impressive design with intuitive features, empowering you to tell your agency`'`s story in a way that captivates clients."
  },
  {
    title: "Is Spine suitable for agencies of all sizes?",
    content: "Spine is a cutting-edge platform designed to elevate your digital agency&aps online presence. It combines impressive design with intuitive features, empowering you to tell your agency`'`s story in a way that captivates clients."
  },
  {
    title: "How can Spine help improve my agency&aps creativity?",
    content: "Spine is a cutting-edge platform designed to elevate your digital agency&aps online presence. It combines impressive design with intuitive features, empowering you to tell your agency`'`s story in a way that captivates clients."
  }
];

const Accordion = () => {
  return (
    <div className="lg:w-[970px] mx-auto lg:pt-[160px] px-[24px] lg:px-0">
      <h2 className="lg:w-full lg:text-7xl text-4xl lg:text-start font-bold text-source-sans z-10 relative text-center">
      <span className="text-nowrap">Got Questions? We&apos;ve Got</span>
      <div className="absolute lg:w-[223px] lg:h-[37px] w-[120px] h-[47px] lg:top-[100px] lg:left-[55px] top-[60px] left-[85px] z-20">
            <Image
              src="/assets/effect.png"
              alt="effect"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
      <span className="relative z-10">Answers!</span>
    </h2>
      
      <p className="lg:text-base text-sm font-bold pt-[20px] lg:pb-[80px] pb-[40px] ">Check out the services</p>

      <div className="lg:w-[970px] mx-auto pb-[40px]">
        {items.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default Accordion;