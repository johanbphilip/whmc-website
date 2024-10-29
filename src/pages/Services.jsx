import { services } from "../assets/data";
import { ServiceBlock } from "../components/ServiceBlock";
import { FiExternalLink } from "react-icons/fi";

export const Services = () => {
  return (
    <main className="mt-20 place-items-center py-20 px-10 text-darkGreen font-serif min-h-screen">
      <section className="grid gap-5 xs:grid-cols-2 md:grid-cols-4 ">
        <h1 className="font-ubuntu font-bold text-6xl col-span-2 xs:grid xs:grid-cols-2 xs:gap-5 md:col-span-3 md:text-7xl lg:text-8xl lg:col-span-2">
          Our Services.
        </h1>
        <p className="xs:row-start-2 xs:col-start-2 md:col-start-1 md:col-span-2 lg:col-span-1 xs:self-center">
          Westney Heights offers a variety of services that aim to treat
          patients of their walk-in needs. We are a walk-in clinic and as such,
          patients will be seen on a first come first serve basis.
        </p>
        {services.map((service, index) => (
          <ServiceBlock key={index} service={service} />
        ))}
        <p className="xs:self-center md:col-span-1 lg:col-span-1 lg:col-start-4 lg:row-start-3">
          For availablity of vaccines, doctors' services and any other
          inquiries, please contact the clinic.
        </p>
      </section>
    </main>
  );
};
