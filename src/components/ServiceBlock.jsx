import React from "react";
import docAndPatient from "../assets/doc-patient1.jpeg";

export const ServiceBlock = ({ service }) => {
  return (
    <div className="px-3 py-3 shadow-md hover:shadow-xl bg-white h-16 xs:h-auto xs:square text-darkGreen flex flex-col justify-between">
      <img
        src={service.image || docAndPatient}
        className=" w-full h-[75%] object-cover"
      ></img>
      <hr className="border-lightGreen" />
      <div>
        <h1 className="font-ubuntu font-bold text-2xl md:text-xl lg:text-2xl">
          {service.name}
        </h1>
        <p className="text-md opacity-80">
          <span className="font-ubuntu font-bold">Cost: </span> {service.cost}
        </p>
      </div>
    </div>
  );
};
