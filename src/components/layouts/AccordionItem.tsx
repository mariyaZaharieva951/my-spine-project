import { useState } from 'react';

export default function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pb-[20px] font-pro">
      <div
        className={"flex justify-between items-center cursor-pointer rounded-md ${isOpen ? 'bg-green-light text-black-text' : 'bg-gray-light text-black'}"}
        onClick={toggleOpen}
      >
        <h3 className="lg:text-2xl text-sm font-bold lg:py-[19px] py-[10px] pl-[10px]">{title}</h3>
        <span className="text-xl pr-[10px]">{isOpen ? '▲' : '▼'}</span>
      </div>
      <div className={"overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-screen mt-' : 'max-h-0'}"}>
        <p className="lg:text-xl text-xs font-bold text-gray-text bg-gray-light rounded-md px-[10px]">{content}</p>
      </div>
    </div>
  );
}