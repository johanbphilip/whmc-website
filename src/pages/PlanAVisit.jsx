import { plan } from '../assets/data.jsx';
import { Accordion } from '../components/Accordion.jsx';
export const PlanAVisit = () => {
  return (
    <main className="main-container items-center">
      <h1 className="mt-10 text-center font-ubuntu font-bold xs:my-10 xs:text-4xl md:my-20 md:text-6xl">
        Plan A Visit.
      </h1>
      <p className="xs:text-md text-center font-serif xs:text-xs md:text-base lg:w-3/4 lg:text-lg">
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
