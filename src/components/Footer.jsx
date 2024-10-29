import { FaPhone, FaPrint, FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="bg-darkGreen flex flex-row text-white justify-between py-10 px-14 font-serif">
      <div className="flex flex-col gap-2">
        <h2 className="font-ubuntu font-bold text-xl">
          Westney Heights Medical Centre
        </h2>
        <hr className="opacity-75 border-dashed border-lightGreen" />
        <p className="flex place-items-center">
          <FaLocationDot className="mr-2 size-5" />
          15 Westney Road N &#35;2, Ajax, ON, L1T 1P4{" "}
        </p>
        <h2 className="font-ubuntu font-bold text-xl">Contact Information</h2>
        <hr className="opacity-75 border-dashed border-lightGreen" />
        <p className="flex place-items-center">
          <FaPhone className="mr-3" />
          905&#45;428&#45;8055
        </p>
        <p className="flex place-items-center">
          <FaPrint className="mr-3" />
          905&#45;428&#45;1501
        </p>
        <p className="flex place-items-center">
          <IoMail className="mr-3" />
          management.westeyheights@gmail.com
        </p>
      </div>
      <div className="flex flex-col w-80">
        <h2 className="font-ubuntu font-bold text-xl mb-2">Hours</h2>
        <hr className="opacity-75 border-dashed border-lightGreen" />
        <div className="flex flex-row">
          <div className="flex flex-col">
            <p className="my-1">Monday</p>
            <hr className="border-opacity-75 border-lightGreen w-40" />
            <p className="my-1">Tuesday</p>
            <hr className="border-opacity-75 border-lightGreen w-40" />
            <p className="my-1">Wednesday</p>
            <hr className="border-opacity-75 border-lightGreen w-40" />
            <p className="my-1">Thursday</p>
            <hr className="border-opacity-75 border-lightGreen w-40" />
            <p className="my-1">Friday</p>
            <hr className="border-opacity-75 border-lightGreen w-40" />
            <p className="my-1">Weekends</p>
            <hr className="border-opacity-75 border-lightGreen w-40" />
          </div>
          <div className="text-right flex flex-col">
            <p className="my-1">8am - 4pm</p>
            <hr className="border-opacity-75 border-lightGreen w-40" />
            <p className="my-1 text-right">8am - 2pm</p>
            <hr className="border-opacity-75 border-lightGreen w-40" />
            <p className="my-1">8am - 4pm</p>
            <hr className="border-opacity-75 border-lightGreen w-40" />
            <p className="my-1">8am - 4pm</p>
            <hr className="border-opacity-75 border-lightGreen w-40" />
            <p className="my-1">8am - 2pm</p>
            <hr className="border-opacity-75 border-lightGreen w-40" />
            <p className="my-1">8am - 2pm</p>
            <hr className="border-opacity-75 border-lightGreen w-40" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-ubuntu font-bold text-xl">Important Links</h2>
        <hr className="opacity-75 border-dashed border-lightGreen" />
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/our-team"> Doctors</a>
        <a href="/policies/#faqs">FAQs</a>
        <a href="/policies">Clinic Policies</a>
        <a href="/plan-a-visit">Plan A Visit</a>
      </div>
    </footer>
  );
};
