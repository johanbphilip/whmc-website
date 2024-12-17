import mission1 from '../assets/mission5.png';
import mission2 from '../assets/mission2.jpg';
import mission3 from '../assets/mission3.jpg';
import { Review } from '../components/Review';

export const MissionTestimonial = () => {
  return (
    <main className="relative mb-10 flex flex-col items-center justify-center gap-10 px-5 font-serif xs:mt-10 md:mt-20">
      <section className="flex h-screen flex-col items-center justify-center gap-10 rounded-xl bg-whiteGreen text-center xs:px-5 xs:py-20 xs:text-xs md:px-40 md:text-lg">
        <h1 className="font-ubuntu font-semibold text-darkGreen xs:mt-20 xs:text-4xl md:mb-20 md:text-7xl">
          Our Mission.
        </h1>
        <div className="flex flex-col gap-10 xs:mb-0 xs:px-0 md:mb-10 md:px-20">
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
          <div className="scrollbar-hidden flex w-full items-center justify-evenly gap-10 xs:overflow-x-auto md:overflow-hidden">
            <img
              src={mission1}
              className="xs:object-center-top w-80 transform rounded-lg object-cover shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            />
            <img
              src={mission2}
              className="xs:object-center-top w-80 transform rounded-lg object-cover shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            />
            <img
              src={mission3}
              className="xs:object-center-top w-80 transform rounded-lg object-cover shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            />
          </div>
        </div>
      </section>
      <h1 className="font-ubuntu font-semibold xs:my-3 xs:text-4xl md:my-10 md:text-7xl">
        Patient Testimonials.
      </h1>
      <section className="relative flex h-3/4 w-full flex-col rounded-xl bg-darkGreen text-left text-darkGreen xs:p-3 md:p-10">
        <div className="flex gap-10">
          <div className="scrollbar-hidden flex overflow-x-auto xs:gap-5 xs:px-2 xs:py-5 md:gap-10 md:p-5">
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </div>
        <p className="md:text-normal absolute text-white xs:bottom-2 xs:right-5 xs:text-xs md:bottom-5 md:right-10">
          Scroll for more
        </p>
      </section>
    </main>
  );
};
