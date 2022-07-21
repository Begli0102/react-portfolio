import React from 'react'
import { Link } from 'react-router-dom'
// import ReactTypingEffect from 'react-typing-effect';
import './Projects.css'

import random from '../../images/random-images.png'
import mainView from '../../images/main-view.png'
import parfumes from '../../images/parfumes.png'
import image from '../../images/image.png'
import chatapp from '../../images/10.png'
import chatappVideo from '../../images/chatapp-video.MP4'
import words from '../../images/words.png'

const Projects = () => {
  return (
    <section id='projects'>
      <div className='projects container'>
        <div className='project-header'>
          <h1 className='section-title'>
            Resent <span>Projects</span>{' '}
          </h1>
        </div>
        <div className='all-projects'>
          <div className='project-items'>
            <div className='project-info'>
              <h1>MyFlix (React)</h1>
              <p>
                MyFlix is a full-stack MERN application. In this application
                users can see the information about the movies, add them to
                favorite, see their favorite movies in their account, delete
                them and update their account information.
              </p>
            </div>
            <div className='project-img'>
              <img src={mainView} width='500px' height='300px' alt='alt' />
            </div>
            <div className='details'>
              <a href='https://myflix1.netlify.app/'>
                <button>Live</button>
              </a>
              <a href='https://github.com/Begli0102/myFlix-client'>
                <button>Code</button>
              </a>
            </div>
          </div>

          <div className='project-items'>
            <div className='project-info'>
              <h1>BK-parfumes</h1>
              <p>
                BK-parfumes is a full-stack e-commerce application, built with
                MERN stack. In this application users can see the information
                about parfumes, add them to cart,see the total price and delete
                them.
              </p>
            </div>
            <div className='project-img'>
              <img src={parfumes} width='500px' height='300px' alt='alt' />
            </div>
            <div className='details'>
              <a href='https://bkperfumes.netlify.app'>
                <button>Live</button>
              </a>
              <a href='https://github.com/Begli0102/bk-parfumes'>
                <button>Code</button>
              </a>
            </div>
          </div>

          <div className='project-items'>
            <div className='project-info'>
              <h1>Image app</h1>
              <p>
                Image app is an application which allows users to search for an
                image and get a list of images related to the search. The user
                can view information (number of views, downloads, likes
                etc)about those images. All the informations are fetched from
                pixabay API
              </p>
            </div>
            <div className='project-img'>
              <img src={image} width='500px' height='300px' alt='alt' />
            </div>
            <div className='details'>
              <a href='https://imageeapp.netlify.app'>
                <button>Live</button>
              </a>
              <a href='https://github.com/Begli0102/image-app'>
                <button>Code</button>
              </a>
            </div>
          </div>

          <div className='project-items'>
            <div className='project-info'>
              <h1>Word typing game</h1>
              <p>
                It is an application built with React. In this app a user can
                type as many words as he/she can in 30 seconds. Each typed word
                is counted and is placed in a corresponding place. When the time
                is up, the user can see the correct and misspelled words in the
                sidebar.
              </p>
            </div>
            <div className='project-img'>
              <img src={words} width='500px' height='300px' alt='alt' />
            </div>
            <div className='details'>
              <a href='https://randomwordgame.netlify.app/'>
                <button>Live</button>
              </a>

              <a href='https://github.com/Begli0102/wordGame'>
                <button>Code</button>
              </a>
            </div>
          </div>

          <div className='project-items'>
            <div className='project-info'>
              <h1>Chat app</h1>
              <p>
                A chat app for mobile devices built with React-Native. It
                provides users with a chat interface where they can send/receive
                text messages and images as well as share their location.
              </p>
            </div>
            <div className='project-img'>
              <img src={chatapp} width='500px' height='300px' alt='alt' />
            </div>
            <div className='details'>
              <a href={chatappVideo}>
                <button>Live</button>
              </a>

              <a href='https://github.com/Begli0102/Chatapp'>
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
