import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import Social from '../Social/Social'
import './About.css'

import image from '../../images/avatar2.jpg'
import Tech from '../Tech/Tech'

const About = () => {
  return (
    <section id='about'>
      <div className='about container'>
        <div className='col-left'>
          <img
            src={image}
            className='float-start'
            width='200px'
            height='200px'
            alt=''
          />
        </div>
        <div className='col-right'>
          <h1 className='title'>
            About <span>me</span>
          </h1>

          <div>
            <ReactTypingEffect
              className='typingeffect'
              text={[
                'I am Begli Kakabalov',
                'I am a passionate Frontend developer'
              ]}
              speed={100}
              eraseDelay={700}
            />
          </div>
          <p>
            {' '}
            I am a Frontend Developer and former entrepreneur with a teaching
            background. I have always been interested in web applications, how
            to build how to run them, how to write a code. One youtube video
            sparked my curiosity. I started a full-stack web development boot
            camp and completed it successfully. During the boot camp, I have
            learned so many new things. Learning to code gave me a newfound
            appreciation of the work that gets put into the technology that many
            take for granted. I love the idea of bringing my imagination to life
            and developing my own technical solutions. In my teaching years, I
            have learned how to cooperate with team members to grow together and
            developed communication skills. Adaptability to the new environment
            is one of my core transferable skills. From trading years I have
            learned how to organize the working process by dividing it into a
            small to-do list
          </p>

          <p>
            {' '}
            My eagerness for continuous learning makes me a better Frontend
            Developer. After work, I used to learn methodology on how to gain a
            maximum result from each subject. With this mindset, I would like to
            bmy future company. Besides this, my goal will be to learn and
            accelerate my professional and personal development from experienced
            team members and grow together.
          </p>

          <a
            href='../../images/resume.pdf'
            target='blank'
            className='about-btn'
            value='download'
          >
            Download Resume
          </a>
        </div>
      </div>
      <Tech />
      <Social />
    </section>
  )
}

export default About
