import { MobileNavBar } from './MobileNavBar';
import { NavBar } from './NavBar';

export const Header = () => {
  return (
    <header className="fixed top-0 z-10 flex w-full flex-row place-items-center bg-white font-normal text-darkGreen xxs:h-10 xxs:justify-between xxs:px-3 md:h-20 md:px-6 lg:justify-center lg:px-14">
      <NavBar />
      <MobileNavBar />
    </header>
  );
};
