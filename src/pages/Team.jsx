import { doctors as doctorsProfile, management } from "../assets/data.jsx";
import { useState } from "react";
import { Doctor } from "../components/Doctor.jsx";
import { Profile } from "../components/Profile.jsx";

export const Team = () => {
  const [doctors, setDoctors] = useState(doctorsProfile);
  return (
    <main className="xs:mt-10 md:mt-20 flex flex-col place-items-center text-darkGreen font-serif">
      <section className="place-items-center px-40 xs:py-10 lg:py-20">
        <h1 className="font-ubuntu font-bold xs:text-4xl md:text-6xl xs:mb-10 md:mb-20">
          Physicians.
        </h1>
        <div className="grid grid-rows-2 grid-cols-3 gap-10 w-fit">
          {doctors.map((doctor, index) => (
            <Doctor doctor={doctor} key={index} />
          ))}
        </div>
      </section>
      <section className=" bg-whiteGreen w-full place-items-center py-20">
        <h1 className="font-ubuntu font-bold xs:text-4xl md:text-6xl xs:m-10 md:mb-20">
          Management.
        </h1>
        <div className="grid grid-rows-1 grid-cols-2 gap-10 w-fit">
          {management.map((profile, index) => (
            <Profile profile={profile} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
};
