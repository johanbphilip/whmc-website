import {
  doctors as doctorsList,
  management as managementList,
} from '../assets/data.jsx';
import { useState } from 'react';
import { Doctor, Profile } from '../components/Doctor.jsx';

export const Team = () => {
  const [doctors, setDoctors] = useState(doctorsList);
  const [management, setManagement] = useState(managementList);
  return (
    <main className="main-container">
      <h1 className="text-center font-ubuntu font-bold xs:my-10 xs:text-4xl md:my-20 md:text-6xl">
        Physicians.
      </h1>
      <section className="lg:px-36">
        <div className="grid w-fit xs:gap-5 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 lg:gap-10">
          {doctors.map((doctor, index) => (
            <Doctor doctor={doctor} key={index} />
          ))}
        </div>
      </section>
      <section className="flex w-full flex-col place-items-center items-center rounded-xl bg-whiteGreen xs:py-5 md:py-20">
        <h1 className="font-ubuntu font-bold xs:my-10 xs:text-4xl md:mb-20 md:text-6xl">
          Management.
        </h1>
        <div className="grid w-fit xs:gap-5 xs:px-5 md:grid-cols-2 md:grid-rows-1 md:gap-10 md:px-0">
          {management.map((profile, index) => (
            <Profile profile={profile} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
};
