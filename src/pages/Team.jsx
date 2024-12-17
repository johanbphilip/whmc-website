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
    <main className="mb-5 flex flex-col place-items-center px-5 font-serif text-darkGreen xs:mt-10 md:mt-20">
      <h1 className="font-ubuntu font-bold xs:mt-10 xs:text-4xl md:mb-10 md:mt-20 md:text-6xl">
        Physicians.
      </h1>
      <section className="xs:py-10 md:px-36 lg:py-20">
        <div className="grid w-fit xs:gap-5 md:grid-cols-3 md:grid-rows-2 md:gap-10">
          {doctors.map((doctor, index) => (
            <Doctor doctor={doctor} key={index} />
          ))}
        </div>
      </section>
      <section className="w-full place-items-center rounded-xl bg-whiteGreen xs:py-5 md:py-20">
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
