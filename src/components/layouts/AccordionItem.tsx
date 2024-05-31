import { useState } from 'react';

export default function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pb-[20px] font-pro">
      <div
        className={`flex justify-between items-center cursor-pointer rounded ${isOpen ? 'bg-green-light text-black-text' : 'bg-gray-light text-black'}`}
        onClick={toggleOpen}
      >
        <h3 className="text-lg text-2xl py-[19px] pl-[10px]">{title}</h3>
        <span className="text-xl pr-[10px]">{isOpen ? '▲' : '▼'}</span>
      </div>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <p className="mt-4 text-black-text py-[19px] px-[10px]">{content}</p>
      </div>
    </div>
  );
}