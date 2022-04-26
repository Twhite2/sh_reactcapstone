import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

      <nav className='nav-bar'>

        <h1 className='logo'>Restaurant</h1>  
        <div className='nav-menu'>
          <Link className='nav-item' to="/">Home</Link>
          <Link className='nav-item' to="./Products">Products</Link>
          <Link className='nav-item' to="./About">About</Link>
          <Link className='nav-item' to="./Contact">Contact</Link>
        </div>
        
      </nav>
      
    </div>
  )
}

export default Navbar