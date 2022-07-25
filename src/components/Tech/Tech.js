import React from 'react'
import './Tech.css'

import Css from '../../TechImages/css.jpg'
import HTML from '../../TechImages/html.jpg'
import JavaScript from '../../TechImages/javaScript.jpg'
import MongoDB from '../../TechImages/mongoDB.png'
import NodeExpress from '../../TechImages/node+express.png'
import Npm from '../../TechImages/npm.jpg'
import Reactjs from '../../TechImages/react.jpg'
import Restapi from '../../TechImages/restapi.jpg'

const Tech = () => {
  return (
    <div className='tech-container'>
      <h1>
        Key <span>Skills</span>
      </h1>
      <div className='tech-items'>
        <img
          className='logos'
          src={Css}
          width='100px'
          height='100px'
          alt='logos'
        />
        <img
          className='logos'
          src={HTML}
          width='100px'
          height='100px'
          alt='logos'
        />
        <img
          className='logos'
          src={JavaScript}
          width='100px'
          height='100px'
          alt='logos'
        />
        <img
          className='logos'
          src={MongoDB}
          width='100px'
          height='100px'
          alt='logos'
        />
        <img
          className='logos'
          src={NodeExpress}
          width='100px'
          height='100px'
          alt='logos'
        />
        <img
          className='logos'
          src={Npm}
          width='100px'
          height='100px'
          alt='logos'
        />
        <img
          className='logos'
          src={Reactjs}
          width='100px'
          height='100px'
          alt='logos'
        />
        <img
          className='logos'
          src={Restapi}
          width='100px'
          height='100px'
          alt='logos'
        />
      </div>
    </div>
  )
}

export default Tech
