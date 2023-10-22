import React from 'react'
import './App.css'
import Clock from './component/clock';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Stopwatch from './component/stopwatch';
import Timer from './component/timer';
import Navbar from './component/navbar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Clock/>}/>
          <Route path='/clock' element={<Clock/>}/>
          <Route path='/stopwatch' element={<Stopwatch/>}/>
          <Route path='/timer' element={<Timer seconds={15}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    )
}

export default App;
