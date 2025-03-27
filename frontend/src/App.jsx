import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import './App.css'

import HomePage from './pages/homepage'
import NavigationBar from './components/NavigationBar'
import Chatbot from './pages/Chatbot'
import Health_Monitor from './pages/Health_Monitor'
import { Reminder } from './pages/Reminder'
import Predict from './pages/Predict'
import Signin from './pages/Signin'
import Register from './pages/Register'

function App() {
  
 
  return (
    <PrimeReactProvider>
    <>
      <NavigationBar/>
      <Routes>
        <Route path="/*" element = {<HomePage/>}/>
        <Route path="/chatbot" element={<Chatbot/>}/>
        <Route path ="/monitor" element={<Health_Monitor/>}/>
        <Route path ="/reminder" element={<Reminder/>}/>
        <Route path ="/learn" element={<Predict/>}/>
        <Route path ="/signin" element={<Signin/>}/>
        <Route path ="/register/" element={<Register isRegister={true}/>}/>
    </Routes>
    </>
    </PrimeReactProvider>

  )
}

export default App
