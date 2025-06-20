import { React } from 'react';
import { NavLink } from 'react-router';
import { DropdownLink } from './DropdownLink';
import { AboutUsContent, ServicesContent } from './DropdownContents';

export const NavBar = () => {
  return (
    <nav className="w-full justify-between font-serif xxs:hidden lg:flex">
      <p className="place-content-center font-ubuntu text-xl font-bold hover:text-lightGreen">
        <NavLink to={'/'} className={'px-5 py-1'}>
          WHMC
        </NavLink>
      </p>
      <ul className="flex flex-row items-center justify-evenly gap-3">
        <NavLink
          to={'/'}
          className={
            'rounded-xl border border-transparent px-5 py-1 duration-200 ease-in hover:border-lightGreen hover:text-lightGreen'
          }
        >
          HOME
        </NavLink>
        <DropdownLink href={'/our-team'} DropdownContent={AboutUsContent}>
          ABOUT US
        </DropdownLink>
        {/* <DropdownLink href={'/services'} DropdownContent={ServicesContent}>
          SERVICES
        </DropdownLink> */}
        <NavLink
          className={
            'rounded-xl border border-transparent px-5 py-1 duration-200 ease-in hover:border-lightGreen hover:text-lightGreen'
          }
          to={'/services'}
        >
          SERVICES
        </NavLink>
        <NavLink
          to={'/hours'}
          className={
            'rounded-xl border border-transparent px-5 py-1 duration-200 ease-in hover:border-lightGreen hover:text-lightGreen'
          }
        >
          HOURS{' '}
        </NavLink>
      </ul>
      <NavLink
        to={'/plan-a-visit'}
        className={
          'rounded-xl border bg-darkGreen px-5 py-1 text-white duration-200 ease-in hover:border-lightGreen hover:bg-transparent hover:text-lightGreen'
        }
      >
        PLAN A VISIT
      </NavLink>
    </nav>
  );
};
