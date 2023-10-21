import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
import workoutData from './WorkoutData.json';
import exercisesData from '../Data/exercises.json';

function ScheduleScreen(props) {
  const workoutPlan = {};
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  console.log(workoutData.Sunday[0].duration);

  const convertToMinutes = (duration) => {
    const [hours, minutes] = duration.split('h').map((item) => item.trim());
    const totalMinutes = parseInt(hours) * 60 + parseInt(minutes.replace('m', ''));
    return totalMinutes;
  };
  
  const findWorkoutForDay = (day, duration) => {
    workoutPlan[day] = []; // Initialize as an array
    let totalMinutes = convertToMinutes(duration);
    console.log(totalMinutes);
    if (exercisesData && exercisesData.exercises) {
      const shuffledExercises = exercisesData.exercises.sort(() => Math.random() - 0.5);
      for (const exercise of shuffledExercises) {
        if (exercise.duration_minutes <= totalMinutes) {
          workoutPlan[day].push(exercise.name); // Push into the array
          totalMinutes -= exercise.duration_minutes;
          if (totalMinutes <= 0) break;
        }
      }
    }
    console.log(workoutPlan);
    const workoutPlanArray = workoutPlan[day].length > 0 ? [{ day, workout: workoutPlan[day] }] : [{ day, workout: ['No workout found'] }];
    return workoutPlanArray;
  };
  
  

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
    const endTime = moment(end).format('HH:mm'); // Add 30 minutes to include the last slot
    const selectedRange = [];
    let currentTime = startTime;
    while (currentTime <= endTime) {
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

  // Calculate the total duration for each day
  const dayDurations = {};
  daysOfWeek.forEach((day) => {
    if (selectedTimeSlots[day]) {
      const startTime = moment(selectedTimeSlots[day][0], 'HH:mm');
      const endTime = moment(selectedTimeSlots[day][selectedTimeSlots[day].length - 1], 'HH:mm');
      const duration = moment.duration(endTime.diff(startTime));
      dayDurations[day] = `${duration.hours()}h ${duration.minutes()}m`;
    }
  });

  return (
    <div className="schedule-screen">
      <Calendar
        localizer={localizer}
        events={[]}
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
      <div className="day-durations">
        <h2>Total free time per day</h2>
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
            <tr>
              {daysOfWeek.map((day) => (
                <td key={day}>
                  {dayDurations[day] ? (
                    <div>
                      {dayDurations[day]}
                      <br />
                      {findWorkoutForDay(day, dayDurations[day]).map((item, index) => (
                        <div key={index}>
                          {item.day}: {item.workout.join(', ')}
                        </div>
                      ))}
                    </div>
                  ) : (
                    ''
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <Link
  to={{
    pathname: '/Workout-Plan',
    state: { workoutPlan: workoutPlan }, // Pass workoutPlan as the state
  }}
>
  View Workout Plan
</Link>
    </div>
  );
  
}

export default ScheduleScreen;