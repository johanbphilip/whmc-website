import React from 'react';
import { NavLink } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="flex flex-col place-items-center px-10 py-20 font-serif xs:mt-10 md:mt-20">
      <h1 className="pb-20 font-ubuntu text-6xl font-bold text-red-600">
        404 - Page Not Found
      </h1>
      <p className="text-xl">
        Sorry but the page you're looking for does not exist.
      </p>
      <p className="text-xl">
        Please click on this link to be redirected to our{' '}
        <NavLink to={'/'} className={'underline hover:text-lightGreen'}>
          Home Page
        </NavLink>
      </p>
    </div>
  );
};
