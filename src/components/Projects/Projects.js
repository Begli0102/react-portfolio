import React from "react";
import { Link } from "react-router-dom";
// import ReactTypingEffect from 'react-typing-effect';
import "./Projects.css";

import random from "../../images/random-images.png";
import mainView from "../../images/main-view.png";
import parfumes from "../../images/parfumes.png";
import meetapp from "../../images/meetapp.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects container">
        <div className="project-header">
          <h1 className="section-title">
            Resent <span>Projects</span>{" "}
          </h1>
        </div>
        <div className="all-projects">
          <div className="project-items">
            <div className="project-info">
              <h1>MyFlix (React)</h1>
              <p>
                MyFlix is a full-stack MERN application. In this application
                users can see the information about the movies, add them to
                favorite, see their favorite movies in their account, delete
                them and update their account information.
              </p>
            </div>
            <div className="project-img">
              <img src={mainView} width="500px" height="300px" alt="alt" />
            </div>
            <div className="details">
              <a href="https://myflix1.netlify.app/">
                <button>Live</button>
              </a>
              <a href="https://github.com/Begli0102/myFlix-client">
                <button>Code</button>
              </a>
            </div>
          </div>

          <div className="project-items">
            <div className="project-info">
              <h1>BK-parfumes</h1>
              <p>
                BK-parfumes is a full-stack e-commerce application, built with
                MERN stack. In this application users can see the information
                about parfumes, add them to cart,see the total price and delete
                them.
              </p>
            </div>
            <div className="project-img">
              <img src={parfumes} width="500px" height="300px" alt="alt" />
            </div>
            <div className="details">
              <a href="https://bkparfumes.netlify.app/">
                <button>Live</button>
              </a>
              <a href="https://github.com/Begli0102/bk-parfumes">
                <button>Code</button>
              </a>
            </div>
          </div>

          <div className="project-items">
            <div className="project-info">
              <h1>Meet app</h1>
              <p>
                Meet app is an application which allows user to search for a
                city and get a list of events hosted in that city. The user can
                view charts that display how many events will take place in that
                city on upcoming days as well as view the popularity of event
                genres in the form of a pie chart.
              </p>
            </div>
            <div className="project-img">
              <img src={meetapp} width="500px" height="300px" alt="alt" />
            </div>
            <div className="details">
              <a href="https://begli0102.github.io/meet-app/">
                <button>Live</button>
              </a>
              <a href="https://github.com/Begli0102/meet-app">
                <button>Code</button>
              </a>
            </div>
          </div>

          <div className="project-items">
            <div className="project-info">
              <h1>Random-images</h1>
              <p>
                It is an app created with React. In this app a user can add a
                photo by clicking Add button. The photos are added randomly from
                Unsplash.com. A user can remove the photo by clicking Remove
                button. It will remove the last photo.
              </p>
            </div>
            <div className="project-img">
              <img src={random} width="500px" height="300px" alt="alt" />
            </div>
            <div className="details">
              <a href="https://begli0102.github.io/random-images/">
                <button>Live</button>
              </a>

              <a href="https://github.com/Begli0102/random-images">
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
