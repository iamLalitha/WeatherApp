import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import WeatherPage from './components/WeatherPage';



function App() {


  return (
   <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/weather" element={<WeatherPage/>}/>
          </Routes>
        </Router>
    </div>
        
  )
}

export default App
