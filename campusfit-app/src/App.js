import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen';
import UploadScreen from './Components/UploadScreen';
import ScheduleScreen from './Components/Schedule';
import WorkoutPlan from './Components/WorkoutScreen';
import LeaderBoard from './Components/LeaderBoard';
import UserStats from './Components/UserStats';
function App() {
  const workoutPlan = {};
  return (
    <Router>
      <header className='header'>
      <h2><Link to='/' className='logoCampusfit' style={{textDecoration:'none'}}>Campus Fit</Link></h2>
      <Link to="/" className='headerButtons'>Home</Link>
      <button className='headerButtons'>Services</button>
      <button className='headerButtons'>About Us</button>
      <Link to='/community' className='headerButtons'>Community</Link>
      </header>
      <main>
      <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Upload" element={<UploadScreen />} />
          <Route path="/Schedule" element={<ScheduleScreen workoutPlan={workoutPlan}/>} />
          <Route path="/Workout-Plan" element={<WorkoutPlan workoutPlan={workoutPlan} />} />
          <Route path="/community" element={<LeaderBoard />} />
          <Route path="/userStats/:uid" element={<UserStats/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
