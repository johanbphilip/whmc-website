import { NavLink } from "react-router-dom";
import docAndPatient from "../assets/doc-patient1.jpeg";
import outsideClinic from "../assets/outside-clinic.jpg";
import { BiSolidBadgeCheck } from "react-icons/bi";

export const Home = () => {
  return (
    <>
      <main className="mt-20 flex flex-col ">
        <section className="bg-gradient-to-t from-darkGreen to-lightGreen w-full place-items-center py-20 px-14 text-darkGreen flex justify-between rounded-b-lg">
          <div className="">
            <h1 className="font-ubuntu font-bold text-6xl text-white leading-tight mb-10">
              <span className="font-thin"> Welcome to</span>
              <br />
              Westney Heights
              <br />
              Medical Centre.
            </h1>
            <NavLink
              to={"/plan-a-visit"}
              className={
                "font-serif font-medium bg-white px-5 py-2 hover:bg-lightGreen hover:bg-transparent hover:text-white rounded-xl ease-in duration-200"
              }
            >
              PLAN A VISIT
            </NavLink>
          </div>
          <img src={docAndPatient} className="rounded-xl w-[40rem]" />
        </section>
        <section className="w-full font-serif place-items-center py-20 px-14 text-darkGreen grid grid-cols-2 grid-rows-2 gap-10">
          <img src={docAndPatient} className="rounded-xl h-full object-cover" />
          <div className="text-left text-md flex flex-col gap-3">
            <h1 className="font-ubuntu font-bold text-6xl text-lightGreen">
              <span className="text-darkGreen"> Your Health </span>
              is <br />
              Our Priority.
            </h1>
            <p>
              With dedicated physicians who are dedicated to your health care
              needs, you can rest assured that we will provide you with a
              comprehensive medical experience in a modern, clean and caring
              environment.
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
          <div className="font-ubuntu font-bold text-2xl text-darkGreen">
            <p className="flex flex-row place-items-center gap-3 ">
              <BiSolidBadgeCheck className="size-14 fill-lightGreen" /> Serving
              the Durham Region since 19...?
            </p>
            <p className="flex flex-row place-items-center gap-3">
              <BiSolidBadgeCheck className="size-14 fill-lightGreen" /> Open 7
              days a week
            </p>
            <p className="flex flex-row place-items-center gap-3">
              <BiSolidBadgeCheck className="size-14 fill-lightGreen" /> Onsite
              imaging and pharmacy
            </p>
            <p className="flex flex-row place-items-center gap-3">
              <BiSolidBadgeCheck className="size-14 fill-lightGreen" /> Onsite
              imaging and pharmacy
            </p>
            <p className="flex flex-row place-items-center gap-3">
              <BiSolidBadgeCheck className="size-14 fill-lightGreen" /> Add one
              more item?
            </p>
          </div>
          <img src={docAndPatient} className="rounded-xl h-full object-cover" />
        </section>
      </main>
      <div
        className="h-[52vh] bg-fixed bg-center bg-cover bg-darkGreen bg-opacity-50 bg-blend-multiply"
        style={{ backgroundImage: `url(${outsideClinic})` }}
      ></div>
    </>
  );
};
