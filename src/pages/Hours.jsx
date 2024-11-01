import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { CustomMap } from "../components/CustomMap";

export const Hours = () => {
  return (
    <main className="xs:mt-10 md:mt-20 flex flex-col place-items-center xs:py-10 lg:py-20 xs:px-3 md:px-6 lg:px-20 text-darkGreen font-serif">
      <h1 className="font-ubuntu font-bold xs:text-4xl lg:text-6xl mb-20">
        Our Hours.
      </h1>
      <section className="grid xs:grid-rows-2 md:grid-rows-1 md:grid-cols-2 xs:text-[10px] md:text-xs lg:text-lg">
        <div className="flex flex-col xs:gap-1 lg:gap-3 bg-lightGreen text-white xs:p-3 md:p-6 lg:p-20 xs:row-start-2 md:row-start-1 place-items-center">
          <h2 className="font-ubuntu xs:text-base md:text-lg lg:text-4xl font-bold">
            Hours
          </h2>
          <div className="flex flex-row xs:w-3/4 lg:w-4/5">
            <div className="flex flex-col xs:w-1/2">
              <p className="my-1">Monday</p>
              <hr className="border-opacity-75 border-white w-full" />
              <p className="my-1">Tuesday</p>
              <hr className="border-opacity-75 border-white w-full" />
              <p className="my-1">Wednesday</p>
              <hr className="border-opacity-75 border-white w-full" />
              <p className="my-1">Thursday</p>
              <hr className="border-opacity-75 border-white w-full" />
              <p className="my-1">Friday</p>
              <hr className="border-opacity-75 border-white w-full" />
              <p className="my-1">Weekends</p>
              <hr className="border-opacity-75 border-white w-full" />
            </div>
            <div className="text-right flex flex-col xs:w-1/2">
              <p className="my-1">8am - 4pm</p>
              <hr className="border-opacity-75 border-white w-full" />
              <p className="my-1">8am - 2pm</p>
              <hr className="border-opacity-75 border-white w-full" />
              <p className="my-1">8am - 4pm</p>
              <hr className="border-opacity-75 border-white w-full" />
              <p className="my-1">8am - 4pm</p>
              <hr className="border-opacity-75 border-white w-full" />
              <p className="my-1">8am - 2pm</p>
              <hr className="border-opacity-75 border-white w-full" />
              <p className="my-1">8am - 2pm</p>
              <hr className="border-opacity-75 border-white w-full" />
            </div>
          </div>
          <h2 className="font-ubuntu xs:text-base md:text-lg lg:text-4xl font-bold mt-4">
            Contact Us
          </h2>
          <p className="flex place-items-center">
            <FaLocationDot className="mr-2" />
            15 Westney Road N &#35;2, Ajax, ON, L1T 1P4{" "}
          </p>
          <p className="flex place-items-center">
            <FaPhone className="mr-3" />
            905&#45;428&#45;8055
          </p>
          <p className="flex place-items-center">
            <IoMail className="mr-3" />
            management.westneyheights@gmail.com
          </p>
          <p className="font-bold md:text-lg lg:text-xl xs:my-2 md:my-4">
            Visits are by walk-in only.
          </p>
          <p className="lg:text-base text-center">
            Patients are seen Monday through Sunday starting at 8am. Closing
            times may vary from posted hours depending on clinic capacity and
            wait times.
          </p>
          <p className="lg:text-base text-center">
            Patients can contact the clinic to find out the exact closing time
            and wait times for each day.
          </p>

          {/*<Calendar />*/}
        </div>
        <div className="">
          <CustomMap />
        </div>
      </section>
    </main>
  );
};
