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
      <h1 className="xxs:my-10 xxs:text-4xl text-center font-ubuntu font-bold md:my-20 md:text-6xl">
        Physicians.
      </h1>
      <section className="lg:px-36">
        <div className="xxs:gap-5 grid w-fit md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 lg:gap-10">
          {doctors.map((doctor, index) => (
            <Doctor doctor={doctor} key={index} />
          ))}
        </div>
      </section>
      <section className="xxs:py-5 flex w-full flex-col place-items-center items-center rounded-xl bg-whiteGreen md:py-20">
        <h1 className="xxs:my-10 xxs:text-4xl font-ubuntu font-bold md:mb-20 md:text-6xl">
          Management.
        </h1>
        <div className="xxs:gap-5 xxs:px-5 grid w-fit md:grid-cols-2 md:grid-rows-1 md:gap-10 md:px-0">
          {management.map((profile, index) => (
            <Profile profile={profile} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
};
