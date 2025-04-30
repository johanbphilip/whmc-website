import React from 'react';
import { NavLink } from 'react-router';

export const AboutUsContent = () => {
  return (
    <div className="mt-4 flex w-64 flex-col gap-2 rounded-xl bg-white py-1 shadow-lg">
      <NavLink to={'/our-team'} className={'dropdown-hover'}>
        OUR TEAM
      </NavLink>
      <NavLink to={'/mission-testimonials'} className={'dropdown-hover'}>
        MISSION & REVIEWS
      </NavLink>
      {/* <NavLink to={'/policies'} className={'dropdown-hover'}>
        CLINIC POLICIES
      </NavLink> */}
    </div>
  );
};
export const ServicesContent = () => {
  return (
    <div className="mt-4 flex w-64 flex-col gap-2 rounded-xl bg-white py-1 shadow-lg">
      <NavLink to={'/our-services'} className={'dropdown-hover'}>
        OUR SERVICES
      </NavLink>
      {/* <NavLink to={'/clinic-policies'} className={'dropdown-hover'}>
        HEALTH RESOURCES
      </NavLink> */}
    </div>
  );
};
