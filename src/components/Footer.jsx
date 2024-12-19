import { FaPhone, FaPrint, FaLocationDot } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="xxs:py-10 xxs:text-xs flex h-1/3 flex-col items-center gap-10 bg-darkGreen font-serif text-white xs:text-sm md:text-base lg:py-10 lg:text-base">
      <div className="xxs:flex-col xxs:place-items-center xxs:gap-5 xxs:px-3 flex w-full items-center font-serif md:px-6 lg:flex-row lg:justify-between lg:px-14">
        <div className="xxs:w-3/4 xxs:items-center flex flex-col items-start md:w-80 lg:items-start">
          <h2 className="xxs:text-center mb-2 font-ubuntu text-2xl font-bold">
            Hours
          </h2>
          <div className="xxs:w-3/4 flex flex-row lg:w-4/5">
            <div className="xxs:w-1/2 flex flex-col gap-0.5">
              <p>Monday</p>
              <p>Tuesday</p>
              <p>Wednesday</p>
              <p>Thursday</p>
              <p>Friday</p>
              <p>Weekends</p>
            </div>
            <div className="xxs:w-1/2 flex flex-col gap-0.5 text-right">
              <p>8am - 4pm</p>
              <p>8am - 2pm</p>
              <p>8am - 4pm</p>
              <p>8am - 4pm</p>
              <p>8am - 2pm</p>
              <p>8am - 2pm</p>
            </div>
          </div>
        </div>
        <div className="xxs:items-center flex flex-col items-start gap-2 lg:items-start">
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
        <div className="xxs:mt-10 xxs:flex-col xxs:text-center flex items-center gap-5 lg:mt-0 lg:flex-row lg:text-left lg:text-base">
          <img className="xxs:size-20 lg:size-40"></img>
          <div className="xxs:items-center flex flex-col gap-3 lg:items-start">
            <h2 className="xxs:text-3xl font-ubuntu font-bold lg:block lg:text-4xl">
              Westney Heights <br />
              <span className="xxs:text-xl lg:text-3xl">Medical Centre</span>
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
        <span className="xxs:hidden lg:block">|</span>{' '}
        <br className="xxs:block lg:hidden" />
        Designed by{' '}
        <a
          href="https://github.com/johanbphilip"
          className="text-lightGreen hover:text-whiteGreen"
        >
          Johan Philip
        </a>
      </p>
      <p className="xxs:hidden text-center text-xs opacity-100 lg:block">
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
