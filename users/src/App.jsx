import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  )
}

export default App
