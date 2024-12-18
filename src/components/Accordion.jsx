import { React, useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto rounded-xl xs:w-full md:w-3/4 lg:w-1/2">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.summary}
          content={item.detail}
          isActive={activeIndex === index}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

const AccordionItem = ({ title, content, isActive, onClick }) => {
  return (
    <div className="my-2 rounded-xl bg-darkGreen text-white">
      <div className="flex cursor-pointer xs:p-3 md:p-5" onClick={onClick}>
        <h2 className="flex w-full place-items-center justify-between font-ubuntu font-semibold xs:text-base lg:text-xl">
          {title}
        </h2>
        <RiArrowDropDownLine
          className={` ${
            isActive ? 'rotate-180 transform' : ''
          } size-9 transition-transform duration-300 ease-in-out`}
        />
      </div>
      {isActive && (
        <p className="font-serif font-normal xs:p-3 xs:text-xs md:p-5 md:text-sm">
          {typeof content === 'function' ? content() : content}
        </p>
      )}
    </div>
  );
};
