import React from "react";
import { NavLink } from "react-router-dom";

export const AboutUsContent = () => {
  return (
    <div className="w-64 bg-white py-1 shadow-lg flex flex-col mt-4 gap-2 rounded-xl">
      <NavLink
        to={"/our-team"}
        className={
          "px-5 py-1 hover:text-lightGreen rounded-xl ease-in duration-100"
        }
      >
        OUR TEAM
      </NavLink>
      <NavLink
        to={"/mission-testimonials"}
        className={
          "px-5 py-1 hover:text-lightGreen rounded-xl ease-in duration-100"
        }
      >
        MISSION & TESTIMONIALS
      </NavLink>
      <NavLink
        to={"/policies"}
        className={
          "px-5 py-1 hover:text-lightGreen rounded-xl ease-in duration-100"
        }
      >
        CLINIC POLICIES
      </NavLink>
    </div>
  );
};
export const ServicesContent = () => {
  return (
    <div className="w-64 bg-white py-1 shadow-lg flex flex-col mt-4 gap-2 rounded-xl">
      <NavLink
        to={"/our-services"}
        className={
          "px-5 py-1 hover:text-lightGreen rounded-xl ease-in duration-100"
        }
      >
        OUR SERVICES
      </NavLink>
      <NavLink
        to={"/clinic-policies"}
        className={
          "px-5 py-1 hover:text-lightGreen rounded-xl ease-in duration-100"
        }
      >
        HEALTH RESOURCES
      </NavLink>
    </div>
  );
};
