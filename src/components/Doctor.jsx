import React from 'react';
import defaultProfile from '../assets/profile-pic-default.jpg';

export const Doctor = ({ doctor }) => {
  return (
    <div className="justify-top flex flex-col items-center xs:gap-4 md:gap-7 lg:gap-5">
      <img
        src={doctor.image ? doctor.image : defaultProfile}
        className="w-full rounded-lg object-cover md:h-80"
      ></img>
      <div className="lg:text-md flex w-full flex-col justify-evenly text-left xs:gap-0 xs:text-xs md:gap-1 md:text-sm">
        <h2 className="font-ubuntu font-semibold text-lightGreen xs:text-lg md:text-xl">
          {doctor.name}
        </h2>
        <p className="">
          <span className="font-ubuntu font-bold">CPSO: </span>
          {doctor.cpso}
        </p>
        <p>
          {doctor.daysWorked || 'Please contact the clinic for availability'}
        </p>
      </div>
    </div>
  );
};

export const Profile = ({ profile }) => {
  return (
    <div className="justify-top flex flex-col items-center xs:gap-4 md:gap-7 lg:gap-5">
      <img
        src={profile.image ? profile.image : defaultProfile}
        className="w-full rounded-lg object-cover md:h-80"
      ></img>
      <div className="lg:text-md flex w-full flex-col justify-evenly text-left xs:gap-0 xs:text-xs md:gap-1 md:text-sm">
        <h2 className="font-ubuntu font-semibold text-lightGreen xs:text-lg md:text-xl">
          {profile.name}
        </h2>
        <p className="">{profile.position}</p>
      </div>
    </div>
  );
};
