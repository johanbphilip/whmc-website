import { NavLink, redirect } from 'react-router';
import docAndPatient from '../assets/doc-patient1.jpeg';
import docAndPatient2 from '../assets/doc-patient2.jpg';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Westney Heights Medical Centre</title>
        <meta
          name="description"
          content="Westney Heights Medical Centre is your one-stop solution for all your emergent care needs. Our team of dedicated physicians prioritize your health in a modern, clean and caring environment."
        />
        <link rel="canonical" href="https://westneyheightsmedical.com/" />
        <meta og:title="Westney Heights Medical Centre" />
        <meta og:description="Westney Heights Medical Centre is your one-stop solution for all your emergent care needs. Our team of dedicated physicians prioritize your health in a modern, clean and caring environment." />
      </Helmet>
      <main className="main-container relative">
        <section className="flex h-screen items-center justify-evenly rounded-xl bg-darkGreen text-white xxs:flex-col xxs:gap-10 xxs:py-20 xxs:text-center md:gap-0 md:px-5 md:py-20 lg:flex-row lg:text-left">
          <img
            src={docAndPatient2}
            className="h-1/2 w-2/3 rounded-lg object-cover shadow-lg lg:hidden"
          />
          <div className="flex flex-col justify-center gap-5 xxs:items-center xxs:px-2 md:px-0 lg:items-start">
            <h1 className="font-ubuntu text-xs font-semibold xxs:text-4xl md:text-6xl lg:text-7xl">
              Westney Heights <br />
              Medical Centre
            </h1>
            <p className="md:text-md md:text-md text-lightGreen xxs:text-sm md:text-base">
              Your one-stop solution for your emergent care needs.
            </p>
            <div className="flex items-center gap-5">
              <NavLink
                to={'/plan-a-visit'}
                className={
                  'bg-xs w-fit rounded-xl bg-white font-medium text-darkGreen duration-200 ease-in hover:bg-lightGreen hover:text-white xxs:px-3 xxs:py-1 xxs:text-base md:px-5 md:py-2 md:text-lg'
                }
              >
                PLAN A VISIT
              </NavLink>
              <NavLink
                to={'/hours'}
                className={
                  'mobile-link flex items-center text-xs font-medium hover:text-lightGreen xxs:text-base md:text-xl'
                }
              >
                CLINIC HOURS{' '}
                <MdKeyboardArrowRight className="size-6 xxs:hidden lg:block" />
              </NavLink>
            </div>
          </div>
          <img
            src={docAndPatient2}
            className="xxs:object-center-top hover-images rounded-lg object-cover xxs:hidden md:h-4/5 md:w-80 lg:block"
          />
        </section>
        <div className="absolute inset-x-0 -mt-0 justify-evenly overflow-hidden py-3 text-white xxs:hidden md:flex">
          <div className="hover-images flex flex-col items-end justify-evenly rounded-xl bg-lightGreen xxs:p-2 md:size-44 lg:size-60 lg:px-5 lg:py-3">
            <div className="flex flex-col gap-4 text-left text-xs">
              <h2 className="font-ubuntu font-semibold xxs:text-xl lg:text-3xl">
                Our Team
              </h2>
              <p className="xxs:text-xs lg:text-sm">
                Meet the team of doctors at Westney Heights Medical who will be
                treating you.
              </p>
            </div>
            <NavLink to={'/our-team'} className={'xxs:size-7 md:size-10'}>
              <BsArrowUpRightCircleFill className="fill-xs xxs:size-7 lg:size-10" />
            </NavLink>
          </div>
          <div className="hover-images flex flex-col items-end justify-evenly rounded-xl bg-lightGreen xxs:p-2 md:size-44 lg:size-60 lg:px-3 lg:py-3">
            <div className="flex flex-col gap-4 text-left text-xs">
              <h2 className="xxs:text-md font-ubuntu font-semibold xxs:text-xl lg:text-3xl">
                Our Services
              </h2>
              <p className="xxs:text-xs lg:text-sm">
                Checkout the wide variety of services offered at Westney Heights
                Medical Center.
              </p>
            </div>
            <NavLink to={'/services'} className={'xxs:size-7 md:size-10'}>
              <BsArrowUpRightCircleFill className="fill-xs xxs:size-7 lg:size-10" />
            </NavLink>
          </div>
          <div className="hover-images flex flex-col items-end justify-evenly rounded-xl bg-lightGreen xxs:p-2 md:size-44 lg:size-60 lg:px-5 lg:py-3">
            <div className="flex flex-col gap-4 text-left text-xs">
              <h2 className="font-ubuntu font-semibold xxs:text-xl lg:text-3xl">
                Our Hours
              </h2>
              <p className="xxs:text-xs lg:text-sm">
                Click below to learn more aobut our hours, location and contact
                information.
              </p>
            </div>

            <NavLink
              to={'/hours'}
              className={'text-start xxs:size-7 md:size-10'}
            >
              <BsArrowUpRightCircleFill className="fill-xs xxs:size-7 lg:size-10" />
            </NavLink>
          </div>
        </div>
        <section className="flex items-center justify-evenly rounded-xl bg-whiteGreen xxs:h-fit xxs:flex-col xxs:gap-4 xxs:py-4 md:h-screen md:flex-row md:gap-0 md:py-0">
          <div className="flex flex-col gap-3 text-left xxs:w-fit xxs:px-4 xxs:text-sm md:w-1/2 md:px-0 md:text-base lg:text-lg">
            <h1 className="font-ubuntu text-5xl font-bold text-lightGreen">
              <span className="text-darkGreen"> Your Health </span>
              is Our Priority.
            </h1>
            <p>
              With dedicated physicians who prioritize your health care needs,
              you can rest assured that we will provide you with a comprehensive
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
            className="hover-images flex rounded-xl object-cover shadow-md xxs:relative xxs:h-40 xxs:w-60 md:h-80 md:w-80"
          />
        </section>
      </main>
    </>
  );
};
