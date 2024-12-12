import { React, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export const Accordion = ({ summary, detail }) => {
  const [active, setActive] = useState(false);
  function accordionTitleClicked() {
    setActive(!active);
  }
  return (
    <section
      className={`flex flex-col xs:gap-2 lg:gap-5 font-serif font-medium text-white bg-lightGreen xs:py-2 xs:px-3 lg:py-4 lg:px-5 border-b border-b-white first:rounded-t-md last:rounded-b-md ${
        active ? "xs:my-1 lg:my-2 first:mt-0" : ""
      } `}
    >
      <h2 className="flex justify-between place-items-center font-ubuntu xs:text-sm lg:text-xl xs:w-full ">
        {summary}
        <span onClick={accordionTitleClicked}>
          <RiArrowDropDownLine
            className={` ${
              active ? "transform rotate-180" : ""
            } transition-transform duration-1 ease-in-out size-9 hover:cursor-pointer`}
          />
        </span>
      </h2>
      <p
        className={`${
          active ? "block" : "hidden"
        } font-normal xs:text-xs lg:text-base`}
      >
        {" "}
        {typeof detail === "function" ? detail() : detail}
      </p>
    </section>
  );
};
