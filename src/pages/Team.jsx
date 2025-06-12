import {
  doctors as doctorsList,
  management as managementList,
} from '../assets/data.jsx';
import { useState } from 'react';
import { Doctor, Profile } from '../components/Doctor.jsx';
import { Helmet } from 'react-helmet';

export const Team = () => {
  const [doctors, setDoctors] = useState(doctorsList);
  const [management, setManagement] = useState(managementList);
  return (
    <>
      <Helmet>
        <title>Our Team | WHMC</title>
        <meta
          name="description"
          content="Meet our dedicated team of healthcare professionals at Westney Heights Medical Centre. Our physicians and management staff are committed to providing exceptional care and support to our patients."
        />
        <link
          rel="canonical"
          href="https://westneyheightsmedical.com/our-team"
        />
        <meta og:title="Our Team | WHMC" />
        <meta og:description="Meet our dedicated team of healthcare professionals at Westney Heights Medical Centre. Our physicians and management staff are committed to providing exceptional care and support to our patients." />
        <meta
          property="og:image"
          content="https://westneyheightsmedical.com/assets/our-team.png"
        ></meta>
        <meta
          property="og:site_name"
          content="Westney Heights Medical Centre"
        ></meta>
        <meta property="og:title" content="Our Team | WHMC"></meta>
        <meta
          property="og:url"
          content="https://westneyheightsmedical.com/our-team"
        ></meta>
      </Helmet>
      <main className="main-container">
        <h1 className="text-center font-ubuntu font-bold xxs:my-10 xxs:text-4xl md:my-20 md:text-6xl">
          Physicians.
        </h1>
        <section className="md:mb-20 lg:px-36">
          <div className="grid w-fit xxs:gap-5 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 lg:gap-10">
            {doctors.map((doctor, index) => (
              <Doctor doctor={doctor} key={index} />
            ))}
          </div>
        </section>
        <section className="flex w-full flex-col place-items-center items-center rounded-xl bg-whiteGreen xxs:py-5 md:py-20">
          <h1 className="font-ubuntu font-bold xxs:my-10 xxs:text-4xl md:mb-20 md:text-6xl">
            Management.
          </h1>
          <div className="grid w-fit xxs:gap-5 xxs:px-5 md:grid-cols-2 md:grid-rows-1 md:gap-10 md:px-0">
            {management.map((profile, index) => (
              <Profile profile={profile} key={index} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
