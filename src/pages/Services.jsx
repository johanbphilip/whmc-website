import { services } from "../assets/data";
import { ServiceBlock } from "../components/ServiceBlock";

export const Services = () => {
  return (
    <main className="mt-[4rem] flex flex-col place-items-center p-20 px-10 text-darkGreen font-serif gap-5">
      <h1 className="font-ubuntu font-bold text-6xl mb-10">Our Services.</h1>
      <p className="text-center">
        At Westney Heights we offer a variety of services that aim to treat
        patients of their walk-in needs. As we are a walk-in clinic, we do not
        have a family practice or do appointments. Patients will be seen on a
        first come first serve basis.
      </p>
      <p>Services we offer include:</p>
      <div className="grid grid-rows-3 grid-cols-4 gap-5">
        {services.map((service, index) => (
          <ServiceBlock key={index} service={service} />
        ))}
      </div>
      <h1 className="font-ubuntu font-bold text-6xl m-10">
        Adjacent Providers.
      </h1>
      <p className="text-center mb-3">
        Alongside our clinic, there are other healthcare services offered within
        the same building that may serve your health care needs.{" "}
        <span className="text-red-500 font-normal">REWORD</span>
      </p>
      <p className="">
        Westney Heights Diagnostic Centre:{" "}
        <a href="https://whdc.ca/" target="_blank" rel="noopener noreferrer">
          https://whdc.ca/
        </a>
      </p>
      <p className="">
        Westney Spine Care & Wellness Centre:{" "}
        <a
          href="https://www.westneyspinecare.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.westneyspinecare.com/
        </a>
      </p>
      <p className="">
        Health Square Pharmacy:{" "}
        <a
          href="https://www.guardian-ida-remedysrx.ca/en/ontario/ajax/health-square-pharmacy-7029395"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.guardian-ida-remedysrx.ca/en/ontario/ajax/health-square-pharmacy-7029395
        </a>
      </p>
    </main>
  );
};
