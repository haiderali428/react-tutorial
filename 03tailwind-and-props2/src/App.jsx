import { useState } from 'react'
import './App.css'
import Layout from './components/Layout/layout'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={< Contact />} />
      <Route path='/menu' element={<Menu/>} />
      </ Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
