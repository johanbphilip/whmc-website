import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRef } from "react";
import { NavBar } from "./NavBar";
import { IoMdClose } from "react-icons/io";

//TODO: Extract Mobile Navbar into its own component called MobileNavigationBar

export const Header = () => {
  const navRef = useRef();
  function showMobileNavBar() {
    navRef.current.classList.toggle("flex");
    navRef.current.classList.toggle("hidden");
  }

  return (
    <header className="flex flex-row bg-white text-darkGreen font-normal place-items-center justify-center xs:h-10 md:h-20 xs:px-5 md:px-6 lg:px-14 fixed top-0 w-full  z-10">
      <NavBar />
      <h1 className="font-ubuntu font-bold text-xl hover:text-lightGreen xs:block lg:hidden">
        <NavLink to={"/"}>WHMC</NavLink>
      </h1>
      <nav
        className={
          "hidden flex-col justify-center place-items-center absolute top-0 left-0 bg-white w-screen h-screen py-20 font-serif text-2xl"
        }
        ref={navRef}
      >
        <IoMdClose
          className="fixed top-5 right-5 size-10"
          onClick={showMobileNavBar}
        />
        <ul
          className="flex flex-col gap-10 text-center w-3/4"
          onClick={showMobileNavBar}
        >
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
              "px-5 py-1 border border-transparent hover:border-lightGreen hover:text-lightGreen rounded-xl ease-in duration-200 hover:"
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
          <NavLink
            to={"/plan-a-visit"}
            className={
              " bg-darkGreen text-white px-5 py-1 border hover:border-lightGreen hover:text-lightGreen hover:bg-transparent rounded-xl ease-in duration-200 "
            }
          >
            PLAN A VISIT
          </NavLink>
        </ul>
      </nav>
      <RxHamburgerMenu
        className="size-6 xs:block lg:hidden transition-transform duration-1 ease-in-out hover:cursor-pointer"
        onClick={showMobileNavBar}
      />
    </header>
  );
};
