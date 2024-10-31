import { React, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export const Accordion = ({ summary, detail }) => {
  const [active, setActive] = useState(false);
  function accordionTitleClicked() {
    setActive(!active);
  }
  return (
    <section
      className={`flex flex-col gap-5 font-serif font-medium text-white bg-lightGreen py-4 px-5 border-b border-b-white first:rounded-t-md last:rounded-b-md ${
        active ? "my-2 first:mt-0" : ""
      } `}
    >
      <h2 className="flex justify-between place-items-center font-ubuntu text-xl">
        {summary}
        <span onClick={accordionTitleClicked}>
          <RiArrowDropDownLine
            className={` ${
              active ? "transform rotate-180" : ""
            } transition-transform duration-1 ease-in-out size-9 hover:cursor-pointer`}
          />
        </span>
      </h2>
      <p className={`${active ? "block" : "hidden"} font-normal`}>
        {" "}
        {typeof detail === "function" ? detail() : detail}
      </p>
    </section>
  );
};
