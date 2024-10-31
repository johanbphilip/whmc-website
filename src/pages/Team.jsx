import defaultProfile from "../assets/profile-pic-default.jpg";
import { doctors as doctorsProfile } from "../assets/data.jsx";
import { useState } from "react";

export const Team = () => {
  const [doctors, setDoctors] = useState(doctorsProfile);
  return (
    <main className="mt-20 flex flex-col place-items-center py-20 px-72 text-darkGreen font-serif">
      <h1 className="font-ubuntu font-bold text-6xl mb-20">Our Team.</h1>
      <div className="flex flex-col gap-10">
        {doctors.map((doctor, index) => (
          <div
            className="flex flex-row justify-evenly items-center"
            key={index}
          >
            <img
              src={doctor.image || defaultProfile}
              className="rounded-full size-44 object-cover mr-10"
            ></img>
            <div className="flex flex-col justify-evenly gap-1 w-full">
              <h2 className="font-ubuntu font-bold text-2xl text-lightGreen">
                {doctor.name}
              </h2>
              <p className="text-lg">
                <span className="font-ubuntu font-bold">CPSO: </span>
                {doctor.cpso}
              </p>
              <p>
                <span className="font-ubuntu font-bold text-lg">
                  Available Days:{" "}
                </span>
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
