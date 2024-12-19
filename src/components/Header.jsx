import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import { NavBar } from './NavBar';
import { IoMdClose } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {
  AboutUsMobileDropDownContent,
  ServicesMobileDropDownContent,
} from './MobileDropDownContent';

//TODO: Extract Mobile Navbar into its own component called MobileNavigationBar

export const Header = () => {
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
    <header className="xxs:h-10 xxs:justify-between xxs:px-3 fixed top-0 z-10 flex w-full flex-row place-items-center bg-white font-normal text-darkGreen md:h-20 md:px-6 lg:justify-center lg:px-14">
      <NavBar />
      <h1 className="xxs:block font-ubuntu text-xl font-bold hover:text-lightGreen lg:hidden">
        <NavLink to={'/'}>WHMC</NavLink>
      </h1>
      {isMobileNavBarOpen && (
        <nav className="absolute left-0 top-0 h-screen w-screen flex-col place-items-center justify-center bg-white py-20 font-serif text-2xl">
          <IoMdClose
            className="fixed right-5 top-5 size-10"
            onClick={toggleMobileNavBar}
          />
          <ul className="flex w-3/4 flex-col items-start gap-10">
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
              <AboutUsMobileDropDownContent closeAll={closeAll} />
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
              <ServicesMobileDropDownContent closeAll={closeAll} />
            )}

            <NavLink to={'/hours'} className={'nav-hover'} onClick={closeAll}>
              HOURS{' '}
            </NavLink>
            <NavLink
              to={'/plan-a-visit'}
              className={'nav-hover hover:bg-transparent hover:text-lightGreen'}
              onClick={closeAll}
            >
              PLAN A VISIT
            </NavLink>
          </ul>
        </nav>
      )}
      <RxHamburgerMenu
        className="duration-1 xxs:block size-6 transition-transform ease-in-out hover:cursor-pointer lg:hidden"
        onClick={toggleMobileNavBar}
      />
    </header>
  );
};
