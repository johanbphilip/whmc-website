import { ohipServices, nonOhipServices } from '../assets/data.jsx';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const Services = () => {
  return (
    <main className="main-container">
      <h1 className="text-center font-ubuntu font-bold xs:my-10 xs:text-4xl md:my-20 md:text-6xl">
        Our Services.
      </h1>
      <section className="flex w-full xs:flex-col xs:gap-5 md:mb-10 md:flex-row md:justify-evenly md:gap-10 lg:mb-0 lg:px-14 lg:py-20">
        <div className="flex flex-col gap-3 rounded-lg bg-darkGreen py-5 text-white xs:px-5 md:px-10">
          <h2 className="font-ubuntu text-2xl font-semibold">OHIP Services</h2>
          <ul>
            {ohipServices.map((service, index) => (
              <li key={index} className="md:text-normal mt-2 xs:text-lg">
                {service}
              </li>
            ))}
          </ul>
          <p className="text-xs text-white opacity-50">
            Services fully covered by Ontario Health Insurance Plan
          </p>
        </div>
        <div className="flex flex-col gap-3 rounded-lg bg-darkGreen py-5 text-white xs:px-5 md:px-10">
          <h2 className="font-ubuntu text-2xl font-semibold">
            Non-OHIP Services
          </h2>
          <ul>
            {nonOhipServices.map((service, index) => (
              <li key={index} className="md:text-normal mt-2 xs:text-lg">
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
      <section className="flex w-full flex-col items-center gap-10 rounded-xl bg-whiteGreen xs:justify-evenly xs:px-5 xs:py-10 md:justify-between md:px-10 md:py-20">
        <h1 className="font-ubuntu font-bold xs:text-4xl md:text-6xl">
          In-House Providers
        </h1>
        <div className="flex w-full justify-evenly xs:flex-col xs:items-center xs:gap-5 md:flex-row md:gap-10">
          <div className="flex w-full flex-col gap-3 rounded-lg bg-darkGreen px-5 py-5 text-left text-white">
            <p>Westney Spine Care & Wellness Centre</p>
            <a
              href="https://www.westneyspinecare.com/"
              target="_blank"
              className="flex place-items-center items-center hover:text-lightGreen hover:underline"
            >
              Learn More <MdKeyboardArrowRight className="size-6" />
            </a>
          </div>
          <div className="flex w-full flex-col gap-3 rounded-lg bg-darkGreen px-5 py-5 text-left text-white">
            <p>Westney Heights Diagnostic Centre</p>
            <a
              href="https://whdc.ca/"
              target="_blank"
              className="flex place-items-center items-center hover:text-lightGreen hover:underline"
            >
              Learn More <MdKeyboardArrowRight className="size-6" />
            </a>
          </div>
          <div className="flex w-full flex-col gap-3 rounded-lg bg-darkGreen px-5 py-5 text-left text-white">
            <p>Health Square Pharmacy</p>
            <a
              href="https://www.guardian-ida-remedysrx.ca/en/ontario/ajax/health-square-pharmacy-7029395"
              target="_blank"
              className="flex place-items-center items-center hover:text-lightGreen hover:underline"
            >
              Learn More <MdKeyboardArrowRight className="size-6" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
