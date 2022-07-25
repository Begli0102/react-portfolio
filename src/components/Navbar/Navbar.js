import React, { useState } from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>
          <Link exact to='/' activeClassName='active' className='nav-logo'>
            Begli's portfolio
            <i className='fas fa-code'></i>
          </Link>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link exact to='/' activeClassName='active' className='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                exact
                to='/about'
                activeClassName='active'
                className='nav-link'
              >
                About me
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                exact
                to='/projects'
                activeClassName='active'
                className='nav-link'
              >
                Projects
              </Link>
            </li>
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
