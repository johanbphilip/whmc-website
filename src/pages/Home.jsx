import { NavLink } from "react-router-dom";
import docAndPatient from "../assets/doc-patient1.jpeg";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Home = () => {
  return (
    <main className="xs:mt-10 md:mt-20 flex flex-col px-5 font-serif justify-center gap-10 relative mb-10">
      <section className="bg-darkGreen rounded-xl h-screen flex justify-evenly items-center py-20">
        <div className="flex flex-col gap-5">
          <h1 className="font-ubuntu font-semibold text-7xl text-white">
            Westney Heights <br />
            Medical Centre
          </h1>
          <p className="text-lightGreen text-md">
            See if Sheema has an ideas for a caption.
          </p>
          <div className="flex gap-5 items-center">
            <NavLink
              to={"/plan-a-visit"}
              className={
                "font-medium xs:text-xs md:text-lg bg-white xs:px-2 xs:py-1 md:px-5 md:py-2 hover:bg-lightGreen  hover:text-white rounded-xl ease-in duration-200 w-fit"
              }
            >
              PLAN A VISIT
            </NavLink>
            <NavLink
              to={"/hours"}
              className={
                "font-medium text-white text-xl flex items-center hover:text-lightGreen hover:underline underline-offset-4"
              }
            >
              CLINIC HOURS <MdKeyboardArrowRight className="size-6" />
            </NavLink>
          </div>
        </div>
        <img
          src={docAndPatient}
          className="rounded-lg h-4/5 w-80 xs:object-center-top  object-cover shadow-md transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
        />
      </section>
      <div className="absolute -mt-5 inset-x-0 flex justify-evenly overflow-hidden py-3">
        <div className="size-60 bg-lightGreen rounded-3xl flex flex-col justify-evenly items-end py-3 px-5 shadow-md transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <div className="text-left text-white flex flex-col gap-4">
            <h2 className="font-ubuntu  font-semibold text-2xl">Our Team</h2>
            <p className="text-sm">
              Meet the team of doctors at Westney Heights Medical who will be
              treating you.
            </p>
          </div>
          <NavLink to={"/our-team"} className={"size-10"}>
            <BsArrowUpRightCircleFill className="size-10 fill-white" />
          </NavLink>
        </div>
        <div className="size-60 bg-lightGreen rounded-3xl flex flex-col justify-evenly items-end py-3 px-5 shadow-md transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <div className="text-left text-white flex flex-col gap-4">
            <h2 className="font-ubuntu  font-semibold text-2xl">
              Our Services
            </h2>
            <p className="text-sm">
              Checkout the wide variety of services offered at Westney Heights
              Medical Center.
            </p>
          </div>
          <NavLink to={"/services"} className={"size-10"}>
            <BsArrowUpRightCircleFill className="size-10 fill-white" />
          </NavLink>
        </div>
        <div className="size-60 bg-lightGreen rounded-3xl flex flex-col justify-evenly items-end py-3 px-5 shadow-md transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <div className="text-left text-white flex flex-col gap-4">
            <h2 className="font-ubuntu  font-semibold text-2xl">Our Hours</h2>
            <p className="text-sm">
              Click below to learn more aobut our hours, location and contact
              information.
            </p>
          </div>
          <NavLink to={"/hours"} className={"size-10"}>
            <BsArrowUpRightCircleFill className="size-10 fill-white" />
          </NavLink>
        </div>
      </div>
      <section className="bg-whiteGreen rounded-xl h-screen flex justify-evenly items-center">
        <div className="text-left xs:text-xs md:text-md lg:text-lg flex flex-col gap-3 w-1/2">
          <h1 className="font-ubuntu font-bold xs:text-xl md:text-4xl lg:text-5xl text-lightGreen">
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
          className="rounded-xl w-80 h-80 object-cover shadow-md transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
        />
      </section>
      {/* 
      <section className="w-full font-serif place-items-center xs:py-6 md:py-10 xs:px-3 md:px-6 lg:px-14 text-darkGreen grid xs:grid-cols-1 xs:gap-4 md:grid-cols-2 md:gap-10">
        <img
          src={docAndPatient}
          className="rounded-xl w-full h-auto object-cover"
        />
        <div className="text-left xs:text-xs md:text-md lg:text-lg flex flex-col gap-3">
          <h1 className="font-ubuntu font-bold xs:text-xl md:text-4xl lg:text-5xl text-lightGreen">
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
        <div className="font-ubuntu font-bold xs:text-sm md:text-lg lg:text-2xl text-darkGreen xs:row-start-4 md:row-start-2">
          <p className="flex flex-row place-items-center xs:gap-3 lg:mb-4">
            <BiSolidBadgeCheck className="xs:size-10 fill-lightGreen" />
            Serving Durham since 2000
          </p>
          <p className="flex flex-row place-items-center xs:gap-3 lg:mb-4">
            <BiSolidBadgeCheck className="xs:size-10 fill-lightGreen" /> Open 7
            days a week
          </p>
          <p className="flex flex-row place-items-center xs:gap-3 lg:mb-4">
            <BiSolidBadgeCheck className="xs:size-10 fill-lightGreen" /> Onsite
            imaging and pharmacy
          </p>
          <p className="flex flex-row place-items-center xs:gap-3 lg:mb-4">
            <BiSolidBadgeCheck className="xs:size-10 fill-lightGreen" /> Onsite
            imaging and pharmacy
          </p>
          <p className="flex flex-row place-items-center xs:gap-3 lg:mb-4">
            <BiSolidBadgeCheck className="xs:size-10 fill-lightGreen" /> Add one
            more item?
          </p>
          <p className="flex flex-row place-items-center xs:gap-3">
            <BiSolidBadgeCheck className="xs:size-10 fill-lightGreen" /> Add one
            more item?
          </p>
        </div>
        <img
          src={docAndPatient}
          className="rounded-xl w-full h-auto object-cover"
        />
      </section>
      <div
        className="xs:h-[25vh]  md:h-[52vh] bg-fixed bg-top xs:bg-fit lg:bg-center bg-cover bg-darkGreen bg-opacity-50 bg-blend-multiply"
        style={{ backgroundImage: `url(${outsideClinic})` }}
      ></div> */}
    </main>
  );
};
