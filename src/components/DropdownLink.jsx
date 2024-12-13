import { useState, React } from "react";
import { NavLink } from "react-router-dom";

export const DropdownLink = ({ children, href, DropdownContent }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const showDropdown = DropdownContent && dropdownOpen;
  return (
    <div
      className="py-1 relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <NavLink
        to={href}
        className={
          "relative px-5 py-1 border border-transparent hover:border-lightGreen hover:text-lightGreen rounded-xl ease-in duration-200"
        }
      >
        {children}
      </NavLink>
      {showDropdown && (
        <div className="absolute left-0">
          <DropdownContent />
        </div>
      )}
    </div>
  );
};
