import { plan } from "../assets/data.jsx";
import { Accordion } from "../components/Accordion.jsx";
export const PlanAVisit = () => {
  return (
    <main className="xs:mt-10 md:mt-20 flex flex-col place-items-center xs:py-10 lg:py-20 xs:px-3 md:px-14 text-darkGreen gap-12">
      <h1 className="font-ubuntu font-bold xs:text-4xl md:text-6xl xs:mb-10 lg:mb-10 mt-10">
        Plan A Visit.
      </h1>
      <p className="font-serif text-center lg:w-3/4 xs:text-xs md:text-sm lg:text-base">
        Thank you for choosing Westney Heights Medical Centre for your
        healthcare needs! To ensure that you have a satisfactory visit and that
        we meet all your needs, please refer to the questions below to ensure
        that you are well prepared for your visit.
      </p>
      <div className="w-full">
        <Accordion items={plan} />
      </div>
    </main>
  );
};
