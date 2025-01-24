import { useState, React } from 'react';
import { NavLink } from 'react-router';

export const DropdownLink = ({ children, href, DropdownContent }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const showDropdown = DropdownContent && dropdownOpen;
  return (
    <div
      className="relative py-1"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <NavLink
        to={href}
        className={
          'relative rounded-xl border border-transparent px-5 py-1 duration-200 ease-in hover:border-lightGreen hover:text-lightGreen'
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
