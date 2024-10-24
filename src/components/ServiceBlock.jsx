import React from "react";
import docAndPatient from "../assets/doc-patient1.jpeg";

export const ServiceBlock = ({ service }) => {
  return (
    <div className="rounded-xl px-3 py-3 shadow-md hover:shadow-xl">
      <img
        src={service.image || docAndPatient}
        className="rounded-lg w-full h-36 object-cover mb-3"
      ></img>
      <h1 className="font-ubuntu font-bold text-2xl text-lightGreen">
        {service.name}
      </h1>
      {service.cost ? (
        <p className="text-sm mb-3 opacity-80 text-lightGreen">
          <span className="font-ubuntu font-bold">Cost: </span> {service.cost}
        </p>
      ) : (
        ""
      )}
      <p className="text-xs">{service.description}</p>
    </div>
  );
};
