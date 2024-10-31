import vaccinePhoto from "../assets/service-images/vaccination.jpeg";
import tbPhoto from "../assets/service-images/tb-form.jpg";
import licensePhoto from "../assets/service-images/license.jpg";
import { NavLink } from "react-router-dom";

export const doctors = [
  {
    name: "Dr. Abdallah, Barwaaqo",
    cpso: "113645",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias deserunt vel. Ab iure laboriosam dignissimos nobis aspernatur, porro sed ipsum? Tenetur at, corrupti dolorem eum minus quibusdam quae consequatur?",
    daysWorked: "",
  },
  {
    name: "Dr. Al-Ward, Harith",
    cpso: "85882",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias deserunt vel. Ab iure laboriosam dignissimos nobis aspernatur, porro sed ipsum? Tenetur at, corrupti dolorem eum minus quibusdam quae consequatur?",
    daysWorked: "Monday, Thursday, Sunday and alternate Wednesdays",
  },
  {
    name: "Dr. Izzeldin, Abuelgasim",
    cpso: "77362",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias deserunt vel. Ab iure laboriosam dignissimos nobis aspernatur, porro sed ipsum? Tenetur at, corrupti dolorem eum minus quibusdam quae consequatur?",
    daysWorked: "",
  },
  {
    name: "Dr. Li, Donna",
    cpso: "91626",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias deserunt vel. Ab iure laboriosam dignissimos nobis aspernatur, porro sed ipsum? Tenetur at, corrupti dolorem eum minus quibusdam quae consequatur?",
    daysWorked: "Tuesday, Friday and alternate Wednesdays and Saturdays",
  },

  {
    name: "Dr. Lum, Bill",
    cpso: "59734",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias deserunt vel. Ab iure laboriosam dignissimos nobis aspernatur, porro sed ipsum? Tenetur at, corrupti dolorem eum minus quibusdam quae consequatur?",
    daysWorked: "Monday, Thursday and alternate Wednesdays and Saturdays",
  },
  {
    name: "Dr. Lum, Jeffrey",
    cpso: "65913",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias deserunt vel. Ab iure laboriosam dignissimos nobis aspernatur, porro sed ipsum? Tenetur at, corrupti dolorem eum minus quibusdam quae consequatur?",
    daysWorked: "",
  },
];

export const services = [
  {
    name: "Vaccination",
    description:
      "Vaccine availability is dependent on stocks and may not be available during your visit. To ensure that you will get a vaccine on your visit, please contact the clinic to enquire about the avaiablitiy of all your vaccines.",
    cost: "Covered by OHIP",
    image: vaccinePhoto,
  },
  {
    name: "TB Test",
    description:
      "TB tests vary in cost based on the steps and the purpose. The 2-step test requires 4 visits whereas the 1-step requires 2 visits. If the TB test is for work, it is a $30 charge per visit, for school or volunteering, it is covered by OHIP.",
    cost: "Dependent on reason",
    image: tbPhoto,
  },
  {
    name: "Driver’s License Medical",
    description:
      "Drivers License forms are filled out by select doctors. Please contact the clinic to know more about which doctors fill out the form and when they will be available.",
    cost: "$120",
    image: licensePhoto,
  },
  {
    name: "TTC Form",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias deserunt vel. Ab iure laboriosam dignissimos nobis aspernatur, porro sed ipsum? Tenetur at, corrupti dolorem eum minus quibusdam quae consequatur?",
    cost: "$30",
  },
  {
    name: "WSIB Forms",
    description:
      "We complete WSIB related paperwork such as Health Professionals Report (form 8), Functional Abilities Forms (FAFs), return to work recommendations, etc.",
    cost: "Covered by OHIP",
  },
  {
    name: "Sick Notes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias deserunt vel. Ab iure laboriosam dignissimos nobis aspernatur, porro sed ipsum? Tenetur at, corrupti dolorem eum minus quibusdam quae consequatur?",
    cost: "$20",
  },
  {
    name: "Ear Flush",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias deserunt vel. Ab iure laboriosam dignissimos nobis aspernatur, porro sed ipsum? Tenetur at, corrupti dolorem eum minus quibusdam quae consequatur?",
    cost: "$20",
  },
  {
    name: "Specialist Referrals",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias deserunt vel. Ab iure laboriosam dignissimos nobis aspernatur, porro sed ipsum? Tenetur at, corrupti dolorem eum minus quibusdam quae consequatur?",
    cost: "Covered by OHIP",
  },
  {
    name: "Prescription Refills",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias deserunt vel. Ab iure laboriosam dignissimos nobis aspernatur, porro sed ipsum? Tenetur at, corrupti dolorem eum minus quibusdam quae consequatur?",
    cost: "Covered by OHIP",
  },
  {
    name: "General Visits",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias deserunt vel. Ab iure laboriosam dignissimos nobis aspernatur, porro sed ipsum? Tenetur at, corrupti dolorem eum minus quibusdam quae consequatur?",
    cost: "Covered by OHIP",
  },
];

export const plan = [
  {
    summary: "1. What is your reason for visit?",
    detail: () => (
      <>
        Check out our{" "}
        <NavLink to="/services" className="hover:text-darkGreen underline">
          Services
        </NavLink>{" "}
        page to see if a physician will see you for your reason. If it is not
        mentioned, you can contact the clinic at 905-428-8055 to see if you will
        be seen.
      </>
    ),
  },
  {
    summary: "2. Can a doctor on call assist you?",
    detail:
      "While most of our physicians see all patients, there are exceptiosn for Driver's License forms, and physicals. If you are coming in for either of those, please contact contact the clinic at to see if the doctor on call can see you.",
  },
  {
    summary: "3. What time will you be arriving?",
    detail: () => (
      <>
        Please ensure that you arrive at the clinic well before closing time in
        order to ensure that you will be seen. The clinic may stop taking
        patients prior to posted closing time if the capacity is reached. Please
        refer to our{" "}
        <NavLink to={"/hours"} className="hover:text-darkGreen underline">
          hours
        </NavLink>{" "}
        to see if we are still open.
      </>
    ),
  },
  {
    summary: "4. What do I bring to the clinic?",
    detail: () => (
      <>
        1. A valid health card (if you are a OHIP patient) or $90 if you are a
        non-OHIP or out of country patient <br />
        2. If your health card is expired or lost, you must provide a deposit of
        $50 which is refundable if you bring back a new valid health card within
        30days of your visit.
      </>
    ),
  },
  {
    summary: "5. What should I expect at the clinic?",
    detail: () => (
      <>
        1. You will visit the front desk and they will instruct you to write
        down your name and tell you to either take a seat or return at a later
        time. Please note that this time is an estimate of when you might be
        seen depending on the number of patients before you <br />
        2. Your health card information and contact information will be
        collected when you return after which you will be admitted into an
        examination room. <br />
        3. Please be aware that wait times are estimates and may vary depending
        on each patient’s needs and the amount of patients in clinic at the
        time. We will make every effort to ensure that you are seen within a
        reasonable time however, we do appreciate your patience!
      </>
    ),
  },
];
