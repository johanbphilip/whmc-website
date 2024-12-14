import { ohipServices, nonOhipServices } from "../assets/data.jsx";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Services = () => {
  return (
    <main className="xs:mt-10 md:mt-20 xs:py-10 lg:py-0 xs:px-3 md:px-8 lg:px-0 text-darkGreen font-serif flex flex-col justify-evenly  gap-10 items-center w-full">
      <h1 className="font-ubuntu font-bold text-6xl mt-20">Our Services.</h1>
      <section className="lg:px-14 lg:py-20 flex flex-row w-full justify-evenly">
        <div className="bg-darkGreen text-white rounded-lg px-10 py-5 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold font-ubuntu">OHIP Services</h2>
          <ul>
            {ohipServices.map((service, index) => (
              <li key={index} className="mt-2">
                {service}
              </li>
            ))}
          </ul>
          <p className="text-white opacity-50 text-xs">
            Services fully covered by Ontario Health Insurance Plan
          </p>
        </div>
        <div className="bg-darkGreen  text-white rounded-lg px-10 py-5 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold font-ubuntu">
            Non-OHIP Services
          </h2>
          <ul>
            {nonOhipServices.map((service, index) => (
              <li key={index} className="mt-2">
                {service}
              </li>
            ))}
          </ul>
          <p className="text-white opacity-50 text-xs">
            Services NOT covered by Ontario Health Insurance Plan
          </p>
        </div>
      </section>
      {/*//TODO: find a better alternative to In-house Local or Affiliated*/}
      <section className="lg:px-10 lg:py-20 flex flex-col w-full justify-between items-center bg-whiteGreen">
        <h1 className="font-ubuntu font-bold xs:text-4xl md:text-6xl mb-20">
          In-House Providers
        </h1>
        <div className="flex flex-row w-full justify-evenly">
          <div className="bg-darkGreen w-fit text-white rounded-lg px-10 py-5 flex flex-col gap-3 text-left">
            <p>Westney Spine Care & Wellness Centre</p>
            <a
              href="https://www.westneyspinecare.com/"
              target="_blank"
              className="flex place-items-center items-center hover:text-lightGreen hover:underline"
            >
              Learn More <MdKeyboardArrowRight className="size-6" />
            </a>
          </div>
          <div className="bg-darkGreen w-fit text-white rounded-lg px-10 py-5 flex flex-col gap-3 text-left">
            <p>Westney Heights Diagnostic Centre</p>
            <a
              href="https://whdc.ca/"
              target="_blank"
              className="flex place-items-center items-center hover:text-lightGreen hover:underline"
            >
              Learn More <MdKeyboardArrowRight className="size-6" />
            </a>
          </div>
          <div className="bg-darkGreen w-1/4 text-white rounded-lg px-10 py-5 flex flex-col gap-3 text-left">
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
