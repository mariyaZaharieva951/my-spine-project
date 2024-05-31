"use client";
import AccordionItem from './AccordionItem';

const items = [
  {
    title: 'What is Spine?',
    content: 'Spine is a cutting-edge platform designed to elevate your digital agency`s online presence. It combines impressive design with intuitive features, empowering you to tell your agency`s story in a way that captivates clients.'
  },
  {
    title: 'How can Spine enhance my digital agency`s narrative?',
    content: 'Spine is a cutting-edge platform designed to elevate your digital agency`s online presence. It combines impressive design with intuitive features, empowering you to tell your agency`s story in a way that captivates clients.'
  },
  {
    title: 'What makes Spine different from other website solutions?',
    content: 'Spine is a cutting-edge platform designed to elevate your digital agency`s online presence. It combines impressive design with intuitive features, empowering you to tell your agency`s story in a way that captivates clients.'
  },
  {
    title: 'Is Spine suitable for agencies of all sizes?',
    content: 'Spine is a cutting-edge platform designed to elevate your digital agency`s online presence. It combines impressive design with intuitive features, empowering you to tell your agency`s story in a way that captivates clients.'
  },
  {
    title: 'How can Spine help improve my agency`s creativity?',
    content: 'Spine is a cutting-edge platform designed to elevate your digital agency`s online presence. It combines impressive design with intuitive features, empowering you to tell your agency`s story in a way that captivates clients.'
  }
];

const Accordion = () => {
  return (
    <div className="lg:w-[970px] mx-auto lg:pt-[160px]">
      <h2 className="lg:text-7xl text-5xl font-bold">Got Questions? We`ve Got Answers!</h2>
      <p className="lg:text-base text-sm font-bold lg:pt-[20px] lg:pb-[80px]">Check out the services</p>

      <div className="w-[970px] mx-auto pb-[60px]">
        {items.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default Accordion;