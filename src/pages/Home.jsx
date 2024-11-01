import { NavLink } from "react-router-dom";
import docAndPatient from "../assets/doc-patient1.jpeg";
import outsideClinic from "../assets/outside-clinic.jpg";
import { BiSolidBadgeCheck } from "react-icons/bi";

export const Home = () => {
  return (
    <main className="xs:mt-10 md:mt-20 flex flex-col">
      <section className="bg-gradient-to-t from-darkGreen to-lightGreen w-full place-items-center xs:py-10 md:py-20 xs:px-3 md:px-6 lg:px-14 text-darkGreen flex justify-between rounded-b-lg align-middle">
        <div className="xs:mr-5 lg:mr-0">
          <h1 className="font-ubuntu font-bold xs:text-xl md:text-3xl lg:text-6xl text-white leading-tight mb-10">
            <span className="font-thin"> Welcome to</span>
            <br />
            Westney Heights
            <br />
            Medical Centre.
          </h1>
          <NavLink
            to={"/plan-a-visit"}
            className={
              "font-serif font-medium xs:text-xs md:text-lg bg-white xs:px-2 xs:py-1 md:px-5 md:py-2 hover:bg-lightGreen hover:bg-transparent hover:text-white rounded-xl ease-in duration-200"
            }
          >
            PLAN A VISIT
          </NavLink>
        </div>
        <img
          src={docAndPatient}
          className="rounded-lg xs:w-[12rem] xs:h-[8rem] md:w-80 md:h-44 lg:w-[40rem] lg:h-auto xs:object-center-top  object-cover"
        />
      </section>
      <section className="w-full font-serif place-items-center py-10 xs:px-3 md:px-6 lg:px-14 text-darkGreen grid xs:grid-rows-4 xs:gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-10">
        <img src={docAndPatient} className="rounded-xl w-full object-cover" />
        <div className="text-left xs:text-xs md:text-md lg:text-lg flex flex-col gap-3">
          <h1 className="font-ubuntu font-bold xs:text-xl md:text-4xl lg:text-6xl text-lightGreen">
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
        <div className="font-ubuntu font-bold xs:text-sm md:text-lg lg:text-3xl text-darkGreen xs:row-start-4 md:row-start-2">
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
        <img src={docAndPatient} className="rounded-xl h-full object-cover" />
      </section>
      <div
        className="xs:h-[25vh]  md:h-[52vh] bg-fixed bg-top xs:bg-fit lg:bg-center bg-cover bg-darkGreen bg-opacity-50 bg-blend-multiply"
        style={{ backgroundImage: `url(${outsideClinic})` }}
      ></div>
    </main>
  );
};
