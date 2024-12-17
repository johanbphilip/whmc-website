import { FaPhone, FaPrint, FaLocationDot } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex h-1/3 flex-col place-items-center bg-darkGreen py-10 font-serif lg:text-lg">
      <div className="md:text-md flex w-full font-serif text-white xs:flex-col xs:place-items-center xs:gap-3 xs:px-3 xs:text-xs md:px-6 lg:mb-10 lg:flex-row lg:items-start lg:justify-between lg:px-14 lg:text-lg">
        <div className="flex flex-col gap-2 xs:text-center lg:text-left">
          <h2 className="font-ubuntu font-bold xs:text-lg lg:text-xl">
            Westney Heights Medical Centre
          </h2>
          <hr className="border-dashed border-lightGreen opacity-75" />
          <p className="flex place-items-center lg:mb-5">
            <FaLocationDot className="mr-2" />
            15 Westney Road N &#35;2, Ajax, ON, L1T 1P4{' '}
          </p>
          <h2 className="font-ubuntu font-bold xs:text-lg lg:text-xl">
            Contact Information
          </h2>
          <hr className="border-dashed border-lightGreen opacity-75" />
          <p className="flex place-items-center gap-3">
            <FaPhone />
            905&#45;428&#45;8055
          </p>
          <p className="flex place-items-center gap-3">
            <FaPrint />
            905&#45;428&#45;1501
          </p>
          <p className="flex place-items-center">
            <IoMail className="mr-3" />
            management.westneyheights@gmail.com
          </p>
          <hr className="border-dashed border-lightGreen opacity-75" />
          {/* <p className="xs:hidden lg:block">
            &copy; {year} Westney Heights Medical | All Rights Reserved
            <span className="lg:hidden">
              {" "}
              Designed by{" "}
              <a
                href="https://github.com/johanbphilip"
                className="text-lightGreen hover:text-yellow-800"
              >
                Johan Philip
              </a>
            </span>
          </p> */}
        </div>
        <div className="flex flex-col xs:w-3/4 md:w-80">
          <h2 className="mb-2 font-ubuntu font-bold xs:text-center xs:text-lg lg:text-xl">
            Hours
          </h2>
          <hr className="border-dashed border-lightGreen opacity-75" />
          <div className="flex flex-row">
            <div className="flex flex-col xs:w-1/2">
              <p className="my-1">Monday</p>
              <hr className="w-full border-lightGreen border-opacity-75" />
              <p className="my-1">Tuesday</p>
              <hr className="w-full border-lightGreen border-opacity-75" />
              <p className="my-1">Wednesday</p>
              <hr className="w-full border-lightGreen border-opacity-75" />
              <p className="my-1">Thursday</p>
              <hr className="w-full border-lightGreen border-opacity-75" />
              <p className="my-1">Friday</p>
              <hr className="w-full border-lightGreen border-opacity-75" />
              <p className="my-1">Weekends</p>
              <hr className="w-full border-lightGreen border-opacity-75" />
            </div>
            <div className="flex flex-col text-right xs:w-1/2">
              <p className="my-1">8am - 4pm</p>
              <hr className="w-full border-lightGreen border-opacity-75" />
              <p className="my-1">8am - 2pm</p>
              <hr className="w-full border-lightGreen border-opacity-75" />
              <p className="my-1">8am - 4pm</p>
              <hr className="w-full border-lightGreen border-opacity-75" />
              <p className="my-1">8am - 4pm</p>
              <hr className="w-full border-lightGreen border-opacity-75" />
              <p className="my-1">8am - 2pm</p>
              <hr className="w-full border-lightGreen border-opacity-75" />
              <p className="my-1">8am - 2pm</p>
              <hr className="w-full border-lightGreen border-opacity-75" />
            </div>
          </div>
        </div>
        <div className="flex-col gap-2 xs:hidden lg:flex">
          <h2 className="font-ubuntu font-bold xs:text-lg lg:text-xl">
            Important Links
          </h2>
          <hr className="border-dashed border-lightGreen opacity-75" />
          <a href="/services">Services</a>
          <a href="/our-team"> Doctors</a>
          <a href="/policies/#faqs">FAQs</a>
          <a href="/policies">Clinic Policies</a>
        </div>
        <p className="xs:mt-3 xs:block xs:text-center lg:hidden">
          &copy; {year} WHMC | All Rights Reserved <br /> Designed by{' '}
          <a
            href="https://github.com/johanbphilip"
            className="text-lightGreen hover:text-yellow-800"
          >
            Johan Philip
          </a>
        </p>
      </div>
      <div className="flex-row justify-between align-middle text-white xs:hidden lg:flex">
        <hr className="stroke-white" />
        <p>
          &copy; {year} WHMC | All Rights Reserved | Designed by{' '}
          <a
            href="https://github.com/johanbphilip"
            className="text-lightGreen hover:text-yellow-800"
          >
            Johan Philip
          </a>
        </p>
        <hr />
      </div>
    </footer>
  );
};
