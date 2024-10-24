import docAndPatient from "../assets/doc-patient1.jpeg";
import outsideClinic from "../assets/outside-clinic.jpg";
export const Home = () => {
  return (
    <>
      <main className="mt-[4rem] flex flex-col place-items-center py-20 px-10 text-darkGreen">
        <h1 className="font-ubuntu font-bold text-6xl">
          Westney Heights Medical Centre.
        </h1>
        <div className="grid grid-cols-3 grid-rows-3 gap-4 w-[50vw] h-[50vh] my-10">
          <div className="col-span-2 row-span-2">
            <img
              src={docAndPatient}
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <div className="bg-blue-300 rounded-lg">
            <img
              src={docAndPatient}
              className=" rounded-xl w-full h-full object-cover"
            />
          </div>
          <div className="bg-green-300 rounded-lg">
            <img
              src={docAndPatient}
              className=" rounded-xl w-full h-full object-cover"
            />
          </div>
          <div className="bg-yellow-300 rounded-lg">
            <img
              src={docAndPatient}
              className=" rounded-xl w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 bg-purple-300 rounded-lg">
            <img
              src={docAndPatient}
              className=" rounded-xl w-full h-full object-cover"
            />
          </div>
        </div>
        <p className="font-serif font-thin text-center px-40 pb-10 text-xl text-balance leading-loose tracking-wide">
          <span className="text-red-500 font-normal">
            A summary or welcome message goes here, maybe something along the
            lines of: <br />
          </span>
          Westney Heights Medical Centre is a walk-in clinic located at the
          intersection of Highway 2 (Kingston) & Westney Road. We are a
          comprehensive clinic that aims to provide walk-in care to patients who
          need urgent care, or cannot access their family physicians. Our
          Physicians are dedicated to each patient and will provide the most
          comprehensive and quality medical services in a modern, clean and
          caring environment. We also have an onsite imaging clinic, pharmacy,
          physiotherapy clinic and spine care that can also tend to patient
          needs. <br />
          <span className="text-red-500 font-normal">
            WORD THIS BETTER, THIS IS A PLACE HOLDER.
          </span>
          <br />
          Maybe include Serving Ajax since ...?
          <br />
          Could also include mission/vision if needed
        </p>
        <p className="font-serif font-thin text-center px-40 pb-10 text-xl text-balance leading-loose tracking-wide">
          Please note that the walk-in clinic is based on capacity and can close
          early on any given day. Once we are at capacity we are not able to
          accept any more patients for that day.
          <span className="text-red-500 font-normal">
            MOVE TO THE HOURS SECTION
          </span>
        </p>
      </main>
      <div
        className="h-[50vh] bg-fixed bg-center bg-cover bg-darkGreen bg-opacity-50 bg-blend-multiply"
        style={{ backgroundImage: `url(${outsideClinic})` }}
      ></div>
    </>
  );
};
