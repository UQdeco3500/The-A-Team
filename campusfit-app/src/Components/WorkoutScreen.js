import React, { useState } from 'react';
import exercisesData from '../Data/exercises.json';

export default function WorkoutScreen(props) {
  const { workoutPlan } = props;
  const days = Object.keys(workoutPlan);
  const [currentWorkoutPlan, setCurrentWorkoutPlan] = useState(workoutPlan);

  const exercises = days.reduce((acc, day) => {
    currentWorkoutPlan[day].forEach((exercise, index) => {
      if (!acc[index]) {
        acc[index] = {};
      }
      acc[index][day] = exercise;
    });
    return acc;
  }, []);

  const [selectedExercise, setSelectedExercise] = useState(null);
  const [swapselectedExercise, setSwapSelectedExercise] = useState([]);

  const handleExerciseClick = (exercise,day,index) => {
    setSelectedExercise(exercise);
    console.log('aa',index);
    setSwapSelectedExercise({ exercise, index, day });
  };

  const handleExerciseSwap = () => {
    const updatedWorkoutPlan = { ...currentWorkoutPlan };
    console.log(swapselectedExercise.index);
    updatedWorkoutPlan[swapselectedExercise.day][swapselectedExercise.index] = selectedExercise;
    setCurrentWorkoutPlan(updatedWorkoutPlan);
    console.log('Updated workout plan:', updatedWorkoutPlan);
  };
  

  return (
    <div style={{ margin: '20px' }}>
      <h2 style={{padding: '10px' }}>Workout Plan</h2>
      <table style={{ background: 'white', border: '1px solid black', width: '100%' }}>
        <thead>
          <tr>
            {days.map((day, index) => (
              <th key={index} style={{ padding: '10px', border: '1px solid black' }}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, index) => (
            <tr key={index}>
              {days.map((day, dayIndex) => (
                <td
                  key={dayIndex}
                  style={{ padding: '5px 10px', border: '1px solid black' }}
                  onClick={() => handleExerciseClick(exercise[day],day,index)}
                >
                  {exercise[day] ? exercise[day] : '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {selectedExercise && (
        <div style={{ marginTop: '20px' }}>
          <select
            style={{ width: '200px', padding: '5px', fontSize: '16px' }}
            onChange={(e) => setSelectedExercise(e.target.value)}
            value={selectedExercise}
          >
            <option value="">Select an exercise to swap</option>
            {exercisesData.exercises.map((exercise, index) => (
              <option key={index} value={exercise.name}>
                {exercise.name}
              </option>
            ))}
          </select>
          <button
            style={{ marginLeft: '10px', fontSize: '20px' }}
            onClick={() => handleExerciseSwap()} // Adjust with actual day and index
          >
            Swap Exercise
          </button>
        </div>
      )}
    </div>
  );
}
