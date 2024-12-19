import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useRef } from 'react';
import { NavBar } from './NavBar';
import { IoMdClose } from 'react-icons/io';

//TODO: Extract Mobile Navbar into its own component called MobileNavigationBar

export const Header = () => {
  const navRef = useRef();
  function showMobileNavBar() {
    navRef.current.classList.toggle('flex');
    navRef.current.classList.toggle('hidden');
  }

  return (
    <header className="fixed top-0 z-10 flex w-full flex-row place-items-center bg-white font-normal text-darkGreen xs:h-10 xs:justify-between xs:px-3 md:h-20 md:px-6 lg:justify-center lg:px-14">
      <NavBar />
      <h1 className="font-ubuntu text-xl font-bold hover:text-lightGreen xs:block lg:hidden">
        <NavLink to={'/'}>WHMC</NavLink>
      </h1>
      <nav
        className="absolute left-0 top-0 hidden h-screen w-screen flex-col place-items-center justify-center bg-white py-20 font-serif text-2xl"
        ref={navRef}
      >
        <IoMdClose
          className="fixed right-5 top-5 size-10"
          onClick={showMobileNavBar}
        />
        <ul
          className="flex w-3/4 flex-col gap-10 text-center"
          onClick={showMobileNavBar}
        >
          <NavLink to={'/'} className={'nav-hover'}>
            HOME
          </NavLink>
          <NavLink to={'/services'} className={'nav-hover'}>
            SERVICES
          </NavLink>

          <NavLink to={'/our-team'} className={'nav-hover'}>
            OUR TEAM
          </NavLink>
          <NavLink to={'/hours'} className={'nav-hover'}>
            HOURS{' '}
          </NavLink>
          <NavLink
            to={'/plan-a-visit'}
            className={'nav-hover hover:bg-transparent hover:text-lightGreen'}
          >
            PLAN A VISIT
          </NavLink>
        </ul>
      </nav>
      <RxHamburgerMenu
        className="duration-1 size-6 transition-transform ease-in-out hover:cursor-pointer xs:block lg:hidden"
        onClick={showMobileNavBar}
      />
    </header>
  );
};
