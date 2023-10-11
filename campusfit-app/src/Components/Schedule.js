import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Link } from 'react-router-dom';

function ScheduleScreen() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const timeSlots = [];
  for (let hour = 8; hour <= 20; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      timeSlots.push(formattedTime);
    }
  }

  const [selectedTimeSlots, setSelectedTimeSlots] = useState({});

  const handleSelectSlot = ({ start, end }) => {
    const startTime = moment(start).format('HH:mm');
    const endTime = moment(end).format('HH:mm');
    const selectedRange = [];
    let currentTime = startTime;
    while (currentTime < endTime) {
      selectedRange.push(currentTime);
      const [hour, minute] = currentTime.split(':').map(Number);
      currentTime = moment({ hour, minute }).add(30, 'minutes').format('HH:mm');
    }

    // Create a new object to update the selected time slots for the specific day
    setSelectedTimeSlots((prevSelectedTimeSlots) => {
      const updatedSelectedTimeSlots = { ...prevSelectedTimeSlots };
      const day = moment(start).format('dddd'); // Get the day as a string
      updatedSelectedTimeSlots[day] = selectedRange;
      return updatedSelectedTimeSlots;
    });
  };

  const localizer = momentLocalizer(moment);

  return (
    <div className="schedule-screen">
      <Calendar
        localizer={localizer}
        events={[]} // You can use events for custom events if needed
        views={['week']}
        selectable
        onSelectSlot={handleSelectSlot}
        defaultView="week"
        defaultDate={new Date()}
        min={new Date(0, 0, 0, 8, 0, 0)}
        max={new Date(0, 0, 0, 20, 0, 0)}
        step={30}
        timeslots={2}
        slotDuration="00:30"
        dayPropGetter={(date) => ({
          className: `custom-day-header ${daysOfWeek[date.getDay()]}`,
        })}
      />

      <div className="selected-time-slots">
        <h2>Selected Time Slots</h2>
        <table>
          <thead>
            <tr>
              {daysOfWeek.map((day, index) => (
                <th key={day}>
                  {moment().startOf('week').add(index, 'days').format('MM/DD')} <br /> {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((timeSlot) => (
              <tr key={timeSlot}>
                {daysOfWeek.map((day) => (
                  <td key={day}>
                    {selectedTimeSlots[day] && selectedTimeSlots[day].includes(timeSlot) ? timeSlot : ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <Link to="/Workout-Plan">View Workout Plan</Link>
    </div>
    
  );
}

export default ScheduleScreen;
