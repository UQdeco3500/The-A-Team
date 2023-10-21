import React from 'react';

export default function WorkoutScreen(props) {
  const { workoutPlan } = props;

  const days = Object.keys(workoutPlan);
  const exercises = days.reduce((acc, day) => {
    workoutPlan[day].forEach((exercise, index) => {
      if (!acc[index]) {
        acc[index] = {};
      }
      acc[index][day] = exercise;
    });
    return acc;
  }, []);

  return (
    <div style={{ margin: '20px' }}>
      <h2 style={{ background: 'white', padding: '10px' }}>Workout Plan</h2>
      <table style={{ background: 'white', border: '1px solid black', width: '100%' }}>
        <thead>
          <tr>
            {days.map((day, index) => (
              <th key={index} style={{ padding: '10px' }}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, index) => (
            <tr key={index}>
              {days.map((day, dayIndex) => (
                <td key={dayIndex} style={{ padding: '5px 10px' }}>
                  {exercise[day] ? exercise[day] : '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
