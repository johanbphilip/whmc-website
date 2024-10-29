import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { CustomMap } from "../components/CustomMap";

export const Hours = () => {
  return (
    <main className="mt-20 flex flex-col place-items-center py-20 px-10 text-darkGreen font-serif">
      <h1 className="font-ubuntu font-bold text-6xl mb-20">Our Hours.</h1>
      <section className="grid grid-cols-2 w-4/5">
        <div className="flex flex-col gap-2 bg-lightGreen text-white p-10">
          <h2 className="font-ubuntu text-4xl font-bold">Contact Us</h2>
          <p className="flex place-items-center">
            <FaLocationDot className="mr-2 size-5" />
            15 Westney Road N &#35;2, Ajax, ON, L1T 1P4{" "}
          </p>
          <p className="flex place-items-center">
            <FaPhone className="mr-3" />
            905&#45;428&#45;8055
          </p>
          <p className="flex place-items-center">
            <IoMail className="mr-3" />
            management.westeyheights@gmail.com
          </p>
          <p className="font-bold text-xl my-4">Visits are by walk-in only.</p>
          <p>
            Patients are seen Monday through Sunday starting at 8am. Closing
            times may vary from posted hours depending on clinic capacity and
            wait times.
          </p>
          <p>
            Patients can contact the clinic to find out the exact closing time
            and wait times for each day.
          </p>
          <h2 className="font-ubuntu text-4xl font-bold">Hours</h2>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <p className="my-1">Monday</p>
              <hr className="border-opacity-75 border-darkGreen w-40" />
              <p className="my-1">Tuesday</p>
              <hr className="border-opacity-75 border-darkGreen w-40" />
              <p className="my-1">Wednesday</p>
              <hr className="border-opacity-75 border-darkGreen w-40" />
              <p className="my-1">Thursday</p>
              <hr className="border-opacity-75 border-darkGreen w-40" />
              <p className="my-1">Friday</p>
              <hr className="border-opacity-75 border-darkGreen w-40" />
              <p className="my-1">Weekends</p>
              <hr className="border-opacity-75 border-darkGreen w-40" />
            </div>
            <div className="text-right flex flex-col">
              <p className="my-1">8am - 4pm</p>
              <hr className="border-opacity-75 border-darkGreen w-40" />
              <p className="my-1">8am - 2pm</p>
              <hr className="border-opacity-75 border-darkGreen w-40" />
              <p className="my-1">8am - 4pm</p>
              <hr className="border-opacity-75 border-darkGreen w-40" />
              <p className="my-1">8am - 4pm</p>
              <hr className="border-opacity-75 border-darkGreen w-40" />
              <p className="my-1">8am - 2pm</p>
              <hr className="border-opacity-75 border-darkGreen w-40" />
              <p className="my-1">8am - 2pm</p>
              <hr className="border-opacity-75 border-darkGreen w-40" />
            </div>
          </div>
          {/*<Calendar />*/}
        </div>
        <div className="">
          <CustomMap />
        </div>
      </section>
    </main>
  );
};
