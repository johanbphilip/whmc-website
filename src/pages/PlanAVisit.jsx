import { plan } from '../assets/data.jsx';
import { Accordion } from '../components/Accordion.jsx';
export const PlanAVisit = () => {
  return (
    <main className="flex flex-col place-items-center gap-12 text-darkGreen xs:mt-10 xs:px-3 xs:py-10 md:mt-20 md:px-14 lg:py-20">
      <h1 className="mt-10 font-ubuntu font-bold xs:mb-10 xs:text-4xl md:text-6xl lg:mb-10">
        Plan A Visit.
      </h1>
      <p className="text-center font-serif xs:text-xs md:text-sm lg:w-3/4 lg:text-base">
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
