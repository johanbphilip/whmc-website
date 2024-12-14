import { React, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-1/2 mx-auto mt-5 rounded-xl mb-5">
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
    <div className="text-white mb-2 bg-darkGreen rounded-xl">
      <div className="cursor-pointer flex p-5 " onClick={onClick}>
        <h2 className="flex justify-between place-items-center font-ubuntu font-semibold xs:text-sm lg:text-xl w-full">
          {title}
        </h2>
        <RiArrowDropDownLine
          className={` ${
            isActive ? "transform rotate-180" : ""
          } transition-transform duration-300 ease-in-out size-9`}
        />
      </div>
      {isActive && (
        <p className="font-normal font-serif p-5 text-sm ">
          {typeof content === "function" ? content() : content}
        </p>
      )}
    </div>
  );
};
