import mission1 from '../assets/mission5.png';
import mission2 from '../assets/mission2.jpg';
import mission3 from '../assets/mission3.jpg';
import { Review } from '../components/Review';

export const MissionTestimonial = () => {
  return (
    <main className="main-container">
      <section className="xxs:px-5 xxs:py-20 xxs:text-xs flex h-screen flex-col items-center justify-center gap-10 rounded-xl bg-whiteGreen text-center xs:text-sm md:text-lg lg:px-40">
        <h1 className="xxs:mt-10 xxs:text-4xl font-ubuntu font-semibold text-darkGreen xs:text-4xl md:my-20 md:text-6xl">
          Our Mission.
        </h1>
        <div className="xxs:mb-0 xxs:px-0 flex flex-col gap-10 md:mb-10 md:px-20">
          <p>
            Our mission is to provide compassionate, high-quality, and
            accessible healthcare to our community. We are committed to
            delivering prompt medical care with professionalism, respect, and
            integrity, ensuring every patient feels valued and supported on
            their journey to better health.
          </p>
          <p>
            Our vision is to be the trusted healthcare provider of choice in our
            community, known for delivering exceptional care, fostering
            wellness, and empowering individuals to lead healthier lives. We
            strive to create an inclusive and welcoming environment where
            innovation and excellence in healthcare meet.
          </p>
        </div>
        <div className="flex flex-row gap-10">
          <div className="scrollbar-hidden xxs:overflow-x-auto flex w-full items-center justify-evenly gap-10 md:overflow-hidden">
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
      <h1 className="xxs:my-3 xxs:text-4xl text-center font-ubuntu font-semibold md:my-10 md:text-6xl">
        Patient Testimonials.
      </h1>
      <section className="xxs:p-3 relative flex h-3/4 w-full flex-col rounded-xl bg-darkGreen text-left text-darkGreen md:p-10">
        <div className="flex gap-10">
          <div className="scrollbar-hidden xxs:gap-5 xxs:px-2 xxs:py-5 flex overflow-x-auto md:gap-10 md:p-5">
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </div>
        <p className="md:text-normal xxs:bottom-2 xxs:right-5 xxs:text-xs absolute text-white md:bottom-5 md:right-10">
          Scroll for more
        </p>
      </section>
    </main>
  );
};
