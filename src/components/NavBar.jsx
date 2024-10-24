import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="flex flex-row bg-lightGreen text-whiteGreen place-items-center justify-between h-[4rem] px-10 fixed top-0 w-full z-10">
      <h1 className="font-ubuntu font-bold text-xl">WHMC</h1>
      <nav>
        <ul className="flex flex-row justify-evenly font-serif font-thin">
          <NavLink
            to={"/"}
            className={
              "mx-2 px-3 py-1 border border-transparent hover:border-darkGreen rounded-xl ease-in duration-200"
            }
          >
            HOME
          </NavLink>
          <NavLink
            to={"/services"}
            className={
              "mx-2 px-3 py-1 border border-transparent hover:border-darkGreen rounded-xl ease-in duration-200"
            }
          >
            SERVICES
          </NavLink>
          <NavLink
            to={"/our-team"}
            className={
              "mx-2 px-3 py-1 border border-transparent hover:border-darkGreen rounded-xl ease-in duration-200"
            }
          >
            OUR TEAM
          </NavLink>
          <NavLink
            to={"/hours"}
            className={
              "mx-2 px-3 py-1 border border-transparent hover:border-darkGreen rounded-xl ease-in duration-200"
            }
          >
            HOURS{" "}
          </NavLink>
          <NavLink
            to={"/plan-a-visit"}
            className={
              "mx-2 bg-darkGreen px-3 py-1 border border-transparent hover:border-darkGreen hover:bg-transparent rounded-xl ease-in duration-200"
            }
          >
            PLAN A VISIT
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
