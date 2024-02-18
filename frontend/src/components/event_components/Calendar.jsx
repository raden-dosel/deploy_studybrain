import { useState } from "react";
import Event_Form from "./Event_Form";
import "react-calendar/dist/Calendar.css";
import CalendarComponent from "react-calendar";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className=" flex col-span-2 justify-center items-center">
      <div className="mx-10">
        {selectedDate && <Event_Form date={selectedDate} />}
      </div>
      <div className="my-4 mx-10">
        <CalendarComponent
          className="react-calendar"
          onChange={handleDateChange}
          value={selectedDate}
        />
      </div>
    </div>
  );
};

export default Calendar;
