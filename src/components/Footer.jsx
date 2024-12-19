import { FaPhone, FaPrint, FaLocationDot } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex h-1/3 flex-col items-center gap-10 bg-darkGreen font-serif text-white xs:py-10 xs:text-xs md:text-base lg:py-10 lg:text-base">
      <div className="flex w-full items-center font-serif xs:flex-col xs:place-items-center xs:gap-5 xs:px-3 md:px-6 lg:flex-row lg:justify-between lg:px-14">
        <div className="flex flex-col items-start xs:w-3/4 xs:items-center md:w-80 lg:items-start">
          <h2 className="mb-2 font-ubuntu text-2xl font-bold xs:text-center">
            Hours
          </h2>
          <div className="flex flex-row xs:w-3/4 lg:w-4/5">
            <div className="flex flex-col gap-0.5 xs:w-1/2">
              <p>Monday</p>
              <p>Tuesday</p>
              <p>Wednesday</p>
              <p>Thursday</p>
              <p>Friday</p>
              <p>Weekends</p>
            </div>
            <div className="flex flex-col gap-0.5 text-right xs:w-1/2">
              <p>8am - 4pm</p>
              <p>8am - 2pm</p>
              <p>8am - 4pm</p>
              <p>8am - 4pm</p>
              <p>8am - 2pm</p>
              <p>8am - 2pm</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 xs:items-center lg:items-start">
          <h2 className="font-ubuntu text-2xl font-bold">Important</h2>
          <a href="/services" className="mobile-link">
            Services
          </a>
          <a href="/our-team" className="mobile-link">
            Doctors
          </a>
          <a href="/plan-a-visit" className="mobile-link">
            Plan A Visit
          </a>
          <a href="/policies" className="mobile-link">
            Clinic Policies
          </a>
        </div>
        <div className="flex items-center gap-5 xs:mt-10 xs:flex-col xs:text-center lg:mt-0 lg:flex-row lg:text-left lg:text-base">
          <img className="xs:size-20 lg:size-40"></img>
          <div className="flex flex-col gap-3 xs:items-center lg:items-start">
            <h2 className="font-ubuntu font-bold xs:text-3xl lg:block lg:text-4xl">
              Westney Heights <br />
              <span className="xs:text-xl lg:text-3xl">Medical Centre</span>
            </h2>
            <p className="flex place-items-center gap-3">
              <FaLocationDot />
              15 Westney Road N &#35;2, Ajax, ON, L1T 1P4{' '}
            </p>

            <p className="flex place-items-center gap-3">
              <FaPhone />
              905&#45;428&#45;8055
              <FaPrint />
              905&#45;428&#45;1501
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-[10px] opacity-100 lg:hidden">
        &copy; {year} WHMC | All Rights Reserved{' '}
        <span className="xs:hidden lg:block">|</span>{' '}
        <br className="xs:block lg:hidden" />
        Designed by{' '}
        <a
          href="https://github.com/johanbphilip"
          className="text-lightGreen hover:text-whiteGreen"
        >
          Johan Philip
        </a>
      </p>
      <p className="text-center text-xs opacity-100 xs:hidden lg:block">
        &copy; {year} WHMC | All Rights Reserved | Designed by{' '}
        <a
          href="https://github.com/johanbphilip"
          className="text-lightGreen hover:text-whiteGreen"
        >
          Johan Philip
        </a>
      </p>
    </footer>
  );
};
