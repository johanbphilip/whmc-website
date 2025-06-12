import { Helmet } from 'react-helmet';
import { ohipServices, nonOhipServices } from '../assets/data.jsx';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Westney Heights Medical Centre</title>
        <meta
          name="description"
          content="At WHMC, we offer a range of services to meet your healthcare needs. Our OHIP services are fully covered by the Ontario Health Insurance Plan, while our non-OHIP services provide additional care options. We also have in-house providers for specialized care."
        />
        <link
          rel="canonical"
          href="https://westneyheightsmedical.com/services"
        />
        <meta og:title="Services | WHMC" />
        <meta og:description="At WHMC, we offer a range of services to meet your healthcare needs. Our OHIP services are fully covered by the Ontario Health Insurance Plan, while our non-OHIP services provide additional care options. We also have in-house providers for specialized care." />
        <meta
          property="og:image"
          content="https://westneyheightsmedical.com/assets/our-services.png"
        ></meta>
        <meta
          property="og:site_name"
          content="Westney Heights Medical Centre"
        ></meta>
        <meta property="og:title" content="Services | WHMC"></meta>
        <meta
          property="og:url"
          content="https://westneyheightsmedical.com/services"
        ></meta>
      </Helmet>

      <main className="main-container">
        <h1 className="text-center font-ubuntu font-bold xxs:my-10 xxs:text-4xl md:my-20 md:text-6xl">
          Our Services.
        </h1>
        <section className="flex w-full xxs:flex-col xxs:gap-5 md:mb-10 md:flex-row md:justify-evenly md:gap-10 lg:mb-0 lg:px-14 lg:py-20">
          <div className="flex flex-col gap-3 rounded-lg bg-darkGreen py-5 text-white xxs:px-5 md:px-10">
            <h3 className="font-ubuntu text-2xl font-semibold">
              OHIP Services
            </h3>
            <ul>
              {ohipServices.map((service, index) => (
                <li key={index} className="md:text-normal mt-2 xxs:text-lg">
                  {service}
                </li>
              ))}
            </ul>
            <p className="text-xs text-white opacity-50">
              Services fully covered by Ontario Health Insurance Plan
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-lg bg-darkGreen py-5 text-white xxs:px-5 md:px-10">
            <h3 className="font-ubuntu text-2xl font-semibold">
              Non-OHIP Services
            </h3>
            <ul>
              {nonOhipServices.map((service, index) => (
                <li key={index} className="md:text-normal mt-2 xxs:text-lg">
                  {service}
                </li>
              ))}
            </ul>
            <p className="text-xs text-white opacity-50">
              Services NOT covered by Ontario Health Insurance Plan
            </p>
          </div>
        </section>
        <section className="flex w-full flex-col items-center gap-10 rounded-xl bg-whiteGreen xxs:justify-evenly xxs:px-5 xxs:py-10 md:justify-between md:px-10 md:py-20">
          <h2 className="font-ubuntu font-bold xxs:text-4xl md:text-6xl">
            In-House Providers
          </h2>
          <div className="flex w-full justify-evenly xxs:flex-col xxs:items-center xxs:gap-5 md:flex-row md:gap-10">
            <div className="flex w-full flex-col gap-3 rounded-lg bg-darkGreen px-5 py-5 text-left text-white">
              <p>Westney Spine Care & Wellness Centre</p>
              <a
                href="https://www.westneyspinecare.com/"
                target="_blank"
                className="mobile-link flex place-items-center items-center"
              >
                Learn More{' '}
                <MdKeyboardArrowRight className="size-6 xxs:hidden md:block" />
              </a>
            </div>
            <div className="flex w-full flex-col gap-3 rounded-lg bg-darkGreen px-5 py-5 text-left text-white">
              <p>Westney Heights Diagnostic Centre</p>
              <a
                href="https://whdc.ca/"
                target="_blank"
                className="mobile-link flex place-items-center items-center"
              >
                Learn More{' '}
                <MdKeyboardArrowRight className="size-6 xxs:hidden md:block" />
              </a>
            </div>
            <div className="flex w-full flex-col gap-3 rounded-lg bg-darkGreen px-5 py-5 text-left text-white">
              <p>Health Square Pharmacy</p>
              <a
                href="https://www.guardian-ida-remedysrx.ca/en/ontario/ajax/health-square-pharmacy-7029395"
                target="_blank"
                className="mobile-link flex place-items-center items-center"
              >
                Learn More{' '}
                <MdKeyboardArrowRight className="size-6 xxs:hidden md:block" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
