import defaultProfile from "../assets/profile-pic-default.jpg";
import { doctors as doctorsProfile } from "../assets/data.jsx";
import { useState } from "react";

export const Team = () => {
  const [doctors, setDoctors] = useState(doctorsProfile);
  return (
    <main className="xs:mt-10 md:mt-20 flex flex-col place-items-center xs:py-10 xs:px-10 md:px-6 lg:px-60 lg:py-20  text-darkGreen font-serif">
      <h1 className="font-ubuntu font-bold xs:text-4xl md:text-6xl xs:mb-10 md:mb-20">
        Our Team.
      </h1>
      <div className="flex flex-col gap-10">
        {doctors.map((doctor, index) => (
          <div
            className="flex flex-row xs:gap-4 md:gap-7 lg:gap-10 items-center"
            key={index}
          >
            <img
              src={doctor.image || defaultProfile}
              className="rounded-full xs:size-20 md:size-44 object-cover"
            ></img>
            <div className="flex flex-col justify-evenly xs:gap-0 md:gap-1 w-full xs:text-xs md:text-sm lg:text-lg">
              <h2 className="font-ubuntu font-bold xs:text-lg md:text-2xl text-lightGreen">
                {doctor.name}
              </h2>
              <p className="">
                <span className="font-ubuntu font-bold">CPSO: </span>
                {doctor.cpso}
              </p>
              <p>
                <span className="font-ubuntu font-bold">Available Days: </span>
                {doctor.daysWorked || "Please contact the clinic to find out"}
              </p>
              <hr />
              <p>{doctor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
