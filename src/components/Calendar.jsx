import { gapi } from "gapi-script";
import React, { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_CALENDAR_API_KEY;
const CALENDAR_ID = import.meta.env.VITE_CALENDAR_ID;

export const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Initialize the GAPI client
    gapi.load("client", async () => {
      try {
        await window.gapi.client.init({
          apiKey: API_KEY,
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
          ],
        });
        fetchEvents();
      } catch (error) {
        console.error("Error initializing GAPI client:", error);
      }
    });

    const fetchEvents = async () => {
      try {
        const today = new Date();

        const monday = new Date(today);
        monday.setDate(today.getDate() - today.getDay() + 1);
        monday.setHours(0, 0, 0, 0);

        const sunday = new Date(monday);
        sunday.setDate(monday.getDate() + 6);
        sunday.setHours(23, 59, 59, 999);

        const response = await gapi.client.calendar.events.list({
          calendarId: CALENDAR_ID,
          timeMin: monday.toISOString(),
          timeMax: sunday.toISOString(),
          showDeleted: false,
          singleEvents: true,
          orderBy: "startTime",
          maxResults: 20,
        });
        const data = response.result.items;
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
  }, []);
  const dateFormatter = (dateTime) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    const date = new Date(dateTime);
    const daysOfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return {
      fullDate: date.toLocaleDateString(undefined, options),
      day: daysOfTheWeek[date.getDay()],
    };
  };

  return (
    <div>
      <h1 className="font-serif">Doctor's Schedule</h1>
      {events.map((event, index) => (
        <div key={index}>
          <h2 className="font-ubuntu">{event.summary}</h2>
          <p>{`${dateFormatter(event.start.dateTime).day}, ${
            dateFormatter(event.start.dateTime).fullDate
          }`}</p>
          <p>{dateFormatter(event.start.dateTime).time}</p>
        </div>
      ))}
    </div>
  );
};
