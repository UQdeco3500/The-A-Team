import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen';
import UploadScreen from './Components/UploadScreen';
import ScheduleScreen from './Components/Schedule';
import WorkoutPlan from './Components/WorkoutScreen';
function App() {
  return (
    <Router>
      <header className='header'>
      <h2><Link to='/' className='logoCampusfit'>Campus Fit</Link></h2>
      <Link to="/" className='headerButtons'>Home</Link>
      <button className='headerButtons'>Services</button>
      <button className='headerButtons'>About Us</button>
      <button className='headerButtons'>Community</button>
      </header>
      <main>
      <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Upload" element={<UploadScreen/>}/>
          <Route path="/Schedule" element={<ScheduleScreen/>}/>
          <Route path="/Workout-Plan" element={<WorkoutPlan/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
