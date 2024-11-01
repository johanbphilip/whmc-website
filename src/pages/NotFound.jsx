import React from "react";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="xs:mt-10 md:mt-20 flex flex-col place-items-center py-20 px-10 font-serif">
      <h1 className="font-ubuntu font-bold text-6xl pb-20 text-red-600">
        404 - Page Not Found
      </h1>
      <p className="text-xl">
        Sorry but the page you're looking for does not exist.
      </p>
      <p className="text-xl">
        Please click on this link to be redirected to our{" "}
        <NavLink to={"/"} className={"underline hover:text-lightGreen"}>
          Home Page
        </NavLink>
      </p>
    </div>
  );
};
