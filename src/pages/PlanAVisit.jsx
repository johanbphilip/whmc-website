import { Helmet } from 'react-helmet';
import { plan } from '../assets/data.jsx';
import { Accordion } from '../components/Accordion.jsx';
export const PlanAVisit = () => {
  return (
    <>
      <Helmet>
        <title>Plan A Visit | WHMC</title>
        <meta
          name="description"
          content="Thank you for choosing Westney Heights Medical Centre for your healthcare needs! To ensure that you have a satisfactory visit and that we meet all your needs, please refer to the questions below to ensure that you are well prepared for your visit."
        />
        {/* <link
          rel="canonical"
          href="https://westneyheightsmedical.com/plan-a-visit"
        /> */}
        <meta og:title="Plan A Visit | WHMC" />
        <meta og:description="Thank you for choosing Westney Heights Medical Centre for your healthcare needs! To ensure that you have a satisfactory visit and that we meet all your needs, please refer to the questions below to ensure that you are well prepared for your visit." />
        <meta property="og:image" content="./plan-a-visit.png"></meta>
        <meta
          property="og:site_name"
          content="Westney Heights Medical Centre"
        ></meta>
        <meta property="og:title" content="Plan A Visit | WHMC"></meta>
        <meta
          property="og:url"
          content="https://westneyheightsmedical.com/plan-a-visit"
        ></meta>
      </Helmet>
      <main className="main-container items-center">
        <h1 className="mt-10 text-center font-ubuntu font-bold xxs:my-10 xxs:text-4xl md:my-20 md:text-6xl">
          Plan A Visit.
        </h1>
        <p className="text-center font-serif xxs:text-xs xs:text-sm md:text-base lg:w-3/4 lg:text-lg">
          Thank you for choosing Westney Heights Medical Centre for your
          healthcare needs! To ensure that you have a satisfactory visit and
          that we meet all your needs, please refer to the questions below to
          ensure that you are well prepared for your visit.
        </p>
        <div className="w-full">
          <Accordion items={plan} />
        </div>
      </main>
    </>
  );
};
