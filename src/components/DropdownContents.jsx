import React from 'react';
import { NavLink } from 'react-router-dom';

export const AboutUsContent = () => {
  return (
    <div className="mt-4 flex w-64 flex-col gap-2 rounded-xl bg-white py-1 shadow-lg">
      <NavLink
        to={'/our-team'}
        className={
          'rounded-xl px-5 py-1 duration-100 ease-in hover:text-lightGreen'
        }
      >
        OUR TEAM
      </NavLink>
      <NavLink
        to={'/mission-testimonials'}
        className={
          'rounded-xl px-5 py-1 duration-100 ease-in hover:text-lightGreen'
        }
      >
        MISSION & TESTIMONIALS
      </NavLink>
      <NavLink
        to={'/policies'}
        className={
          'rounded-xl px-5 py-1 duration-100 ease-in hover:text-lightGreen'
        }
      >
        CLINIC POLICIES
      </NavLink>
    </div>
  );
};
export const ServicesContent = () => {
  return (
    <div className="mt-4 flex w-64 flex-col gap-2 rounded-xl bg-white py-1 shadow-lg">
      <NavLink
        to={'/our-services'}
        className={
          'rounded-xl px-5 py-1 duration-100 ease-in hover:text-lightGreen'
        }
      >
        OUR SERVICES
      </NavLink>
      <NavLink
        to={'/clinic-policies'}
        className={
          'rounded-xl px-5 py-1 duration-100 ease-in hover:text-lightGreen'
        }
      >
        HEALTH RESOURCES
      </NavLink>
    </div>
  );
};
