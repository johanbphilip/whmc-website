import { NavLink } from "react-router-dom";
import docAndPatient from "../assets/doc-patient1.jpeg";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Home = () => {
  return (
    <main className="xs:mt-10 md:mt-20 flex flex-col xs:px-3 md:px-5 font-serif justify-center gap-5 relative mb-5">
      <section className="bg-darkGreen rounded-xl h-screen flex xs:flex-col md:flex-row md:justify-evenly items-center xs:py-20 md:py-20 xs:text-center md:text-left xs:gap-10 md:gap-0">
        <img
          src={docAndPatient}
          className="md:hidden rounded-lg h-1/2 w-2/3 object-cover shadow-lg"
        />
        <div className="flex flex-col justify-center xs:items-center md:items-start gap-5">
          <h1 className="font-ubuntu font-semibold xs:text-4xl md:text-7xl text-white">
            Westney Heights <br />
            Medical Centre
          </h1>
          <p className="text-lightGreen xs:text-sm md:text-md">
            See if Sheema has an ideas for a caption.
          </p>
          <div className="flex gap-5 items-center">
            <NavLink
              to={"/plan-a-visit"}
              className={
                "font-medium xs:text-md md:text-lg bg-white xs:px-3 xs:py-1 md:px-5 md:py-2 md:hover:bg-lightGreen  md:hover:text-white rounded-xl ease-in duration-200 w-fit"
              }
            >
              PLAN A VISIT
            </NavLink>
            <NavLink
              to={"/hours"}
              className={
                "font-medium text-white xs:text-md md:text-xl flex items-center hover:text-lightGreen xs:underline md:no-underline md:hover:underline underline-offset-4"
              }
            >
              CLINIC HOURS{" "}
              <MdKeyboardArrowRight className="xs:hidden md:block size-6" />
            </NavLink>
          </div>
        </div>
        <img
          src={docAndPatient}
          className="xs:hidden md:block rounded-lg md:h-4/5 md:w-80 xs:object-center-top  object-cover shadow-md transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
        />
      </section>
      <div className="xs:hidden md:flex absolute -mt-5 inset-x-0 justify-evenly overflow-hidden py-3">
        <div className="md:size-60 bg-lightGreen rounded-xl flex flex-col justify-evenly items-end xs:px-2 xs:py-2 md:py-3 md:px-5 shadow-md transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <div className="text-left text-white flex flex-col gap-4">
            <h2 className="font-ubuntu font-semibold xs:text-xl md:text-2xl">
              Our Team
            </h2>
            <p className=" xs:text-xs md:text-sm">
              Meet the team of doctors at Westney Heights Medical who will be
              treating you.
            </p>
          </div>
          <NavLink to={"/our-team"} className={"xs:size-7 md:size-10"}>
            <BsArrowUpRightCircleFill className="xs:size-7 md:size-10 fill-white" />
          </NavLink>
        </div>
        <div className="md:size-60 bg-lightGreen rounded-xl flex flex-col justify-evenly items-end py-3 px-5 shadow-md transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <div className="text-left text-white flex flex-col gap-4">
            <h2 className="font-ubuntu font-semibold xs:text-md  md:text-2xl">
              Our Services
            </h2>
            <p className="xs:text-xs md:text-sm">
              Checkout the wide variety of services offered at Westney Heights
              Medical Center.
            </p>
          </div>
          <NavLink to={"/services"} className={"xs:size-7 md:size-10"}>
            <BsArrowUpRightCircleFill className="xs:size-7 md:size-10 fill-white" />
          </NavLink>
        </div>
        <div className="md:size-60 bg-lightGreen rounded-xl flex flex-col justify-evenly items-end py-3 px-5 shadow-md transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <div className="text-left text-white flex flex-col gap-4">
            <h2 className="font-ubuntu font-semibold xs:text-xl md:text-2xl">
              Our Hours
            </h2>
            <p className="xs:text-xs md:text-sm">
              Click below to learn more aobut our hours, location and contact
              information.
            </p>
          </div>
          <NavLink to={"/hours"} className={"xs:size-7 md:size-10"}>
            <BsArrowUpRightCircleFill className="xs:size-7 md:size-10 fill-white" />
          </NavLink>
        </div>
      </div>
      <section className="bg-whiteGreen rounded-xl h-screen flex xs:flex-col md:flex-row justify-evenly items-center ">
        <div className="text-left xs:text-md md:text-md lg:text-lg flex flex-col gap-3 xs:w-fit md:w-1/2 xs:px-4 md:px-0">
          <h1 className="font-ubuntu font-bold xs:text-5xl md:text-4xl lg:text-4xl text-lightGreen">
            <span className="text-darkGreen"> Your Health </span>
            is Our Priority.
          </h1>
          <p>
            With dedicated physicians who prioritize your health care needs, you
            can rest assured that we will provide you with a comprehensive
            medical experience in a modern, clean and caring environment.
          </p>
          <p>
            Patients also have access to an onsite imaging clinic, pharmacy,
            physiotherapy clinic and spine care that can also tend to patient
            needs.
          </p>
          <p>
            Please note that the walk-in clinic is based on capacity and can
            close early on any given day. Once we are at capacity we are not
            able to accept any more patients for that day.
          </p>
        </div>
        <img
          src={docAndPatient}
          className="block rounded-xl xs:h-60 w-80 md:h-80 object-cover shadow-md md:transform md:transition-transform md:duration-200 md:hover:scale-105 md:hover:shadow-lg"
        />
      </section>
    </main>
  );
};
