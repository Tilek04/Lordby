import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Auth from './Auth';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Routes>
    <Route path='/' element={<Auth/>}/>
  </Routes>
    </>
  )
}

export default App
