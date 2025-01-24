import React from 'react';
import { NavLink } from 'react-router';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {
  AboutUsMobileContent,
  ServicesMobileContent,
} from './MobileDropDownContent';

export const MobileNavBar = () => {
  const [isAboutUsDropDownOpen, setIsAboutUsDropDownOpen] = useState(false);
  const [isServicesDropDownOpen, setIsServicesDropDownOpen] = useState(false);
  const [isMobileNavBarOpen, setIsMobileNavBarOpen] = useState(false);

  const toggleMobileNavBar = () => {
    setIsMobileNavBarOpen((prev) => !prev);
    setIsAboutUsDropDownOpen(false);
    setIsServicesDropDownOpen(false);
  };

  const toggleAboutUsDropDownMenu = () => {
    setIsAboutUsDropDownOpen((prev) => !prev);
  };
  const toggleServicesDropDownMenu = () => {
    setIsServicesDropDownOpen((prev) => !prev);
  };

  const closeAll = () => {
    setIsAboutUsDropDownOpen(false);
    setIsMobileNavBarOpen(false);
  };
  return (
    <>
      <h1 className="ml-2 font-ubuntu text-2xl font-bold hover:text-lightGreen xxs:block lg:hidden">
        <NavLink to={'/'}>WHMC</NavLink>
      </h1>
      {isMobileNavBarOpen && (
        <nav className="justify-top absolute right-0 top-0 flex h-screen w-3/4 flex-col items-center bg-white py-20 font-serif xxs:text-xl xs:text-2xl">
          <IoMdClose
            className="fixed right-5 top-5 size-8"
            onClick={toggleMobileNavBar}
          />
          <ul className="flex w-3/4 flex-col items-start gap-8">
            <NavLink to={'/'} className={'nav-hover'} onClick={closeAll}>
              HOME
            </NavLink>

            <div
              className="nav-hover flex items-center"
              onClick={toggleAboutUsDropDownMenu}
            >
              <NavLink to={'/our-team'} className={'flex items-center'}>
                ABOUT US
              </NavLink>
              <MdKeyboardArrowDown
                className={`transition-transform duration-300 ${
                  isAboutUsDropDownOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
            {isAboutUsDropDownOpen && (
              <AboutUsMobileContent closeAll={closeAll} />
            )}
            <div
              className="nav-hover flex items-center"
              onClick={toggleServicesDropDownMenu}
            >
              <NavLink to={'/services'} className={'flex items-center'}>
                SERVICES
              </NavLink>
              <MdKeyboardArrowDown
                className={`transition-transform duration-300 ${
                  isServicesDropDownOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
            {isServicesDropDownOpen && (
              <ServicesMobileContent closeAll={closeAll} />
            )}

            <NavLink to={'/hours'} className={'nav-hover'} onClick={closeAll}>
              HOURS{' '}
            </NavLink>
            <NavLink
              to={'/plan-a-visit'}
              className={'nav-hover bg-darkGreen text-white'}
              onClick={closeAll}
            >
              PLAN A VISIT
            </NavLink>
          </ul>
        </nav>
      )}
      <RxHamburgerMenu
        className="duration-1 mr-2 size-8 transition-transform ease-in-out hover:cursor-pointer xxs:block lg:hidden"
        onClick={toggleMobileNavBar}
      />
    </>
  );
};
