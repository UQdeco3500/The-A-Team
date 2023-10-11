import React, { useState } from 'react';

function DaySchedule({ day, timeSlots, selectedTimeSlots, handleTimeSlotClick }) {
  return (
    <div className="day-schedule">
      <h2>{day}</h2>
      <div className="time-slots">
        {timeSlots.map((timeSlot) => (
          <div
            key={timeSlot}
            className={`time-slot ${selectedTimeSlots[day] === timeSlot ? 'selected' : ''}`}
            onClick={() => handleTimeSlotClick(day, timeSlot)} // Pass the day as well
          >
            {timeSlot}
          </div>
        ))}
      </div>
    </div>
  );
}

function ScheduleScreen() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Initialize a state variable for each day to keep track of the selected time slots
  const [selectedTimeSlots, setSelectedTimeSlots] = useState({});

  // Create an array of time slots (8:00 AM to 8:00 PM with half-hour divisions)
  const timeSlots = [];
  for (let hour = 8; hour <= 20; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      timeSlots.push(formattedTime);
    }
  }

  // Function to handle the click event for a time slot
  const handleTimeSlotClick = (day, timeSlot) => {
    // Create a new object to update the selected time slot for the specific day
    setSelectedTimeSlots((prevSelectedTimeSlots) => {
      const updatedSelectedTimeSlots = { ...prevSelectedTimeSlots };
      if (updatedSelectedTimeSlots[day] === timeSlot) {
        // If the clicked slot is already selected, unselect it
        delete updatedSelectedTimeSlots[day];
      } else {
        // Otherwise, select the clicked slot
        updatedSelectedTimeSlots[day] = timeSlot;
      }
      return updatedSelectedTimeSlots;
    });
  };

  return (
    <div className="schedule-screen">
      {daysOfWeek.map((day) => (
        <DaySchedule
          key={day}
          day={day}
          timeSlots={timeSlots}
          selectedTimeSlots={selectedTimeSlots}
          handleTimeSlotClick={handleTimeSlotClick}
        />
      ))}
    </div>
  );
}
export default ScheduleScreen;
