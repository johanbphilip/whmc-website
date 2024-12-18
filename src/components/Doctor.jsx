import React from 'react';
import defaultProfile from '../assets/profile-pic-default.jpg';

export const Doctor = ({ doctor }) => {
  return (
    <div className="justify-top xxs:gap-2 flex flex-col items-center md:gap-4 lg:gap-7">
      <img
        src={doctor.image ? doctor.image : defaultProfile}
        className="hover-images w-full rounded-lg object-cover md:h-80"
      ></img>
      <div className="xxs:gap-0 xxs:text-xs flex w-full flex-col justify-evenly text-left xs:text-sm md:gap-1 md:text-base lg:text-sm">
        <h2 className="xxs:text-lg font-ubuntu font-medium text-lightGreen md:text-2xl">
          {doctor.name}
        </h2>
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
    <div className="justify-top xxs:gap-2 flex flex-col items-center md:gap-4 lg:gap-7">
      <img
        src={profile.image ? profile.image : defaultProfile}
        className="hover-images w-full rounded-lg object-cover md:h-80"
      ></img>
      <div className="xxs:gap-0 xxs:text-xs flex w-full flex-col justify-evenly text-left xs:text-sm md:gap-1 md:text-base lg:text-sm">
        <h2 className="xxs:text-lg font-ubuntu font-medium text-lightGreen md:text-2xl">
          {profile.name}
        </h2>
        <p>{profile.position}</p>
      </div>
    </div>
  );
};
