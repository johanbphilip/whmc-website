import React from 'react';
import defaultProfile from '../assets/profile-pic-default.jpg';

export const Doctor = ({ doctor }) => {
  return (
    <div className="justify-top flex flex-col items-center xxs:gap-2 md:gap-4 lg:gap-7">
      {/* <img
        src={doctor.image ? doctor.image : defaultProfile}
        className="hover-images w-full rounded-lg object-cover md:h-80"
      ></img> */}
      <div className="flex w-full flex-col justify-evenly text-left xxs:gap-0 xxs:text-xs xs:text-sm md:gap-1 md:text-base lg:text-sm">
        <h3 className="font-ubuntu font-medium text-lightGreen xxs:text-lg md:text-2xl">
          {doctor.name}
        </h3>
        <p>
          <span className="font-ubuntu font-medium">CPSO: </span>
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
    <div className="justify-top flex flex-col items-center xxs:gap-2 md:gap-4 lg:gap-7">
      <img
        src={profile.image ? profile.image : defaultProfile}
        className="hover-images w-full rounded-lg object-cover md:h-80"
      ></img>
      <div className="flex w-full flex-col justify-evenly text-left xxs:gap-0 xxs:text-xs xs:text-sm md:gap-1 md:text-base lg:text-sm">
        <h3 className="font-ubuntu font-medium text-lightGreen xxs:text-lg md:text-2xl">
          {profile.name}
        </h3>
        <p>{profile.position}</p>
      </div>
    </div>
  );
};
