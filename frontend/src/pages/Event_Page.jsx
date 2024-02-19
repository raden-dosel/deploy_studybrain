import { useEffect, useState } from "react";
import { format, getDay, parse, startOfWeek } from "date-fns";
import enUS from "date-fns/locale/en-US";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Main_Header from "../components/Main_Header";
import { Use_Events_Context } from "../hooks/use_Events_Context";
import Event_Details_Modal from "../components/event_components/Event_Details_Modal";
import Event_Form from "../components/event_components/Event_Form";

import { FaPlus } from "react-icons/fa";

function Event_Page() {
  const { dispatch, events } = Use_Events_Context();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedEvent(null);
    setShowModal(false);
  };

  const handleFormModalClose = () => {
    setShowFormModal(false);
  };

  const handleFormModalOpen = () => {
    setShowFormModal(true);
  };

  const eventsData = events.map((event) => {
    return {
      id: event._id,
      title: event.title,
      description: event.description,
      startDate: new Date(event.startDate),
      endDate: new Date(event.endDate),
      isDone: event.isDone,
    };
  });

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales: {
      enUS, // Use directly
    },
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://studybrain-backend.onrender.com/api/events"
        );
        const jsonResponse = await response.json();

        console.log(jsonResponse); // Log the API response

        if (jsonResponse) {
          dispatch({ type: "GET_EVENTS", payload: jsonResponse.events });
        } else {
          console.error(
            "Response does not contain an array of events:",
            jsonResponse
          );
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    fetchEvents();
  }, [dispatch, events]);

  return (
    <>
      <div>
        <Main_Header />
        <h1 className="ml-[333px] text-3xl font-bold my-4">Event Scheduler</h1>
        <div className="max-w-[800px] mx-auto mt-8 py-4 bg-offwhite flex flex-col items-center justify-center rounded-md shadow">
          <div className="w-[660px] flex flex-row justify-between">
            <h2 className="text-2xl font-bold">Calendar</h2>
            <button
              onClick={handleFormModalOpen}
              className="bg-slateblue text-offwhite shadow font-bold py-2 px-4 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out"
            >
              <FaPlus />
            </button>
          </div>
          <Calendar
            className="z-0"
            localizer={localizer}
            events={eventsData}
            startAccessor="startDate"
            endAccessor="endDate"
            style={{ height: 500, margin: "50px" }}
            onSelectEvent={handleEventClick} // Add event click handler
          />
        </div>

        {showModal && (
          <Event_Details_Modal
            event={selectedEvent}
            onClose={handleModalClose}
          />
        )}

        {showFormModal && <Event_Form onClose={handleFormModalClose} />}
      </div>
    </>
  );
}

export default Event_Page;
