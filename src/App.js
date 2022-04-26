import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import About from './component/About/About'
import Products from './component/Products/Products'
import Contact from './component/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Products />
      <Contact />
    </div>
  )
}

export default App