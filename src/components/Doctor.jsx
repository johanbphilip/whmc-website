import React from "react";
import defaultProfile from "../assets/profile-pic-default.jpg";

export const Doctor = ({ doctor }) => {
  return (
    <div className="flex flex-col xs:gap-4 md:gap-7 lg:gap-5 items-center justify-top">
      <img
        src={doctor.image ? doctor.image : defaultProfile}
        className="rounded-lg xs:size-20 md:w-full md:h-80 object-cover"
      ></img>
      <div className="flex flex-col justify-evenly xs:gap-0 w-full md:gap-1 xs:text-xs md:text-sm lg:text-md text-left">
        <h2 className="font-ubuntu font-semibold xs:text-lg md:text-xl text-lightGreen">
          {doctor.name}
        </h2>
        <p className="">
          <span className="font-ubuntu font-bold">CPSO: </span>
          {doctor.cpso}
        </p>
        <p>
          {doctor.daysWorked || "Please contact the clinic for availability"}
        </p>
      </div>
    </div>
  );
};
