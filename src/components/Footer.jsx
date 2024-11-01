import { FaPhone, FaPrint, FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-darkGreen flex xs:flex-col lg:flex-row text-white xs:gap-3 xs:place-items-center lg:justify-between py-10 xs:px-3 md:px-6 lg:px-14 font-serif xs:text-xs md:text-md lg:text-lg">
      <div className="flex flex-col xs:text-center lg:text-left gap-2">
        <h2 className="font-ubuntu font-bold xs:text-base lg:text-xl">
          Westney Heights Medical Centre
        </h2>
        <hr className="opacity-75 border-dashed border-lightGreen" />
        <p className="flex place-items-center lg:mb-4">
          <FaLocationDot className="mr-2" />
          15 Westney Road N &#35;2, Ajax, ON, L1T 1P4{" "}
        </p>
        <h2 className="font-ubuntu font-bold xs:text-base lg:text-xl">
          Contact Information
        </h2>
        <hr className="opacity-75 border-dashed border-lightGreen" />
        <p className="flex place-items-center gap-3 ">
          <FaPhone />
          905&#45;428&#45;8055
          <FaPrint />
          905&#45;428&#45;1501
        </p>
        <p className="flex place-items-center">
          <IoMail className="mr-3" />
          management.westeyheights@gmail.com
        </p>
        <hr className="opacity-75 border-dashed border-lightGreen" />
        <p className="xs:hidden lg:block">
          &copy; {year} WHMC | All Rights Reserved | Designed by{" "}
          <a
            href="https://github.com/johanbphilip"
            className="text-lightGreen hover:text-yellow-800"
          >
            Johan Philip
          </a>
        </p>
      </div>
      <div className="flex flex-col xs:w-3/4 md:w-80">
        <h2 className="font-ubuntu font-bold xs:text-center xs:text-base lg:text-xl mb-2">
          Hours
        </h2>
        <hr className="opacity-75 border-dashed border-lightGreen" />
        <div className="flex flex-row">
          <div className="flex flex-col xs:w-1/2">
            <p className="my-1">Monday</p>
            <hr className="border-opacity-75 border-lightGreen w-full" />
            <p className="my-1">Tuesday</p>
            <hr className="border-opacity-75 border-lightGreen w-full" />
            <p className="my-1">Wednesday</p>
            <hr className="border-opacity-75 border-lightGreen w-full" />
            <p className="my-1">Thursday</p>
            <hr className="border-opacity-75 border-lightGreen w-full" />
            <p className="my-1">Friday</p>
            <hr className="border-opacity-75 border-lightGreen w-full" />
            <p className="my-1">Weekends</p>
            <hr className="border-opacity-75 border-lightGreen w-full" />
          </div>
          <div className="text-right flex flex-col xs:w-1/2">
            <p className="my-1">8am - 4pm</p>
            <hr className="border-opacity-75 border-lightGreen w-full" />
            <p className="my-1">8am - 2pm</p>
            <hr className="border-opacity-75 border-lightGreen w-full" />
            <p className="my-1">8am - 4pm</p>
            <hr className="border-opacity-75 border-lightGreen w-full" />
            <p className="my-1">8am - 4pm</p>
            <hr className="border-opacity-75 border-lightGreen w-full" />
            <p className="my-1">8am - 2pm</p>
            <hr className="border-opacity-75 border-lightGreen w-full" />
            <p className="my-1">8am - 2pm</p>
            <hr className="border-opacity-75 border-lightGreen w-full" />
          </div>
        </div>
      </div>
      <div className="xs:hidden lg:flex flex-col gap-2 ">
        <h2 className="font-ubuntu font-bold xs:text-lg lg:text-xl">
          Important Links
        </h2>
        <hr className="opacity-75 border-dashed border-lightGreen" />
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/our-team"> Doctors</a>
        <a href="/policies/#faqs">FAQs</a>
        <a href="/policies">Clinic Policies</a>
        <a href="/plan-a-visit">Plan A Visit</a>
      </div>
      <p className="xs:block xs:text-center xs:mt-3 lg:hidden">
        &copy; {year} WHMC | All Rights Reserved <br /> Designed by{" "}
        <a
          href="https://github.com/johanbphilip"
          className="text-lightGreen hover:text-yellow-800"
        >
          Johan Philip
        </a>
      </p>
    </footer>
  );
};
