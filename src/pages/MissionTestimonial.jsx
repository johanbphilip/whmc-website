import mission1 from "../assets/mission5.png";
import mission2 from "../assets/mission2.jpg";
import mission3 from "../assets/mission3.jpg";
import { Review } from "../components/Review";

export const MissionTestimonial = () => {
  return (
    <main className="xs:mt-10 md:mt-20 flex flex-col px-5 font-serif justify-center items-center gap-10 relative mb-10">
      <section className="flex flex-col justify-center items-center px-40 text-lg gap-10 text-center h-screen bg-whiteGreen rounded-xl">
        <h1 className="font-ubuntu font-semibold text-7xl text-darkGreen mb-20">
          Our Mission.
        </h1>
        <div className="flex flex-col gap-10 mb-10 px-20">
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
        <div className="flex gap-10 w-full items-center justify-evenly">
          <img
            src={mission1}
            className="rounded-lg w-80 xs:object-center-top  object-cover shadow-md transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          />
          <img
            src={mission2}
            className="rounded-lg  w-80 xs:object-center-top  object-cover shadow-md transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          />
          <img
            src={mission3}
            className="rounded-lg w-80 xs:object-center-top  object-cover shadow-md transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          />
        </div>
      </section>
      <h1 className="font-ubuntu font-semibold text-7xl mb-10 mt-20">
        Patient Testimonials.
      </h1>
      <section className="flex flex-col rounded-xl text-darkGreen h-3/4 w-full bg-darkGreen p-10 text-left">
        <div className="flex flex-row gap-10 scroll-bar-hidden">
          <div className="flex overflow-x-auto gap-10 p-5 scrollbar-hidden">
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </div>
      </section>
    </main>
  );
};
