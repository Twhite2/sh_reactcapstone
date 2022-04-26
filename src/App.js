import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import About from './component/About/About'
import Products from './component/Products/Products'
import Contact from './component/Contact/Contact'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

    </div>
  )
}

export default App