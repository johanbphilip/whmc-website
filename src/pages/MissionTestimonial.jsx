import mission1 from '../assets/mission5.png';
import mission2 from '../assets/mission2.jpg';
import mission3 from '../assets/mission3.jpg';
import { Review } from '../components/Review';
import { Helmet } from 'react-helmet';

export const MissionTestimonial = () => {
  return (
    <>
      <Helmet>
        <title>Mission & Testimonials | WHMC</title>
        <meta
          name="description"
          content="WHMC aims to provide compassionate, high-quality, and accessible healthcare to our community. Read our mission statement and patient reviews to see how we will care for you."
        />
        {/* <link
          rel="canonical"
          href="https://westneyheightsmedical.com/mission-testimonials"
        /> */}
        <meta og:title="Mission & Testimonials | WHMC" />
        <meta og:description="WHMC aims to provide compassionate, high-quality, and accessible healthcare to our community. Read our mission statement and patient reviews to see how we will care for you." />
        <meta
          property="og:image"
          content="https://westneyheightsmedical.com/assets/mission-testimonials.png"
        ></meta>
        <meta
          property="og:site_name"
          content="Westney Heights Medical Centre"
        ></meta>
        <meta
          property="og:title"
          content="Mission & Testimonials | WHMC"
        ></meta>
        <meta
          property="og:url"
          content="https://westneyheightsmedical.com/mission-testimonials"
        ></meta>
      </Helmet>
      <main className="main-container">
        <section className="flex h-screen flex-col items-center justify-center gap-10 rounded-xl bg-whiteGreen text-center xxs:px-5 xxs:py-20 xxs:text-xs xs:text-sm md:text-lg lg:px-40">
          <h1 className="font-ubuntu font-semibold text-darkGreen xxs:mt-10 xxs:text-4xl xs:text-4xl md:my-20 md:text-6xl">
            Our Mission.
          </h1>
          <div className="flex flex-col gap-10 xxs:mb-0 xxs:px-0 md:mb-10 md:px-20">
            <p>
              Our mission is to provide compassionate, high-quality, and
              accessible healthcare to our community. We are committed to
              delivering prompt medical care with professionalism, respect, and
              integrity, ensuring every patient feels valued and supported on
              their journey to better health.
            </p>
            <p>
              Our vision is to be the trusted healthcare provider of choice in
              our community, known for delivering exceptional care, fostering
              wellness, and empowering individuals to lead healthier lives. We
              strive to create an inclusive and welcoming environment where
              innovation and excellence in healthcare meet.
            </p>
          </div>
          <div className="flex flex-row gap-10">
            <div className="scrollbar-hidden flex w-full items-center justify-evenly gap-10 xxs:overflow-x-auto md:overflow-hidden">
              <img
                src={mission1}
                className="xxs:object-center-top w-80 transform rounded-lg object-cover shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              />
              <img
                src={mission2}
                className="xxs:object-center-top w-80 transform rounded-lg object-cover shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              />
              <img
                src={mission3}
                className="xxs:object-center-top w-80 transform rounded-lg object-cover shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              />
            </div>
          </div>
        </section>
        <h1
          className="text-center font-ubuntu font-semibold xxs:my-3 xxs:text-4xl md:my-10 md:text-6xl"
          id="reviews"
        >
          Patient Reviews.
        </h1>
        {/* <section className="relative flex h-3/4 w-full flex-col rounded-xl bg-darkGreen text-left text-darkGreen xxs:p-3 md:p-10"> */}
        {/* <div className="flex gap-10">
          <div className="scrollbar-hidden flex overflow-x-auto xxs:gap-5 xxs:px-2 xxs:py-5 md:gap-10 md:p-5">
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </div>
        <p className="md:text-normal absolute text-white xxs:bottom-2 xxs:right-5 xxs:text-xs md:bottom-5 md:right-10">
          Scroll for more
        </p> */}
        {/* </section> */}
        <div
          className="elfsight-app-d3590001-494e-4f18-90d3-0702eb211baa"
          // id="reviews"
          data-elfsight-app-lazy
        ></div>
      </main>
    </>
  );
};
