import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen';
import UploadScreen from './Components/UploadScreen';
import ScheduleScreen from './Components/Schedule';
function App() {
  return (
    <Router>
      <header className='header'>
      <h2 className='logoCampusfit'>Campus Fit</h2>
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
        </Routes>
      </main>
    </Router>
  );
}

export default App;
