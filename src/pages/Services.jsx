import { ohipServices, nonOhipServices } from '../assets/data.jsx';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const Services = () => {
  return (
    <main className="main-container">
      <h1 className="xxs:my-10 xxs:text-4xl text-center font-ubuntu font-bold md:my-20 md:text-6xl">
        Our Services.
      </h1>
      <section className="xxs:flex-col xxs:gap-5 flex w-full md:mb-10 md:flex-row md:justify-evenly md:gap-10 lg:mb-0 lg:px-14 lg:py-20">
        <div className="xxs:px-5 flex flex-col gap-3 rounded-lg bg-darkGreen py-5 text-white md:px-10">
          <h2 className="font-ubuntu text-2xl font-semibold">OHIP Services</h2>
          <ul>
            {ohipServices.map((service, index) => (
              <li key={index} className="md:text-normal xxs:text-lg mt-2">
                {service}
              </li>
            ))}
          </ul>
          <p className="text-xs text-white opacity-50">
            Services fully covered by Ontario Health Insurance Plan
          </p>
        </div>
        <div className="xxs:px-5 flex flex-col gap-3 rounded-lg bg-darkGreen py-5 text-white md:px-10">
          <h2 className="font-ubuntu text-2xl font-semibold">
            Non-OHIP Services
          </h2>
          <ul>
            {nonOhipServices.map((service, index) => (
              <li key={index} className="md:text-normal xxs:text-lg mt-2">
                {service}
              </li>
            ))}
          </ul>
          <p className="text-xs text-white opacity-50">
            Services NOT covered by Ontario Health Insurance Plan
          </p>
        </div>
      </section>
      {/*//TODO: find a better alternative to In-house Local or Affiliated*/}
      <section className="xxs:justify-evenly xxs:px-5 xxs:py-10 flex w-full flex-col items-center gap-10 rounded-xl bg-whiteGreen md:justify-between md:px-10 md:py-20">
        <h1 className="xxs:text-4xl font-ubuntu font-bold md:text-6xl">
          In-House Providers
        </h1>
        <div className="xxs:flex-col xxs:items-center xxs:gap-5 flex w-full justify-evenly md:flex-row md:gap-10">
          <div className="flex w-full flex-col gap-3 rounded-lg bg-darkGreen px-5 py-5 text-left text-white">
            <p>Westney Spine Care & Wellness Centre</p>
            <a
              href="https://www.westneyspinecare.com/"
              target="_blank"
              className="mobile-link flex place-items-center items-center"
            >
              Learn More{' '}
              <MdKeyboardArrowRight className="xxs:hidden size-6 md:block" />
            </a>
          </div>
          <div className="flex w-full flex-col gap-3 rounded-lg bg-darkGreen px-5 py-5 text-left text-white">
            <p>Westney Heights Diagnostic Centre</p>
            <a
              href="https://whdc.ca/"
              target="_blank"
              className="mobile-link flex place-items-center items-center"
            >
              Learn More{' '}
              <MdKeyboardArrowRight className="xxs:hidden size-6 md:block" />
            </a>
          </div>
          <div className="flex w-full flex-col gap-3 rounded-lg bg-darkGreen px-5 py-5 text-left text-white">
            <p>Health Square Pharmacy</p>
            <a
              href="https://www.guardian-ida-remedysrx.ca/en/ontario/ajax/health-square-pharmacy-7029395"
              target="_blank"
              className="mobile-link flex place-items-center items-center"
            >
              Learn More{' '}
              <MdKeyboardArrowRight className="xxs:hidden size-6 md:block" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
