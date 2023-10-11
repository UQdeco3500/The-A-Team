// WorkoutPlan.js
import React from 'react';
import '../WorkoutPlan.css'
const workoutData = {
    Sunday: [
      { time: '08:00', duration: 1.5, workout: 'Gym Workout' },
      { time: '09:30', duration: 0.75, workout: 'Run' },
      { time: '15:30', duration: 2.5, workout: 'Gym Workout' },
    ],
    Monday: [
      { time: '09:00', duration: 0.5, workout: 'HIIT' },
      { time: '12:00', duration: 1.25, workout: 'Run' },
      { time: '17:00', duration: 2.25, workout: 'Gym Workout' },
    ],
    // Continue for other days of the week
  };


function WorkoutPlan() {
    if (!workoutData) {
        return null; // Return null or some placeholder when workoutData is not available
      }
  // Define a function to calculate the duration in hours
  const calculateDurationInHours = (startTime, endTime) => {
    const start = new Date(`01/01/2000 ${startTime}`);
    const end = new Date(`01/01/2000 ${endTime}`);
    const duration = (end - start) / (60 * 60 * 1000); // Duration in hours
    alert (duration);
  };

  // Define a function to assign workouts based on duration
  const assignWorkoutBasedOnDuration = (duration) => {
    // Iterate through each day in workoutData
    for (const day in workoutData) {
      const dayWorkouts = workoutData[day];
  
      // Use filter to find workouts with matching duration
      const matchingWorkouts = dayWorkouts.filter((timeslot) => {
        const timeslotDuration = calculateDurationInHours(timeslot.time, timeslot.endTime);
        return timeslotDuration === duration;
      });
  
      // If there are matching workouts, return the workout of the first matching timeslot found
      if (matchingWorkouts.length > 0) {
        return matchingWorkouts[0].workout;
      }
    }
  
    // If no matching workout is found, return a default value as a string
    return 'Workout Not Found';
  };
  
  

  return (
    <div className="workout-plan-page">
      <h2>Workout Plan</h2>
      <ul>
        {Object.entries(workoutData).map(([day, timeslots]) => (
          <li key={day}>
            <strong>{day}:</strong>
            <ul>
              {timeslots.map((timeslot, index) => (
                <li key={index}>
                  {timeslot}: {assignWorkoutBasedOnDuration(calculateDurationInHours(timeslot, timeslots[index + 1]))}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutPlan;

