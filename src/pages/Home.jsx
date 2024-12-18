import { NavLink } from 'react-router-dom';
import docAndPatient from '../assets/doc-patient1.jpeg';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const Home = () => {
  return (
    <main className="main-container relative">
      <section className="flex h-screen items-center justify-evenly rounded-xl bg-darkGreen xs:flex-col xs:gap-10 xs:py-20 xs:text-center md:gap-0 md:px-5 md:py-20 lg:flex-row lg:text-left">
        <img
          src={docAndPatient}
          className="h-1/2 w-2/3 rounded-lg object-cover shadow-lg lg:hidden"
        />
        <div className="flex flex-col justify-center gap-5 xs:items-center lg:items-start">
          <h1 className="font-ubuntu font-semibold text-white xs:text-5xl md:text-6xl lg:text-7xl">
            Westney Heights <br />
            Medical Centre
          </h1>
          <p className="md:text-md md:text-md text-lightGreen xs:text-sm md:text-base">
            See if Sheema has an ideas for a caption.
          </p>
          <div className="flex items-center gap-5">
            <NavLink
              to={'/plan-a-visit'}
              className={
                'xs:text-md w-fit rounded-xl bg-white font-medium duration-200 ease-in xs:px-3 xs:py-1 md:px-5 md:py-2 md:text-lg md:hover:bg-lightGreen md:hover:text-white'
              }
            >
              PLAN A VISIT
            </NavLink>
            <NavLink
              to={'/hours'}
              className={
                'xs:text-md flex items-center font-medium text-white underline-offset-4 hover:text-lightGreen xs:underline md:text-xl md:hover:underline lg:no-underline'
              }
            >
              CLINIC HOURS{' '}
              <MdKeyboardArrowRight className="size-6 xs:hidden lg:block" />
            </NavLink>
          </div>
        </div>
        <img
          src={docAndPatient}
          className="xs:object-center-top hover-images rounded-lg object-cover xs:hidden md:h-4/5 md:w-80 lg:block"
        />
      </section>
      <div className="absolute inset-x-0 -mt-0 justify-evenly overflow-hidden py-3 xs:hidden md:flex">
        <div className="hover-images flex flex-col items-end justify-evenly rounded-xl bg-lightGreen xs:p-2 md:size-44 lg:size-60 lg:px-5 lg:py-3">
          <div className="flex flex-col gap-4 text-left text-white">
            <h2 className="font-ubuntu font-semibold xs:text-xl lg:text-2xl">
              Our Team
            </h2>
            <p className="xs:text-xs lg:text-sm">
              Meet the team of doctors at Westney Heights Medical who will be
              treating you.
            </p>
          </div>
          <NavLink to={'/our-team'} className={'xs:size-7 md:size-10'}>
            <BsArrowUpRightCircleFill className="fill-white xs:size-7 lg:size-10" />
          </NavLink>
        </div>
        <div className="hover-images flex flex-col items-end justify-evenly rounded-xl bg-lightGreen xs:p-2 md:size-44 lg:size-60 lg:px-5 lg:py-3">
          <div className="flex flex-col gap-4 text-left text-white">
            <h2 className="xs:text-md font-ubuntu font-semibold xs:text-xl lg:text-2xl">
              Our Services
            </h2>
            <p className="xs:text-xs lg:text-sm">
              Checkout the wide variety of services offered at Westney Heights
              Medical Center.
            </p>
          </div>
          <NavLink to={'/services'} className={'xs:size-7 md:size-10'}>
            <BsArrowUpRightCircleFill className="fill-white xs:size-7 lg:size-10" />
          </NavLink>
        </div>
        <div className="hover-images flex flex-col items-end justify-evenly rounded-xl bg-lightGreen xs:p-2 md:size-44 lg:size-60 lg:px-5 lg:py-3">
          <div className="flex flex-col gap-4 text-left text-white">
            <h2 className="font-ubuntu font-semibold xs:text-xl lg:text-2xl">
              Our Hours
            </h2>
            <p className="xs:text-xs lg:text-sm">
              Click below to learn more aobut our hours, location and contact
              information.
            </p>
          </div>
          <NavLink to={'/hours'} className={'xs:size-7 md:size-10'}>
            <BsArrowUpRightCircleFill className="fill-white xs:size-7 lg:size-10" />
          </NavLink>
        </div>
      </div>
      <section className="flex items-center justify-evenly rounded-xl bg-whiteGreen xs:h-fit xs:flex-col xs:gap-4 xs:py-4 md:h-screen md:flex-row md:gap-0 md:py-0">
        <div className="flex flex-col gap-3 text-left xs:w-fit xs:px-4 xs:text-sm md:w-1/2 md:px-0 md:text-base lg:text-lg">
          <h1 className="font-ubuntu text-5xl font-bold text-lightGreen">
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
          className="hover-images flex rounded-xl object-cover shadow-md xs:relative xs:h-40 xs:w-60 md:h-80 md:w-80"
        />
      </section>
    </main>
  );
};
