import { FaLocationDot, FaPhone, FaPrint } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { CustomMap } from '../components/CustomMap';
import { Helmet } from 'react-helmet';

export const Hours = () => {
  return (
    <>
      <Helmet>
        <title>Hours | WHMC</title>
        <meta
          name="description"
          content="We are open Monday through Sunday starting at 8am. Closing times may vary from posted hours depending on clinic capacity and wait times."
        />
        {/* <link rel="canonical" href="https://westneyheightsmedical.com/hours" /> */}
        <meta og:title="Hours | WHMC" />
        <meta og:description="We are open Monday through Sunday starting at 8am. Closing times may vary from posted hours depending on clinic capacity and wait times." />
        <meta
          property="og:image"
          content="https://westneyheightsmedical.com/hours.png"
        ></meta>
        <meta
          property="og:site_name"
          content="Westney Heights Medical Centre"
        ></meta>
        <meta property="og:title" content="Hours | WHMC"></meta>
        <meta
          property="og:url"
          content="https://westneyheightsmedical.com/hours"
        ></meta>
      </Helmet>
      <main className="main-container">
        <h1 className="text-center font-ubuntu font-bold xxs:my-10 xxs:text-5xl md:my-20 lg:text-6xl">
          Our Hours.
        </h1>
        <section className="grid xxs:grid-cols-1 xxs:grid-rows-2 xxs:text-xs xs:text-sm md:text-lg lg:grid-cols-2 lg:grid-rows-1">
          <div className="flex flex-col place-items-center gap-3 bg-lightGreen text-white xxs:row-start-2 xxs:p-3 xxs:px-5 md:row-start-2 md:p-6 lg:row-start-1 lg:p-20">
            <h2 className="font-ubuntu font-bold xxs:text-2xl md:text-4xl">
              Hours
            </h2>
            <div className="flex flex-row xxs:w-3/4 lg:w-4/5">
              <div className="flex flex-col gap-0.5 xxs:w-1/2">
                <p>Monday</p>
                <p>Tuesday</p>
                <p>Wednesday</p>
                <p>Thursday</p>
                <p>Friday</p>
                <p>Weekends</p>
              </div>
              <div className="flex flex-col gap-0.5 text-right xxs:w-1/2">
                <p>8am - 4pm</p>
                <p>8am - 2pm</p>
                <p>8am - 4pm</p>
                <p>8am - 4pm</p>
                <p>8am - 2pm</p>
                <p>8am - 2pm</p>
              </div>
            </div>
            <h2 className="font-ubuntu font-bold xxs:text-2xl md:text-4xl">
              Contact Us
            </h2>
            <div className="flex flex-col items-center justify-evenly gap-2 text-center">
              <p className="flex place-items-center gap-2">
                <FaLocationDot />
                15 Westney Road N &#35;2, Ajax, ON, L1T 1P4{' '}
              </p>
              <p className="flex place-items-center gap-3">
                <FaPhone />
                905&#45;428&#45;8055
                <FaPrint />
                905&#45;428&#45;1501
              </p>
              <p className="flex place-items-center gap-2">
                <IoMail />
                management.westneyheights@gmail.com
              </p>
              <p className="font-bold xxs:my-2 md:my-4 md:text-lg lg:text-xl">
                Visits are by walk-in only.
              </p>
              <p>
                Patients are seen Monday through Sunday starting at 8am. Closing
                times may vary from posted hours depending on clinic capacity
                and wait times.
              </p>
              <p>
                Patients can contact the clinic to find out the exact closing
                time and wait times for each day.
              </p>
            </div>

            {/*<Calendar />*/}
          </div>
          <div>
            <CustomMap />
          </div>
        </section>
      </main>
    </>
  );
};
