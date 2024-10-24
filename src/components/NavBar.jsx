import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="flex flex-row bg-darkGreen text-whiteGreen place-items-center justify-between h-[4rem] px-10 fixed top-0 w-full z-10">
      <h1 className="font-ubuntu font-bold text-xl">WHMC</h1>
      <nav>
        <ul className="flex flex-row justify-evenly font-serif font-thin">
          <NavLink to={"/"}>
            <Pages name="HOME" url="#" />
          </NavLink>
          <NavLink to={"/services"}>
            <Pages name="SERVICES" url="#" />
          </NavLink>
          <NavLink to={"/our-team"}>
            <Pages name="OUR TEAM" url="#" />
          </NavLink>
          <NavLink to={"/hours"}>
            <Pages name="HOURS" url="#" />
          </NavLink>
          <NavLink to={"plan-a-visit"}>
            <Pages
              name="PLAN A VISIT"
              url="#"
              style="mx-2 bg-darkGreen px-3 py-1 border border-transparent hover:border-darkGreen hover:bg-transparent rounded-xl ease-in duration-200"
            />
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

const Pages = ({ name, url, style } = props) => {
  return (
    <li
      className={
        style
          ? style
          : "mx-2 px-3 py-1 border border-transparent hover:border-darkGreen rounded-xl ease-in duration-200"
      }
    >
      <a href={url}>{name}</a>
    </li>
  );
};
