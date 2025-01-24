import { NavLink } from 'react-router';

export const doctors = [
  {
    name: 'Dr. Li, Donna',
    cpso: '91626',
    daysWorked: 'Tuesday, Friday, alternate Wednesdays and Saturdays',
    image: '',
  },
  {
    name: 'Dr. Al-Ward, Harith',
    cpso: '85882',
    daysWorked: 'Monday, Thursday, Sunday, alternate Wednesdays',
    image: '',
  },
  {
    name: 'Dr. Lum, Bill',
    cpso: '59734',
    daysWorked: 'Monday, Thursday, alternate Wednesdays and Saturdays',
    image: '',
  },
  {
    name: 'Dr. Abdallah, Barwaaqo',
    cpso: '113645',
    daysWorked: '',
    image: '',
  },
  {
    name: 'Dr. Izzeldin, Abuelgasim',
    cpso: '77362',
    daysWorked: '',
    image: '',
  },
  {
    name: 'Dr. Lum, Jeffrey',
    cpso: '65913',
    daysWorked: '',
    image: '',
  },
];
export const management = [
  { name: 'Al Zaghi', position: 'Clinic Owner' },
  { name: 'Sheema Abdul Razzak', position: 'Clinic Manager' },
];
export const ohipServices = [
  'Vaccination',
  'WSIB Forms',
  'Specialist Referral',
  'Prescription Refills',
  'General Visits',
];
export const nonOhipServices = [
  'TB Test',
  'Driver’s Medical',
  'Sick Notes',
  'Ear Flush',
  'TTC Form',
];

export const plan = [
  {
    summary: 'What is your reason for visit?',
    detail: () => (
      <>
        Check out our{' '}
        <NavLink to="/services" className="underline hover:text-white">
          Services
        </NavLink>{' '}
        page to see if a physician will see you for your reason. If it is not
        mentioned, you can contact the clinic at 905-428-8055 to see if you will
        be seen.
      </>
    ),
  },
  {
    summary: 'Can a doctor on call assist you?',
    detail:
      "While most of our physicians see all patients, there are exceptiosn for Driver's License forms, and physicals. If you are coming in for either of those, please contact contact the clinic at to see if the doctor on call can see you.",
  },
  {
    summary: 'What time will you be arriving?',
    detail: () => (
      <>
        Please ensure that you arrive at the clinic well before closing time in
        order to ensure that you will be seen. The clinic may stop taking
        patients prior to posted closing time if the capacity is reached. Please
        refer to our{' '}
        <NavLink to={'/hours'} className="underline hover:text-white">
          hours
        </NavLink>{' '}
        to see if we are still open.
      </>
    ),
  },
  {
    summary: 'What do I bring to the clinic?',
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
    summary: 'What should I expect at the clinic?',
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
