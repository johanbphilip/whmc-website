import React from 'react';
import { NavLink } from 'react-router-dom';

export const AboutUsMobileContent = ({ closeAll }) => {
  return (
    <div className="left-0 flex flex-col gap-3 rounded-xl bg-white">
      <NavLink
        to={'/our-team'}
        className={'dropdown-hover text-sm'}
        onClick={closeAll}
      >
        OUR TEAM
      </NavLink>
      <NavLink
        to={'/mission-testimonials'}
        className={'dropdown-hover text-sm'}
        onClick={closeAll}
      >
        MISSION & TESTIMONIALS
      </NavLink>
      <NavLink
        to={'/policies'}
        className={'dropdown-hover text-sm'}
        onClick={closeAll}
      >
        CLINIC POLICIES
      </NavLink>
    </div>
  );
};

export const ServicesMobileContent = ({ closeAll }) => {
  return (
    <div className="left-0 flex flex-col gap-3 rounded-xl bg-white">
      <NavLink
        to={'/services'}
        className={'dropdown-hover text-sm'}
        onClick={closeAll}
      >
        OUR SERVICES
      </NavLink>
      <NavLink
        to={'/health-resources'}
        className={'dropdown-hover text-sm'}
        onClick={closeAll}
      >
        HEALTH RESOURCES
      </NavLink>
    </div>
  );
};
