import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="xs:hidden lg:flex justify-between w-full font-serif items-center ">
      <h1 className="font-ubuntu font-bold text-xl hover:text-lightGreen">
        <NavLink to={"/"}>WHMC</NavLink>
      </h1>
      <ul className="flex flex-row justify-evenly gap-3 ">
        <NavLink
          to={"/"}
          className={
            "px-5 py-1 border border-transparent hover:border-lightGreen hover:text-lightGreen rounded-xl ease-in duration-200"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to={"/services"}
          className={
            "px-5 py-1 border border-transparent hover:border-lightGreen hover:text-lightGreen rounded-xl ease-in duration-200"
          }
        >
          SERVICES
        </NavLink>
        <NavLink
          to={"/our-team"}
          className={
            "px-5 py-1 border border-transparent hover:border-lightGreen hover:text-lightGreen rounded-xl ease-in duration-200"
          }
        >
          OUR TEAM
        </NavLink>
        <NavLink
          to={"/hours"}
          className={
            "px-5 py-1 border border-transparent hover:border-lightGreen hover:text-lightGreen rounded-xl ease-in duration-200"
          }
        >
          HOURS{" "}
        </NavLink>
      </ul>
      <NavLink
        to={"/plan-a-visit"}
        className={
          " bg-darkGreen text-white px-5 py-1 border hover:border-lightGreen hover:text-lightGreen hover:bg-transparent rounded-xl ease-in duration-200"
        }
      >
        PLAN A VISIT
      </NavLink>
    </nav>
  );
};
