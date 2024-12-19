import { plan } from '../assets/data.jsx';
import { Accordion } from '../components/Accordion.jsx';
export const PlanAVisit = () => {
  return (
    <main className="main-container items-center">
      <h1 className="xxs:my-10 xxs:text-4xl mt-10 text-center font-ubuntu font-bold md:my-20 md:text-6xl">
        Plan A Visit.
      </h1>
      <p className="xxs:text-xs text-center font-serif xs:text-sm md:text-base lg:w-3/4 lg:text-lg">
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
