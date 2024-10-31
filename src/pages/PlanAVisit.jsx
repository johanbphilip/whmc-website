import { plan } from "../assets/data.jsx";
import { Accordion } from "../components/Accordion.jsx";
export const PlanAVisit = () => {
  return (
    <main className="mt-20 flex flex-col place-items-center py-20 px-14 text-darkGreen">
      <h1 className="font-ubuntu font-bold text-6xl mb-20">Plan A Visit.</h1>
      <p className="font-serif text-center w-3/4">
        Thank you for choosing Westney Heights Medical Centre for your
        healthcare needs! To ensure that you have a satisfactory visit and that
        we meet all your needs, please refer to the questions below to ensure
        that you are well prepared for your visit.
      </p>
      <div className="w-1/2 mt-10">
        {plan.map((plan, index) => (
          <Accordion summary={plan.summary} detail={plan.detail} key={index} />
        ))}
      </div>
    </main>
  );
};
