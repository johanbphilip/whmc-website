import { services } from "../assets/data.jsx";
import { ServiceBlock } from "../components/ServiceBlock";
import { FiExternalLink } from "react-icons/fi";

export const Services = () => {
  return (
    <main className="xs:mt-10 md:mt-20 xs:py-10 place-items-center lg:py-20 xs:px-3 md:px-6 lg:px-14 text-darkGreen font-serif">
      <section className="grid xs:gap-5 md:gap-3 xs:grid-cols-2 md:grid-cols-4 w-4/5">
        <h1 className="font-ubuntu font-bold xs:mb-5 xs:text-4xl col-span-2 md:text-7xl lg:text-8xl lg:col-span-2">
          Our Services.
        </h1>
        <p className="xs:row-start-2 xs:col-start-2 xs:self-center xs:text-xs md:text-md lg:text-lg md:col-start-1 md:col-span-2 lg:col-span-1 ">
          Westney Heights offers a variety of services that aim to treat
          patients of their walk-in needs. We are a walk-in clinic and as such,
          patients will be seen on a first come first serve basis.
        </p>
        {services.map((service, index) => (
          <ServiceBlock key={index} service={service} />
        ))}
        <p className="xs:self-center xs:text-xs md:text-md lg:text-lg md:col-span-2 lg:col-span-1 lg:col-start-4 lg:row-start-3">
          For availablity of vaccines, doctors' services and any other
          inquiries, please contact the clinic.
        </p>
      </section>
    </main>
  );
};
